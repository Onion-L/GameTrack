const validatePassword = (password) => {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

export const passwordRule = (rule, value, callback) => {
  if (!validatePassword(value)) {
    callback(new Error("The password does not match the rule"));
  } else {
    callback();
  }
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const emailRule = (rule, value, callback) => {
  if (!validateEmail(value)) {
    callback(new Error("The email was not formatted correctly"));
  } else {
    callback();
  }
};

export const registerValidate = (userObj) => {
  const { username, password, confirmPwd, email } = userObj;
  return new Promise((resolve, reject) => {
    if (!username || !password) {
      reject({ message: "Please provide a username and password" });
    } else if (password !== confirmPwd) {
      reject({ message: "Password and confirm password do not match" });
    } else if (!validatePassword(password)) {
      reject({ message: "The password does not match the rule" });
    } else if (!validateEmail(email)) {
      reject({ message: "The email was not formatted correctly" });
    } else {
      resolve(true);
    }
  });
};
