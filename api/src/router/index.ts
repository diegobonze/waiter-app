import { Router } from "express";
import multer from "multer";
import path from "node:path";

import { createCategory } from "../app/useCases/categories/createCategory";
import { listCategories } from "../app/useCases/categories/listCategories";
import { createProduct } from "../app/useCases/products/createProduct";
import { listProducts } from "../app/useCases/products/listProducts";

// salva dentro de um diretório um upload de uma imagem
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`, )
    }
  })
})

export const router = Router();

router.get('/categories', listCategories)

router.post('/categories', createCategory)

router.get('/products', listProducts)

router.post('/products', upload.single('image'), createProduct)

router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK')
})

router.get('/orders', (req, res) => {
  res.send('OK')
})

router.post('/orders', (req, res) => {
  res.send('OK')
})

router.patch('/orders/:orderId', (req, res) => {
  res.send('OK')
})

router.delete('/orders/:orderId', (req, res) => {
  res.send('OK')
})
