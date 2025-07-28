import { Router } from "express";

export const router = Router();

router.get('caregories', (req, res) => {
  res.send('OK')
})

router.post('caregories', (req, res) => {
  res.send('OK')
})

router.get('products', (req, res) => {
  res.send('OK')
})

router.post('products', (req, res) => {
  res.send('OK')
})

router.get('caregories/:categoryId/products', (req, res) => {
  res.send('OK')
})

router.get('orders', (req, res) => {
  res.send('OK')
})

router.post('orders', (req, res) => {
  res.send('OK')
})

router.patch('orders/:orderId', (req, res) => {
  res.send('OK')
})

router.delete('orders/:orderId', (req, res) => {
  res.send('OK')
})
