# Next.js Proof of Concept (PoC) README

This project is a Proof of Concept (PoC) demonstrating various features of Next.js. It includes examples of routing, data fetching, styling, authentication, caching, rendering, optimizing, and basic configuration.

## Features Demonstrated

- **Routing:** Navigation between different pages using Next.js's built-in routing system.
- **Data Fetching:** Fetching data from external APIs and rendering it on pages.
- **Styling:** Styling components using CSS Modules and/or Styled JSX.
- **Authentication:** Basic authentication flow using cookies and sessions.
- **Caching:** Client-side caching of API responses using SWR (if applicable).
- **Rendering:** Server-side rendering (SSR) and static site generation (SSG) examples.
- **Optimizing:** Techniques for optimizing performance and SEO.

## Steps to Run the App

### Prerequisites

- Node.js installed on your machine (version 20.13.1).
- npm package manager installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/riteshces/NextJs_POC.git
   cd Nextjs_POC
   ```

2. Install dependencies:

   Using npm:

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server and run the Next.js application locally:

```bash
npm run dev

```

The development server will start and the application will be accessible at [http://localhost:3000](http://localhost:3000).

### Building and Running in Production Mode

To build the application for production:

```bash
npm run build

```

To run the production build locally:

```bash
npm start

```

### Configuration

- **Environment Variables:** Modify `.env` file to set environment variables like API keys or configuration parameters.
