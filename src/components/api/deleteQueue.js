export default function deleteQueueApi(launch, type, number) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
  
    const result = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/queue/${launch}/${type}/${number}`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  
    return result
  }
  