# ChillFlix - Netflix Clone React App

A modern Netflix-inspired movie discovery app built with React, Vite, TailwindCSS, and Appwrite. Search for movies, view trending picks, and enjoy a beautiful, responsive UI with real-time trending analytics.

## Demo

**[Live Demo on Netlify](https://beamish-stardust-0af66e.netlify.app/)**

## Features

- 🔍 **Real-time Movie Search**: Search for movies using The Movie Database (TMDb) API with debounced input.
- 📈 **Trending Analytics**: See the top trending movies based on user searches tracked via Appwrite backend.
- 🎬 **Rich Movie Cards**: View comprehensive movie details including title, rating, language, release year, and poster.
- ⚡ **Modern UI/UX**: Built with React 19, Vite, and TailwindCSS for instant feedback and a sleek, responsive design.
- ☁️ **Cloud Backend**: Appwrite integration for real-time search popularity tracking and trending movie analytics.
- 🌀 **Smooth UX**: Loading states, error handling, and responsive design for optimal user experience.
- 📱 **Mobile Responsive**: Fully responsive design that works seamlessly on all devices.

## Screenshots

<img width="1436" height="901" alt="Screenshot 2025-07-19 at 2 52 20 PM" src="https://github.com/user-attachments/assets/c6a0d900-8704-4d4b-95f8-8a2d0c503be0" />

![App Screenshot](public/hero.png)

## Tech Stack

- **Frontend**: React 19, Vite, TailwindCSS
- **Backend**: Appwrite (Database & Analytics)
- **APIs**: The Movie Database (TMDb) API
- **Styling**: Custom CSS with TailwindCSS utilities
- **Build Tool**: Vite for fast development and optimized builds
- **Package Manager**: npm/yarn

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [TMDb API Key](https://www.themoviedb.org/settings/api)
- [Appwrite Account](https://appwrite.io/) (for trending analytics)

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

   **API Setup Instructions:**
   - **TMDb API**: Get your API key from [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
   - **Appwrite Setup**: 
     - Create a new project at [appwrite.io](https://appwrite.io/)
     - Create a database with a collection for storing search analytics
     - Collection should have fields: `searchTerm` (string), `count` (integer), `movie_id` (string), `poster_url` (string)

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
movie-store-web/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx      # Movie display component
│   │   ├── Search.jsx         # Search input component
│   │   └── Spinner.jsx        # Loading spinner component
│   ├── App.jsx                # Main application component
│   ├── appwrite.js            # Appwrite backend integration
│   ├── index.css              # Global styles and TailwindCSS
│   └── main.jsx               # React entry point
├── public/                    # Static assets
│   ├── hero.png              # Hero banner image
│   ├── hero-bg.png           # Background pattern
│   └── *.svg                 # Icons and graphics
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies and scripts
```

## API Integration

### TMDb API
- **Search Endpoint**: `/search/movie` for movie search functionality
- **Discover Endpoint**: `/discover/movie` for popular movies
- **Image URLs**: Uses TMDb's image service for movie posters

### Appwrite Backend
- **Search Analytics**: Tracks search terms and their frequency
- **Trending Movies**: Stores and retrieves trending movie data
- **Real-time Updates**: Updates search counts in real-time

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production with optimization
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint code with ESLint for code quality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and formatting
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## Features in Detail

### Search Functionality
- Debounced search input (500ms delay)
- Real-time results from TMDb API
- Search analytics tracking via Appwrite
- Error handling for failed requests

### Trending Movies
- Top 5 most searched movies
- Real-time ranking updates
- Movie poster display with rankings
- Horizontal scrollable layout

### Movie Cards
- Comprehensive movie information
- Star ratings with visual indicators
- Language and year display
- Responsive grid layout

## Credits

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Appwrite](https://appwrite.io/) - Backend as a Service
- [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) - Movie data

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **Star this repository if you found it helpful!**
