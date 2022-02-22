export default function addQueueApi(obj) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    if (obj.date === "" || obj.number === "" || obj.unit_type === "" || obj.launch === "" || obj.queue_type === ""){
      return {message:"Some fields are empty"}
    }

    var raw = JSON.stringify({
      launch: obj.launch,
      date: obj.date,
      number: obj.number,
      unit_type: obj.unit_type,
      queue_type: obj.queue_type,
      validation: obj.validation,
      status: false,
      acknowledged: false,
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const result = fetch("https://bto-tracker-website.herokuapp.com/api/queue", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));

    return result;
  }
  