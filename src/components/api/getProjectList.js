export default function getProjectListApi() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/project/`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}