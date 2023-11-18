const usersController = require('../controllers/controller.users');
const productsController = require('../controllers/controller.file.products');
// const productsController = require('../controllers/controller.products');
const cartsController = require('../controllers/controller.carts');
const messagesController = require('../controllers/controller.messages');
const viewsController = require('../controllers/controller.views');

const router = app =>{
    app.use('/users', usersController);
    app.use('/products', productsController);
    app.use('/carts', cartsController);
    app.use('/chats',messagesController);
    app.use('/views', viewsController);
};

module.exports = router;