export default function findProjectApi(launch) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const result = fetch(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/api/project/${launch}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
