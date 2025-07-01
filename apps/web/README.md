# Velto Tools - Free Online Utility Tools

A modern, free online toolkit providing essential utilities for everyday tasks. Built with Next.js 15, TypeScript, and Tailwind CSS.

![Velto Tools](https://img.shields.io/badge/Next.js-15.3.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

### 📅 Calendar Invitation Generator

- Create calendar invites in ICS format
- Generate Google Calendar links
- Customizable event details (title, description, location, time)
- Instant download and sharing capabilities

### 📱 QR Code Generator

- **URL QR Codes**: Create QR codes for websites and links
- **WiFi QR Codes**: Generate QR codes for WiFi network credentials
- **Text QR Codes**: Convert any text into a scannable QR code
- Multiple export formats: PNG, SVG, PDF
- Customizable styling and colors

### 📊 Barcode Generator

- Support for multiple barcode formats:
  - Code 128
  - EAN-13
  - UPC-A
  - And more...
- High-quality output in PNG, SVG, and PDF formats
- Perfect for inventory management and retail applications

### 👤 Virtual Business Card Generator

- Create professional vCard (.vcf) files
- Generate visual business cards with contact information
- Customizable design with avatar support
- Export as PNG, SVG, or PDF
- Ideal for networking and professional use

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [HeroUI](https://heroui.com/)
- **Icons**: [Iconify](https://iconify.design/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Testing**: [Cypress](https://www.cypress.io/)
- **Package Manager**: [Bun](https://bun.sh/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- Bun 1.2.0 (recommended) or npm/yarn

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

3. **Start the development server**

   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

### Run E2E Tests

```bash
bun run cypress:run:e2e
```

### Run Component Tests

```bash
bun run cypress:run:ct
```

### Open Cypress Test Runner

```bash
bun run cypress:open
```

## 🏗️ Available Scripts

- `bun dev` - Start development server with Turbopack
- `bun build` - Build the application for production
- `bun start` - Start production server

## 🌐 Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## 📦 Monorepo Structure

This project is part of a larger monorepo with the following structure:

- `apps/web/` - Main Next.js web application
- `packages/ics-file/` - ICS file generation utilities
- `packages/vcard-file/` - vCard file generation utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub

---

**Made with ❤️ by the Velto Tools team**
