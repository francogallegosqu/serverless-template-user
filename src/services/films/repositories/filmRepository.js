const { get } = require("../../../config/axios")
const IFilmRepository = require("./IFilmRepository")


class FilmRepository extends IFilmRepository {
  async getFilms(){
    try {
      const { data } = await get('/films/');
      return data.results;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
  }
}

module.exports = FilmRepository

