import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/cars',
  (req, res) => new CarController(req, res).create(),
);

routes.get(
  '/cars',
  (req, res) => new CarController(req, res).getAll(),
);

routes.get(
  '/cars/:id',
  (req, res) => new CarController(req, res).getById(),
);

routes.put(
  '/cars/:id',
  (req, res) => new CarController(req, res).update(),
);

// ============================

routes.post(
  '/motorcycles',
  (req, res) => new MotorcycleController(req, res).create(),
);

routes.get(
  '/motorcycles',
  (req, res) => new MotorcycleController(req, res).getAll(),
);

routes.get(
  '/motorcycles/:id',
  (req, res) => new MotorcycleController(req, res).getById(),
);

routes.put(
  '/motorcycles/:id',
  (req, res) => new MotorcycleController(req, res).update(),
);

export default routes;