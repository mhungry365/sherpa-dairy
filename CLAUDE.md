@AGENTS.md

# SherpaDairy

## Stack
- **Framework**: Next.js 16 App Router (TypeScript)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Database/Auth**: Supabase (`@supabase/supabase-js`, `@supabase/ssr`)
- **Payments**: Stripe (`stripe`, `@stripe/stripe-js`)
- **Email**: Resend
- **Hosting**: Vercel (deploy via git push only — never `vercel` CLI)

## GitHub
- Repo: https://github.com/mhungry365/sherpa-dairy
- Account: mhungry365

## Key file locations
- `lib/supabase/client.ts` — browser Supabase client
- `lib/supabase/server.ts` — server Supabase client (RSC / Route Handlers)
- `lib/stripe/index.ts` — Stripe server client
- `lib/resend/index.ts` — Resend client
- `middleware.ts` — Supabase session refresh middleware
- `.env.local.example` — env var template

## Environment variables
Copy `.env.local.example` to `.env.local` and fill in values.
Required: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `RESEND_API_KEY`, `NEXT_PUBLIC_APP_URL`

## Development
```bash
npm run dev
```

## Deploy
Push to `main` → Vercel auto-deploys. Never use `vercel` CLI directly.
