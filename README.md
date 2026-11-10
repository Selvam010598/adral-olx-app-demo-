# Bazaar

India's public OLX-style classifieds marketplace — buy and sell used items.

## Tech Stack

| Layer        | Tech                                                                   |
| ------------ | ---------------------------------------------------------------------- |
| Frontend     | Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, shadcn/ui |
| State / Data | TanStack Query, Zustand, React Hook Form, Zod                          |
| Backend      | Node.js, Express, TypeScript, Prisma, PostgreSQL, Redis                |
| Search       | Meilisearch                                                            |
| Realtime     | Socket.IO                                                              |
| Queues       | BullMQ                                                                 |
| Monorepo     | pnpm workspaces                                                        |

## Project Structure

```
bazaar/
├── apps/
│   ├── web/          # Next.js 14 frontend (:3000)
│   ├── api/          # Express API server (:4000)
│   └── admin/        # Next.js admin panel (:3001)
├── packages/
│   └── shared/       # Shared Zod schemas, types, constants
├── docker-compose.yml
└── pnpm-workspace.yaml
```

## Prerequisites

- Node.js >= 18
- pnpm >= 9
- Docker & Docker Compose (for PostgreSQL, Redis, Meilisearch)

## Setup

1. **Clone and install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start infrastructure (PostgreSQL, Redis, Meilisearch):**

   ```bash
   docker compose up -d
   ```

3. **Configure environment variables:**

   ```bash
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.example apps/web/.env
   ```

4. **Generate Prisma client:**

   ```bash
   pnpm --filter @bazaar/api prisma:generate
   ```

5. **Run database migrations:**

   ```bash
   pnpm --filter @bazaar/api prisma:migrate
   ```

6. **Start all apps in development:**
   ```bash
   pnpm dev
   ```
   - Web: http://localhost:3000
   - API: http://localhost:4000
   - Admin: http://localhost:3001

## API

All routes are versioned under `/api/v1`.

| Method | Path             | Description  |
| ------ | ---------------- | ------------ |
| GET    | `/api/v1/health` | Health check |

Response format:

```json
{ "success": true, "data": { ... }, "meta": { ... } }
{ "success": false, "error": { "code": "...", "message": "...", "fields": { ... } } }
```

## Scripts

| Command             | Description                |
| ------------------- | -------------------------- |
| `pnpm dev`          | Start all apps in dev mode |
| `pnpm build`        | Build all apps             |
| `pnpm lint`         | Lint all apps              |
| `pnpm format`       | Format code with Prettier  |
| `pnpm format:check` | Check formatting           |
