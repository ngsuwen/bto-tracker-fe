export default function deleteUserApi(id, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      id: id,
      password: password
    });
  
    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const result = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/user/`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  
    return result;
  }