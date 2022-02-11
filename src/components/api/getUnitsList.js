export default async function getUnitsListApi(launch) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = fetch(
    `http://localhost:8000/api/units/${launch}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
