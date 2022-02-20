export default function editUserAdminApi(id, username, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id: id,
    username: username,
    password: password,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = fetch(`/api/user/admin`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
