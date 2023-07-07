import data from "../../data/users.json";

export const getUserDataWorker = (login: string, password: string) => {
  const user = data.find((item) => item.login === login);
  if (user === undefined) {
    return { isLogin: false, isPassword: false, user: null };
  } else if (user?.password === password) {
    localStorage.setItem("name", user.name);
    return { isLogin: true, isPassword: true, user };
  } else {
    return { isLogin: true, isPassword: false, user: null };
  }
};
