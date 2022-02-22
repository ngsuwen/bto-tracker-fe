export default function getUserListApi() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = fetch("/api/user/", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
