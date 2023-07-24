export function nameValidator(name) {
  if (name.match(/^[a-zA-Z0-9]{4,16}$/)) {
    return true;
  } else return false;
}

export function emailValidator(email) {
  if (
    email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    return true;
  } else return false;
}

export function passwordValidator(password) {
  if (password.match(/^[a-zA-Z0-9_@./#&+-]{4,10}$/)) {
    return true;
  } else return false;
}
