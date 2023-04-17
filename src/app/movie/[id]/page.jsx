import Image from "next/image";
import React from "react";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return data;
}

export default async function MoviePage({ params }) {
  const movieId = params.id; // since we have [id] in the path, we can get the id from the params object directly
  const movieData = await getMovie(movieId);

  return (
    <div className="w-full mt-5">
      <div className="flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movieData.backdrop_path || movieData.poster_path
          }`}
          alt="movie poster"
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "100%" }}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/loading_spinner.svg"
        />
        <div className="p-2">
          <h2 className="text-lg font-bold mb-3">
            {movieData.title || movieData.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview : </span>
            {movieData.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Release Date : </span>
            {movieData.release_date || movieData.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating : </span>
            {movieData.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
