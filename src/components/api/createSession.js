export default async function createSessionApi(username, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: username,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  };

  const result = fetch("https://bto-tracker-website.herokuapp.com/api/sessions", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
