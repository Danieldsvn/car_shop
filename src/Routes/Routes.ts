import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res) => new CarController(req, res).create(),
);

routes.get(
  '/cars',
  (req, res) => new CarController(req, res).getAll(),
);

export default routes;