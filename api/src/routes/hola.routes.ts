import { Request, Response, Router } from 'express';

const holaRouter: Router = Router();
holaRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hola mundo!');
});

export default holaRouter;
