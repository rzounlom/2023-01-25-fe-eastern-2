var loggedIn = false;

while (!loggedIn) {
  let username = prompt("Username");
  let password = prompt("Password");

  if (username == "jonhn123" && password == "456") {
    alert(`Welcome back ${username}`);
    loggedIn = true;
  } else {
    alert(`Incorrect username or password combination.`);
  }
}
