import React, { useState } from "react"

import MovieCard from "./MovieCard"

export default function () {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const searchMovies = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d13e6e25b691fd35965ada1e535378d6&language=en-US&query=${query}&page=1&include_adult=true`
    try {
      const res = await fetch(url)
      const data = await res.json()
      data.results && setMovies(data.results)
      setIsLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <MovieCard movies={movies} isLoading={isLoading} />
    </>
  )
}
