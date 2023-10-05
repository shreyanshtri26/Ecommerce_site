import { myAxios } from "./helper";
export const loginUser = (user) => {
  return myAxios
    .post("api/users/login", user)
    .then((response) => response.data);
};
export const signUp = (user) => {
  return myAxios
    .post("api/users/register", {
      userName: user.name,
      userEmail: user.email,
      userPassword: user.password,
      userPhone: user.phone,
    })
    .then((response) => response.data);
};
export const Address = (user) => {
  console.log("user", user);
  
  return myAxios.post("api/orders", user).then((response) => {
    console.log("response", response);
    // response.data;
  });
};
