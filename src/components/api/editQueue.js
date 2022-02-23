export default function editQueueApi(launch, type, number, statusUpdate) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    status: statusUpdate,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/queue/${launch}/${type}/${number}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result
}
