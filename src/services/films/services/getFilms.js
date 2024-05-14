const FilmRepository = require("../repositories/filmRepository");

const getFilmsService = async () => {
  const filmRepository = new FilmRepository();
  const results = await filmRepository.getFilms();
  console.log('response', results)
  return results;
};


module.exports = { getFilmsService };
