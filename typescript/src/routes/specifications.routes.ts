import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response)
})

specificationsRoutes.get("/", (request, response) => {
  const all = specificationsRepository.get()

  return response.json(all)
})

export {specificationsRoutes}