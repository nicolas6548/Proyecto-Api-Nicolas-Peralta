import fs from 'fs/promises';
import { __dirname, join } from '../utils/index.js'

const usersFilePath = join(__dirname, 'adata/users.json')
const getAllUsers = async () =>
{
  try {
    const data = await fs.readFile(usersFilePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.log("Error al leer el archivo");
    
  }
}

const saveUsers = async (users) =>
{
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 6), "utf-8")
  } catch (error) {
    console.log("Error al crear el usuario");
    
  }
}

export default { getAllUsers, saveUsers };