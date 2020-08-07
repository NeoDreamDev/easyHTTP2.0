const http = new EasyHTTP;

// // GET USERS
// http.get("https://jsonplaceholder.typicode.com/users")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// USER DATA

const data = {
    name: 'Salaam Tyrek',
    username: 'stfusal',
    email: 'stfusal@gmail.com'
}

// // CREATE USER
// http.post("https://jsonplaceholder.typicode.com/users", data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// // UPDATE USER
// http.put("https://jsonplaceholder.typicode.com/users/2", data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// DELETE USER
http.delete("https://jsonplaceholder.typicode.com/users/2")
    .then(data => console.log(data))
    .catch(err => console.log(err));