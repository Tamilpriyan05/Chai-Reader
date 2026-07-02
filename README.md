# Chai Reader - Book Commerce Platform

Chai Reader is a modern, responsive, and performance-optimized AI-powered book commerce platform designed to transform how users discover, read, and interact with books.

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation

1. Install the project dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3001](http://localhost:3001) (or the port shown in your terminal) in your browser to view the application.

3. Build the application for production:
   ```bash
   npm run build
   ```

4. Start the production-built application:
   ```bash
   npm run start
   ```

---

## Project Dependencies & Architecture

Here is a breakdown of the packages used in this application and the reason why they were chosen:

### Core Framework & Runtimes

*   **`next` (v14.2.5)**
    *   **Why it's used:** Chai Reader is built using Next.js, a powerful React framework. Next.js handles server-side rendering (SSR), static site generation (SSG), routing (via the App Router), and optimizes asset delivery. It provides the backbone for fast load times and clean SEO architecture.
*   **`react` & `react-dom` (v18.3.1)**
    *   **Why it's used:** The core UI library used to build the interactive interface component-by-component.

### User Interface & Layout Components

*   **`embla-carousel-react` (v8.6.0)**
    *   **Why it's used:** Used for implementing smooth, touch-friendly, and lightweight carousel sliders (e.g., the *Recommended For You* section). Embla provides high-performance swipe/drag physics without heavy overhead.
*   **`lucide-react` (v0.400.0)**
    *   **Why it's used:** A clean, modern icon library that provides lightweight vector graphics (like search, heart, arrows, and cart icons). Lucide integrates naturally with React components.

### Styling & Optimization

*   **`tailwindcss` (v3.4.4)**
    *   **Why it's used:** Utilized for rapid utility-first styling. It enables building highly custom, responsive layouts directly within TSX markup without writing massive traditional CSS stylesheets.
*   **`postcss` & `autoprefixer`**
    *   **Why it's used:** Handles CSS post-processing, adding vendor prefixes automatically for cross-browser styling compatibility.
*   **`typescript` (v5.5.3)**
    *   **Why it's used:** Ensures type-safety, preventing compilation errors and providing seamless autocomplete capabilities during developer workflow.

---

## Responsive Design Implementation

The codebase is fully optimized for different screen sizes, providing a seamless user interface:

*   **Mobile (< 768px):** Swapping default sidebar layouts to a clean bottom navigation bar (`MobileNav.tsx`), single-column layouts for author profiles, horizontal scroll containers for category sections, and compact spacing.
*   **Tablet (768px - 1024px):** Dynamically scales cards into 3-4 columns to fill available space without awkward margins.
*   **Desktop (> 1024px):** Preserves the full-width high-fidelity grids (5-6 columns) and navigation bars.

Additionally, **lazy loading** (`loading="lazy"`) has been implemented across non-critical images to keep initial page load fast and efficient.
