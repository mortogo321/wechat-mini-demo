# WeChat Mini Program Demo

Full-featured WeChat Mini Program demo with WeUI and Docker multi-stage setup.

## Structure

```
├── miniprogram/          # Mini program source
│   ├── pages/            # Feature demo pages
│   ├── utils/            # Helpers
│   └── images/           # Icons (add your own)
├── server/               # Mock API server
├── Dockerfile            # Multi-stage build
└── docker-compose.yml    # Dev/Staging/Prod profiles
```

## Features Demo

- **UI Components**: Button, Form, Picker, Swiper
- **API**: Network requests, Storage
- **Device**: System info, QR scan
- **Media**: Image picker, Audio player
- **Location**: GPS, Map component
- **Canvas**: Drawing demo

## Setup

### Mini Program
1. Open WeChat DevTools
2. Import project (select root folder)
3. Add tabbar icons to `miniprogram/images/`

### API Server

```bash
# Install dependencies
yarn install

# Development
yarn dev

# Or with Docker
docker compose --profile dev up
```

## Docker Commands

```bash
# Development (port 3000)
docker compose --profile dev up -d

# Staging (port 3001)
docker compose --profile staging up -d

# Production (port 3002)
docker compose --profile prod up -d

# Build specific target
docker build --target development -t miniprogram-api:dev .
docker build --target production -t miniprogram-api:prod .
```

## Tabbar Icons Required

Add these icons to `miniprogram/images/` (81x81px PNG):

| Tab | Default | Active |
|-----|---------|--------|
| Home | `home.png` | `home-active.png` |
| Components | `component.png` | `component-active.png` |
| API | `api.png` | `api-active.png` |

**Icon Resources:**
- [WeUI Icon Set](https://github.com/nicktogo/WeUI-Icon)
- [Iconfont](https://www.iconfont.cn/)
