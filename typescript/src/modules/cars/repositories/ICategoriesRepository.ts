import { Category } from "../model/Category"

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({name, description}: ICreateCategoryDTO): void;
  get(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO }