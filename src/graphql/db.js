import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios.get(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Forwarded-Proto": "https",
      Origin: "*"
    }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios.get(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios.get(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};
