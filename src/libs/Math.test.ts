import { Math } from "./Math";

describe("Testing Math library", () => {
  beforeEach(() => {
    //Executa antes de cada teste
    // ex: abrir conexão ao banco de dados
  });

  afterEach(() => {
    //Executa depois de cada teste
    // ex: fechar conexão ao banco de dados
  });

  beforeAll(() => {
    //Executa antes de todos os testes
    // ex: inicializar variáveis globais
  });

  afterAll(() => {
    //Executa depois de todos os testes
    // ex: destruir variáveis globais
  });

  it("should sum two numbers correctly", () => {
    const response = Math.sum(5, 10);
    expect(response).toBe(15);
  });

  it("should subtract two numbers correctly", () => {
    const response = Math.sub(10, 5);
    expect(response).toBe(5);
  });

  it("should multiply two numbers correctly", () => {
    const response = Math.mult(5, 10);
    expect(response).toBe(50);
  });

  it("should divide two numbers correctly", () => {
    const response = Math.div(10, 2);
    expect(response).toBe(5);

    const response2 = Math.div(3, 0);
    expect(response2).toBe(false);
  });

  it("contar quantos caracteres tem na string", () => {
    const response = "DENIED";
    expect(response).toHaveLength(6);
  });

  it.only("se possui a propriedade EMAIL", () => {
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
    };
    expect(user).toHaveProperty("email");
  });
});
