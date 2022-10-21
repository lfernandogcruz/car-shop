export interface IVehicle {
  model: string, // Deve ser uma string com, pelo menos, 3 caracteres
  year: number, // Deve ser um valor inteiro positivo >= 1900, porém <= 2022
  color: string, // Deve ser uma string com, pelo menos, 3 caracteres
  status?: boolean, // Deve receber valores booleanos e deve ser opcional
  buyValue: number, // Deve receber apenas números inteiros
}
