import React from "react"
import ReactDOM from "react-dom"

import "./index.css"

import SearchMovies from "./searchMovies"

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Update with container</h1>
        <SearchMovies />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
