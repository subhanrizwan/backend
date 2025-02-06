import express from 'express';
import user from './user.js'
import product from './product.js';
import order from './orders.js';

const router = express.Router();

router.use('/users', user)
router.use('/products',product)
router.use('/orders',order)

export default router;