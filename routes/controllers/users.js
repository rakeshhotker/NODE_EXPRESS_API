//getAllUsers method
import { v4 as uuidv4 } from "uuid";
let users = [];
export const getAllUsers = (req, res) => {
  console.log(users);
  res.send(users);
};
//createUserMethod
export const createUser = (req, res) => {
  console.log("POST ROUTE REACHED");
  const user = req.body;
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);
  res.send(`User with the name:${user.firstName} added successfully`);
};
//getSpecific User method
export const getUser = (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const user = users.find((user) => user.id === id);
  res.send(user);
};
//updateUser method
export const UpdateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with the id:${id} updated successfully`);
};
//delete User method
export const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  users = users.filter((user) => user.id !== id);
  res.send(`User with the name:${user.firstName} deleted`);
};
