export default function editUserApi(id, oldPassword, newPassword) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      id: id,
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
  
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    const result = fetch(`/api/user/`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  
    return result;
  }
  