import React from "react"

export default function ({ movies, isLoading }) {
  return (
    <div className="card-list">
      {isLoading ? (
        <h1>loading....</h1>
      ) : (
        <>
          {movies
            .filter(({ poster_path }) => poster_path)
            .map(
              ({
                id,
                poster_path,
                title,
                release_date,
                vote_average,
                overview,
              }) => (
                <div className="card" key={id}>
                  <img
                    className="card--image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
                    alt={title}
                  />
                  <div className="card--content">
                    <h3 className="card--title">{title}</h3>
                    <p>
                      <small>RELEASE DATE: {release_date}</small>
                    </p>
                    <p>
                      <small>RATING : {vote_average}</small>
                    </p>
                    <p className="card--desc">{overview}</p>
                  </div>
                </div>
              )
            )}
        </>
      )}
    </div>
  )
}
