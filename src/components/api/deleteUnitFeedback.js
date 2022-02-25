export default function deleteUnitFeedbackApi(launch, unit) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  const result = fetch(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/api/units/feedback/${launch}/${unit}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
