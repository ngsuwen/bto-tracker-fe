export default function deleteSessionApi() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
    };
  
    const result = fetch("https://bto-tracker-website.herokuapp.com/api/sessions", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  
    return result;
  }