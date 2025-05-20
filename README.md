# SvelteKit SaaS Template

A modern, production-ready SvelteKit template for building SaaS applications. This template includes:

- 🚀 SvelteKit with TypeScript
- 🎨 TailwindCSS + DaisyUI for beautiful UI components
- 🔐 Authentication with Supabase
- 💳 Stripe integration for payments
- 📧 Email functionality with Mailgun
- 🐳 Docker configuration for development and production
- 📱 Responsive design
- 🔍 SEO optimization
- 🧪 Testing setup with Vitest

## Quick Start

### Using this template

1. Click the "Use this template" button on GitHub
2. Clone your new repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy the environment template:
   ```bash
   cp local_env_template .env.local
   ```
5. Update the environment variables in `.env.local`
6. Start the development server:
   ```bash
   npm run dev
   ```

### Using Docker

```bash
# Build and start the container
docker compose up --build

# The application will be available at http://localhost:3000
```

## Features

- **Authentication**: Ready-to-use authentication system with Supabase
- **Payments**: Integrated Stripe payment processing
- **Email**: Mailgun integration for transactional emails
- **UI Components**: Pre-built components with DaisyUI
- **Database**: Supabase database setup with example tables
- **Docker**: Development and production Docker configurations
- **Testing**: Vitest setup for unit and integration tests

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## Environment Variables

Copy `local_env_template` to `.env.local` and update the following variables:

- `PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `PRIVATE_SUPABASE_SERVICE_ROLE`: Your Supabase service role key
- `PRIVATE_MAILGUN_DOMAIN`: Your Mailgun domain
- `PRIVATE_MAILGUN_API_KEY`: Your Mailgun API key
- `PRIVATE_STRIPE_API_KEY`: Your Stripe secret key
- `PUBLIC_STRIPE_API_KEY`: Your Stripe publishable key
- `PRIVATE_STRIPE_WEBHOOK_KEY`: Your Stripe webhook secret
- `PRIVATE_STRIPE_PRICE_ID`: Your Stripe price ID for one-time payments

## License

MIT License - feel free to use this template for your projects!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
