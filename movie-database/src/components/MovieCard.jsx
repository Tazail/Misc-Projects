function MovieCard({ movie }) {
  function onFavoriteClick(params) {
    alert("clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src="movie.url" alt="movie.title" />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}></button>
        </div>
      </div>
    </div>
  );
}
