const UserRepository = require("../repositories/userRepository");
const { dynamoClient } = require("../../../config/db");

jest.mock("../../../config/db", () => ({
  dynamoClient: {
    scan: jest.fn().mockReturnThis(),
    promise: jest.fn(),
  },
}));

describe("UserRepository", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getUsers", () => {
    it("debe obtener la lista de usuarios correctamente", async () => {
      const expectedUsers = [{
        id:"5e54c5cf-523d-4dd3-ae23-ed178427082f",
        nombre: "Usuario 1",
        altura: "1.70",
        ojo_color: "marron",
        pelo_color: "negro",
        peso: "80",
        piel_color: "morena",
        nacimiento_anio: "02/12/1995",
        genero: "masculino",
        vehiculos:["toyota","kia"]
    }, {
        id: "bd5e45f7-619e-4794-9262-2b86a16678ad",
        nombre: "Usuario 2",
        altura: "1.70",
        ojo_color: "marron",
        pelo_color: "negro",
        peso: "80",
        piel_color: "morena",
        nacimiento_anio: "02/12/1995",
        genero: "masculino",
        vehiculos:["toyota","kia"]
    }];
    dynamoClient.promise.mockResolvedValueOnce({ Items: expectedUsers });
    const userRepository = new UserRepository()
      const users = await userRepository.getUsers();
      expect(users.success).toBe(true);
      expect(users.result.Items).toEqual(expectedUsers);
    });
  });
});
