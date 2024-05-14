class User {
    constructor({ id, nombre, altura, ojo_color, pelo_color, peso, piel_color, nacimiento_anio, genero, vehiculos }) {
      this.id = id
      this.nombre = nombre;
      this.altura = altura;
      this.ojo_color = ojo_color;
      this.pelo_color = pelo_color;
      this.peso = peso;
      this.piel_color = piel_color;
      this.nacimiento_anio = nacimiento_anio;
      this.genero = genero;
      this.vehiculos = vehiculos;
    }
  
    getName() {
      return this.nombre;
    }
  
    getHeight() {
      return this.altura;
    }
  
    getEyeColor() {
      return this.ojo_color;
    }
  
    getHairColor() {
      return this.pelo_color;
    }
  
    getWeight() {
      return this.peso;
    }
  
    getSkinColor() {
      return this.piel_color;
    }
  
    getBirthYear() {
      return this.nacimiento_anio;
    }
  
    getGender() {
      return this.genero;
    }
  
    getVehicles() {
      return this.vehiculos;
    }
  
    setName(nombre) {
      this.nombre = nombre;
    }
  
    setHeight(altura) {
      this.altura = altura;
    }
  
    setEyeColor(ojo_color) {
      this.ojo_color = ojo_color;
    }
  
    setHairColor(pelo_color) {
      this.pelo_color = pelo_color;
    }
  
    setWeight(peso) {
      this.peso = peso;
    }
  
    setSkinColor(piel_color) {
      this.piel_color = piel_color;
    }
  
    setBirthYear(nacimiento_anio) {
      this.nacimiento_anio = nacimiento_anio;
    }
  
    setGender(genero) {
      this.genero = genero;
    }
  
    setVehicles(vehiculos) {
      this.vehiculos = vehiculos;
    }
  }
  
module.exports = User;
  