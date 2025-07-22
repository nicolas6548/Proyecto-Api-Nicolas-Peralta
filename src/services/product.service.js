import db from '../config/db.js'

const getAll = () =>
{
  return db.products;
};


const findById = (id) =>
{
  return db.products.find((products)=> products.id === id)
}

export default { getAll, findById };