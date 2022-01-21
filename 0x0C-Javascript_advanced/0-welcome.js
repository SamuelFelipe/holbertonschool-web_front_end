function welcome(firstName, lastName) {
  const displayFullName = (fullname) => {
    alert("Welcome " + fullname);
  };

  displayFullName(`${firstName} ${lastName}`);
}
