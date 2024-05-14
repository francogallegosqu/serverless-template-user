const UserRepository = require("../repositories/userRepository");
const { dynamoClient } = require("../../../config/db");

jest.mock("../../../config/db", () => ({
  dynamoClient: {
    put: jest.fn().mockReturnThis(),
    promise: jest.fn(),
  },
}));

describe("createUser", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("debe crear un usuario correctamente", async () => {
    const userData = {
        nombre: "Franco",
        altura: "1.70",
        ojo_color: "marron",
        pelo_color: "negro",
        peso: "80",
        piel_color: "morena",
        nacimiento_anio: "02/12/1995",
        genero: "masculina",
        vehiculos:["toyota","kia"]
    };
    const userRepository = new UserRepository()
    await userRepository.createUser(userData);
    expect(dynamoClient.put).toHaveBeenCalledWith({
      TableName: "usersTable",
      Item: expect.objectContaining(userData),
    });
  });

});
