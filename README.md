# ChillFlix - Netflix Clone React App

A modern Netflix-inspired movie discovery app built with React, Vite, TailwindCSS, and Appwrite. Search for movies, view trending picks, and enjoy a beautiful, responsive UI.

## Demo

**[Live Demo on Netlify](https://beamish-stardust-0af66e.netlify.app/)**

## Features

- 🔍 **Movie Search**: Search for movies using The Movie Database (TMDb) API.
- 📈 **Trending Movies**: See the top trending movies based on user searches (tracked via Appwrite backend).
- 🎬 **Movie Cards**: View movie details including title, rating, language, and release year.
- ⚡ **Fast & Modern UI**: Built with React 19, Vite, and TailwindCSS for instant feedback and a sleek look.
- ☁️ **Appwrite Integration**: Tracks search popularity and trending movies in real time.
- 🌀 **Loading States**: Smooth loading spinners and error handling.

## Screenshots

<img width="1436" height="901" alt="Screenshot 2025-07-19 at 2 52 20 PM" src="https://github.com/user-attachments/assets/c6a0d900-8704-4d4b-95f8-8a2d0c503be0" />

![App Screenshot](public/hero.png)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tanzimine/movie-store-web.git
   cd movie-store-web
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```
   - Get a TMDb API key from [themoviedb.org](https://www.themoviedb.org/settings/api).
   - Set up an [Appwrite](https://appwrite.io/) project, database, and collection for trending movie tracking.

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

- `src/` - Main source code
  - `App.jsx` - Main app logic and layout
  - `appwrite.js` - Appwrite integration for trending/search tracking
  - `components/` - UI components (Search, MovieCard, Spinner, etc.)
  - `index.css` - TailwindCSS and custom styles
- `public/` - Static assets (images, icons)
- `index.html` - HTML entry point

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/)
- [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)

## License

MIT
