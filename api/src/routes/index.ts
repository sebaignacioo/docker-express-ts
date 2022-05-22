import {Request, Response, Router} from "express";
import holaRoutes from "./hola.routes";

const router: Router = Router();
router.get('/', (req: Request, res: Response) => {
  res.status(200).send(`
    <h1>Llamada correcta</h1>
    Debe invocar una de las siguientes rutas:
    <ul>
        <li><code>/hola</code>: Hola mundo</li>
    </ul>
  `);
});
router.use('/hola', holaRoutes);

export default router;
