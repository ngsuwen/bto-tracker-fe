export default function deleteUserAdminApi(id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id: id,
  });

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = fetch("/api/user/admin", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}