export default async function findOneProjectApi(launch) {

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = fetch(
    `http://localhost:8000/api/project/${launch}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
