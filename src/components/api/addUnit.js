export default function addUnitApi(obj) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  if (obj.blk === "" || obj.unit.length <= 5 || obj.unit_type === undefined || obj.launch === ""){
    return {message:"Some fields are empty"}
  }

  console.log('here')

  var raw = JSON.stringify({
    launch: obj.launch,
    blk: obj.blk,
    unit: obj.unit,
    unit_type: obj.unit_type,
    price: null,
    availability: true,
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
