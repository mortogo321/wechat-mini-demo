# Multi-stage Dockerfile for WeChat Mini Program API Server

# ============================================
# Stage 1: Base
# ============================================
FROM node:lts-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare yarn@stable --activate

# ============================================
# Stage 2: Dependencies
# ============================================
FROM base AS deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# ============================================
# Stage 3: Development
# ============================================
FROM base AS development
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=development
EXPOSE 3000
CMD ["yarn", "dev"]

# ============================================
# Stage 4: Staging
# ============================================
FROM base AS staging
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=staging
EXPOSE 3000
CMD ["yarn", "staging"]

# ============================================
# Stage 5: Production
# ============================================
FROM base AS production
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 appuser

COPY --from=deps --chown=appuser:nodejs /app/node_modules ./node_modules
COPY --chown=appuser:nodejs . .

USER appuser
ENV NODE_ENV=production
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

CMD ["yarn", "start"]
