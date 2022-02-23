export default function getQueueUnitListApi(launch, unit) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const result = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/queue/${launch}/${unit}`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  
    return result;
  }