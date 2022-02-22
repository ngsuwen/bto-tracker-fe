export default function editQueueAckApi(launch, type, number, statusUpdate) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      status: statusUpdate,
      acknowledged: true,
    });
  
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const result = fetch(`https://bto-tracker-website.herokuapp.com/api/queue/${launch}/${type}/${number}`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  
    return result
  }
  