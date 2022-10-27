import { listProductService } from "../services/listProducts.service";

// export const createProductsController = async (request, response) => {
//   const product = request.body;
//   console.log(product);

//   return response.status(201).json("aqui");
// };

export const listProductsController = async (request, response) => {
  const products = listProductService();
  return response.json(products);
};
