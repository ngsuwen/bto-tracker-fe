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
    body: raw,
    redirect: "follow",
  };

  const result = fetch("http://localhost:8000/api/sessions", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
