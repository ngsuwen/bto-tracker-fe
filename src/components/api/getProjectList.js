export default async function getProjectListApi() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = fetch("http://localhost:8000/api/project/", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}