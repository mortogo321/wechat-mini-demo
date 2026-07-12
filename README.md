# WeChat Mini Program Demo

A WeChat Mini Program feature showcase paired with a small Express mock API, demonstrating Mini Program page/component structure, WeUI integration, device and media APIs, and a multi-stage Dockerized backend for dev/staging/prod environments.

## What's inside

- Mini Program built on WeUI covering common UI patterns: buttons, forms, pickers, swipers
- Native API demos: network requests, local storage
- Device feature demos: system info, QR code scanning
- Media demos: image picker, audio playback
- Location demos: GPS positioning, map component
- Canvas drawing demo
- Express mock API server (`server/index.js`) exposing in-memory users/posts resources with CORS and request logging
- Multi-stage Dockerfile and Compose profiles for development, staging, and production API server environments

## Tech stack

- WeChat Mini Program framework (WXML/WXSS/JS), WeUI extended component library
- Node.js, Express, cors, morgan, uuid
- Docker / Docker Compose (multi-stage build with dev/staging/prod targets)
- ESLint, Jest (configured for the server codebase)

## Quickstart

### Mini Program

1. Open WeChat DevTools.
2. Import the project by selecting the repository root (`project.config.json` is already configured).
3. Add tabbar icons (81x81px PNG) to `miniprogram/images/`: `home.png`/`home-active.png`, `component.png`/`component-active.png`, `api.png`/`api-active.png`.
4. Set your own `appid` in `project.config.json`, or use the test app ID provided by WeChat DevTools.

### Mock API server

```bash
yarn install
yarn dev
```

Or with Docker:

```bash
docker compose --profile dev up      # http://localhost:3000
docker compose --profile staging up  # http://localhost:3001
docker compose --profile prod up     # http://localhost:3002
```

## Structure

```
miniprogram/          Mini Program source
  pages/               Feature demo pages (components, api, device, media, location, canvas)
  utils/               Request helper and shared utilities
server/                Express mock API server
Dockerfile             Multi-stage build (development/staging/production)
docker-compose.yml     Compose profiles: dev, staging, prod
```

## API endpoints (mock server)

- `GET /health` - service health check
- `GET /api/users`, `GET /api/users/:id`, `POST /api/users`
- `GET /api/posts`, `GET /api/posts/:id`, `POST /api/posts`

## Mini Program pages

- `pages/index` - home/landing page
- `pages/components/*` - button, form, picker, swiper demos
- `pages/api/*` - network request and local storage demos
- `pages/device/*` - system info and QR scan demos
- `pages/media/*` - image and audio demos
- `pages/location/*` - GPS and map demos
- `pages/canvas` - canvas drawing demo
