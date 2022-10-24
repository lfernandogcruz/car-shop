interface IService<T> {
  create(obj: unknown): Promise<T>,
  read(): Promise<T[]>,
  readOne(str: string): Promise<T>,
  update(str: string, obj: unknown): Promise<T>,
  delete(str: string): Promise<T>,
}

export default IService;