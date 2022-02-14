export default async function addProjectApi(obj, state) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  // unit types array
  const unit_types = []
  for (let properties in state){
    state[properties]?unit_types.push(properties):console.log(`no ${properties}`)
  }
  
  if (unit_types.length === 0 || obj.name === "" || obj.location === "" || obj.launch === "" || obj.location_url===""){
    return {message:"Some fields are empty"}
  }
  // articles array
  const articles_arr = obj.articles.split(",")
  
  var raw = JSON.stringify({
    "name": obj.name,
    "location": obj.location,
    "launch": obj.launch,
    "no_of_units": obj.no_of_units,
    "unit_types": unit_types,
    "unit_breakdown": obj.unit_breakdown,
    "price_range_2R": obj.price_range_2R,
    "price_range_3R": obj.price_range_3R,
    "price_range_4R": obj.price_range_4R,
    "price_range_5R": obj.price_range_5R,
    "price_range_3Gen": obj.price_range_3Gen,
    "status": obj.status,
    "articles": articles_arr,
    "preview_url": obj.preview_url,
    "location_url": obj.location_url,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  
  const result = fetch("http://localhost:8000/api/project/", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result
}