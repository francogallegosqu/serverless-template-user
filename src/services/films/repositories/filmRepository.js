const axiosInstance = require("../../../config/axios");

const IFilmRepository = require("./IFilmRepository")

class FilmRepository extends IFilmRepository {
  constructor() {
    super();
    this.axiosInstance = axiosInstance.getInstance()
  }
  async getFilms(){
    try {
      const { data } = await this.axiosInstance.get('/films/');
      return data.results;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
  }
}

module.exports = FilmRepository

