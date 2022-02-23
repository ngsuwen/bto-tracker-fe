export default function editUnitApi(launch, blk, unit, input) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    availability: input,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/units/${launch}/${blk}/${unit}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
