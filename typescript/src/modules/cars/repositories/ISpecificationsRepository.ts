import { Specification } from "../model/Specification"

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({name, description}: ICreateSpecificationDTO): void;
  get(): Specification[];
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO }