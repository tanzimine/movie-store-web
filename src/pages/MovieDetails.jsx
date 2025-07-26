import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  };

  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Example fetch call (replace URL with your actual API)
    fetch(`https://api.themoviedb.org/3/movie/${id}`, API_OPTIONS)
      .then((res) => res.json())
    //   .then((data) => setMovie(data))
    .then((data) => {
        console.log(data);  
        setMovie(data);     
      })
      .catch((err) => console.error(err));
  }, [id]);
  if (!movie) {
    return <div className="text-white p-8 max-w-5xl mx-auto">Loading...</div>;
  }

  return (
    <div className="movie-details-container text-white p-8 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
    {/* Poster Section */}
    <div className="poster-section">
      <img
        src={movie.poster_path 
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
          : '/placeholder-poster.png'}
        alt={movie.title}
        className="rounded-lg shadow-lg w-full"
      />
    </div>

    {/* Info Section */}
    <div className="info-section space-y-4">
      <h1 className="text-4xl font-bold">{movie.title}</h1>
      <p className="text-lg italic text-gray-400">{movie.tagline || "No tagline available"}</p>

      <div className="movie-meta flex flex-wrap gap-4 text-sm text-gray-300">
        <span className="rating">⭐ {movie.vote_average?.toFixed(1) ?? 'N/A'}</span>
        <span className="release-year">• {movie.release_date?.slice(0, 4) ?? 'N/A'}</span>
        <span className="language">• {movie.original_language?.toUpperCase() ?? 'N/A'}</span>
        <span className="duration">• {movie.runtime ? `${movie.runtime} min` : 'N/A'}</span>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Overview</h3>
        <p className="text-sm text-gray-300">{movie.overview || "No overview available."}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Genres</h3>
        <div className="genres-list flex flex-wrap gap-2">
          {movie.genres?.length > 0 ? (
            movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-700 rounded-full px-3 py-1 text-sm"
              >
                {genre.name}
              </span>
            ))
          ) : (
            <p className="text-gray-500">No genres available.</p>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default MovieDetails;
