# Velto Tools - Monorepo

A modern monorepo containing free online utility tools for everyday tasks. Built with Next.js, TypeScript, and Turborepo for optimal development experience.

![Velto Tools](https://img.shields.io/badge/Next.js-15.3.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=for-the-badge&logo=typescript)
![Turborepo](https://img.shields.io/badge/Turborepo-2.5.3-black?style=for-the-badge&logo=turborepo)
![Bun](https://img.shields.io/badge/Bun-1.2.0-black?style=for-the-badge&logo=bun)

## 🏗️ Monorepo Structure

This monorepo is organized using [Turborepo](https://turborepo.com/) and contains multiple applications and shared packages:

### 📱 Applications (`apps/`)

- **`web`** - Main Next.js web application with all utility tools
  - Calendar invitation generator
  - QR code generator
  - Barcode generator
  - Virtual business card generator
- **`api`** - Backend API services for file generation
- **`docs`** - Documentation site built with Next.js

### 📦 Packages (`packages/`)

- **`@velto-tools/ics-file`** - ICS calendar file generation utilities
- **`@velto-tools/vcard-file`** - vCard file generation utilities

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- [Bun](https://bun.sh/) 1.2.0 (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd velto-tools
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Start development servers**

   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Access the applications**
   - Web App: [http://localhost:3000](http://localhost:3000)
   - API: [http://localhost:3001](http://localhost:3001)
   - Docs: [http://localhost:3002](http://localhost:3002)

## 🛠️ Available Scripts

### Root Level Commands

- `bun dev` - Start all development servers
- `bun build` - Build all applications and packages
- `bun lint` - Lint all applications and packages
- `bun check-types` - Run TypeScript type checking across all packages
- `bun format` - Format all code with Prettier

### Application-Specific Commands

```bash
# Web application
bun --filter web dev
bun --filter web build
bun --filter web lint

# API application
bun --filter api dev
bun --filter api build

# Documentation
bun --filter docs dev
bun --filter docs build
```

## 🔧 Development Workflow

### Adding New Features

1. **Create a feature branch**

   ```bash
   git checkout -b feature/new-tool
   ```

2. **Develop in the appropriate app/package**

   - Web features: `apps/web/`
   - API endpoints: `apps/api/`
   - Shared utilities: `packages/`

3. **Test your changes**

   ```bash
   bun run lint
   bun run check-types
   bun run build
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add new tool"
   git push origin feature/new-tool
   ```

### Working with Packages

#### Using Shared Packages

```typescript
// In apps/web/
import { generateICS } from '@velto-tools/ics-file';
import { generateVCard } from '@velto-tools/vcard-file';
import { Button } from '@repo/ui';
```

#### Publishing Packages

```bash
# Build all packages
bun run build

# Publish specific package
cd packages/ics-file
bun publish
```

## 🧪 Testing

### Run All Tests

```bash
bun run test
```

### Application-Specific Tests

```bash
# Web app tests
bun --filter web cypress:run:e2e
bun --filter web cypress:run:ct

# Package tests
bun --filter ics-file test
bun --filter vcard-file test
```

## 🚀 Deployment

### Web Application

- Deployed on [Vercel](https://vercel.com/)
- Automatic deployments on main branch pushes
- Environment variables configured in Vercel dashboard

## 📦 Package Publishing

### ICS File Package

```bash
cd packages/ics-file
bun run build
bun publish
```

### VCard File Package

```bash
cd packages/vcard-file
bun run build
bun publish
```

## 🔍 Turborepo Features

### Remote Caching

Enable remote caching for faster builds across your team:

```bash
npx turbo login
npx turbo link
```

### Task Filtering

Run tasks on specific packages:

```bash
# Only build web app
bun turbo build --filter=web

# Build web and its dependencies
bun turbo build --filter=web...

# Build packages that depend on ui
bun turbo build --filter=...ui
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write tests for new features
- Update documentation as needed
- Follow conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-org/velto-tools/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/velto-tools/discussions)
- **Documentation**: [https://velto-tools.com/docs](https://velto-tools.com/docs)

---

**Built with ❤️ by the Velto Tools team**
