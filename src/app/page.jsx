// Fix the problem for "search params object is empty in production with next 13 app dir"

// for more info "https://github.com/vercel/next.js/issues/43077"

export const dynamic = "force-dynamic"; // this is the fix

import Results from "@/Components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } } // send a request only if the data is older than 10000 seconds
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // store the data as a json object
  const data = await res.json();

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
