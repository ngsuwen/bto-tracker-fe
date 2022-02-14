export default async function addUserApi(obj) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "username": obj.username,
      "password": obj.password,
      "role": obj.role,
      "launch": obj.launch,
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const result = fetch("http://localhost:8000/api/user", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
      
      return result
  }
  