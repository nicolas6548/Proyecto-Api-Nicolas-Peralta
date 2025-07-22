// controller
import userService from '../services/user.service.js'


const getUsers = async (req, res) =>
{
  try {
    const users = await userService.getAll()
    if (users.length === 0) return res.status(200).json({ message: "como te dartas cuenta, la base de datos esta vacia" })
  
    res.status(200).json({ message: "El listado de los usuarios es esta", payload: users })
  } catch (error) {
    res.status(500).json({message:"Esto es un error interno del servidor, solo eso dire", error:error.message})
  }
};

const createUser = async (req, res) =>
{
  const { name, email } = req.body;
  try {
    if (!name || !email)
    {
      return res.status(200).json({message:"Fijate bien, porque algunos campos no pusiste y tienen que estar todos los campos completos"})
    }
    const newUser = await userService.create({ name, email });
    console.log(newUser);
    res.status(201).json({ message: "El usuario se creo con exito", payload: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export default { getUsers, createUser };
