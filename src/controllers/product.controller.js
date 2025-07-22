import productService from '../services/product.service.js'

const getProducts = (req, res) =>
{
  try
  {
    const products = productService.getAll()
    if (products.length === 0) return res.status(200).json({ message: "Como te daras cuenta, la base de datos esta vacia" })
    
    res.status(200).json({ message: "El listado de los productos es esta", payload: products })
    
  } catch (error)
  {
    res.status(500).json({ message: "Esto es un error interno del servidor, si te lo explico no lo entenderas", error: error.message })
  }
};

export default { getProducts };