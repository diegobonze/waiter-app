import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, ingredients, category } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients): null,
      category
    })

    res.status(201).json(product);
  }
  catch(erro) {
    console.log(erro)
    res.sendStatus(500);
  }
}
