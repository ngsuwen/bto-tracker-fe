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

  const result = fetch(`https://bto-tracker-website.herokuapp.com/api/units/${launch}/${blk}/${unit}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}