export default function addUnitFeedbackApi(obj) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    if (obj.blk === undefined || obj.unit === "" || obj.launch === ""){
      return {message:"Some fields are empty"}
    }
  
    console.log('here')
  
    var raw = JSON.stringify({
      launch: obj.launch,
      unit_type: obj.blk,
      unit: obj.unit,
      availability: obj.availability,
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const result = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/units`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
    return result;
  }
  