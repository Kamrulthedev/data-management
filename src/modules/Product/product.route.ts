import express from 'express';
import { ProductControllar } from './product.controllar';

const router = express.Router();



router.post('/' , ProductControllar.createProductDb);

export const ProductRouter = {

};