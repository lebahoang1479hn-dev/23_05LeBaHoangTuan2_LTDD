var url = 'https://my-json-server.typicode.com/typicode/demo/posts';
var data = {};
//data.firstname = "John";
//data.lastname = "Snow";

var params = new URLSearchParams();
for (var key in data) {
  if (data.hasOwnProperty(key)) {
    params.append(key, data[key]);
  }
}

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "201") {
    console.table(users);
  } else {
    console.error(users);
  }
}
xhr.send(params);