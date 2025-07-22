import { fakerES_MX as faker } from '@faker-js/faker'
import users from '../config/db.js'
import db from '../config/db.js'

const createRandomUsers = (count = 10) =>
{
  for (let i = 0; i < count; i++)
  {
    const id = faker.database.mongodbObjetId();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({
      firstName: firstName.toLocaleLowerCase(),
      lastName: lastName.toLocaleLowerCase(),
    });
    const name = `${firstName} ${lastName}`;
    db.users.push({
      id,
      name,
      email,
    }):
  }
  console.log(db.users);
  return db.users;
  
};

createRandomUsers(30)
export default createRandomUsers;