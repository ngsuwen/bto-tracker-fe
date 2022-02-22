export default function createUserRequestApi(obj) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  if (obj.launch === "" || obj.email === "" || obj.message === "" || obj.validation === "") {
    return { message: "Missing fields" };
  }

  var raw = JSON.stringify({
    role: obj.role,
    email: obj.email,
    message: obj.message,
    validation: obj.validation,
    launch: obj.launch,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const result = fetch("/api/user/", requestOptions)
  .then((response) => response.json())
  .catch((error) => console.log("error", error));
  
  return result;
}
