import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  console.log(LIST_MOVIES_URL);
  const {
    data: {
      data: { movies }
    }
  } = await axios.get(
    `https://cors-anywhere.herokuapp.com/${LIST_MOVIES_URL}`,
    {
      params: {
        limit,
        minimum_rating: rating
      },
      headers: {
        Origin: "https://movieql2.now.sh"
      }
    }
  );
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
