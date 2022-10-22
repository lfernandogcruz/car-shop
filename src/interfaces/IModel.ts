export interface IModel <T>{
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(str: string): Promise<T | null>,
  update(str: string, obj: Partial<T>): Promise<T | null>,
  // Partial<T> is a type that allows us to update only some of the properties of an object
  delete(str: string): Promise<T | null>,
}
