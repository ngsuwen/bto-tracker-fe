export default async function addUnitApi(obj) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

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
  
  fetch("http://localhost:8000/api/units", requestOptions)
  .then((response) => response.json())
  .catch((error) => console.log("error", error));
}
