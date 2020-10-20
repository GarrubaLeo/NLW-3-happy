import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import OrphanageController from './controllers/OrphanageController';

const routes = Router();
const upload = multer(uploadConfig)

//Criação de Orfanato
routes.post('/orphanages', upload.array('images'), OrphanageController.create);

//Listagem dos Orfanatos
routes.get('/orphanages/list', OrphanageController.index);

//Listagem dos detalhes do orfanato
routes.get('/orphanage/:id', OrphanageController.show)

export default routes;