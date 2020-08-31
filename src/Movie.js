import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return (
    <>
      <h3>{title}</h3>
      <img src={poster}></img>
      <h5>{summary}</h5>
      <h5>year : {year}</h5>
      <h5>movie ID : {id}</h5>
      <br />
    </>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
