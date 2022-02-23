export default function createSessionApi(username, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: username,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    credentials: "include",
    headers: myHeaders,
    body: raw
  };

  const result = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/sessions`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
