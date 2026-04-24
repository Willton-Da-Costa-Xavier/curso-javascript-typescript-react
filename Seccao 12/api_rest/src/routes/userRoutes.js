import { Router } from 'express';
import userController from '../controllers/UserController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
export default router;

/*

index -> lista todos os usuarios -> get
store/create -> cria os usuarios -> post
delete -> apaga um usuario -> delete
show -> mostra um usuario -> get
update -> atualiza um usuario -> patch ou put

*/
