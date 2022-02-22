export default function findOneProjectApi(launch) {

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = fetch(
    `https://bto-tracker-website.herokuapp.com/api/project/${launch}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
}
