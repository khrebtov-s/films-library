import React from "react";
import filmsData from "../../films";
import StarRating from "../StarRating";
import "./FilmsBlock.css";

const FilmsBlock = ({ search }) => {
  let films = [];

  if (search.length) {
    films = filmsData.filter((film, i) => {
      return film.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    });
  } else {
    films = filmsData;
  }

  const genres = [...new Set(films.map((film) => film.genre))];

  const countFilmsOfGenre = (name) =>
    films.filter((film) => film.genre === name).length;

  return (
    <div className="films-block">
      <ul>
        {genres.map((genre, index) => {
          return (
            <li key={`genre-${index}`}>
              <div>
                <h1>{`${genre} (${countFilmsOfGenre(genre)})`}</h1>
                <ul>
                  {films.map((film, index) => {
                    if (film.genre === genre) {
                      return (
                        <li key={`film-${index}`} className="films-block_film">
                          <StarRating countStar={film.rating} />
                          <a href={film.link}>{film.title}</a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilmsBlock;
