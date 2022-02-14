export default async function getUserListApi() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = fetch("http://localhost:8000/api/user/", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
