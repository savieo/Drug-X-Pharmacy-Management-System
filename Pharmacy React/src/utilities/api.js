const LOGIN = "http://localhost:8762/user-managment-service/users/login";

export const login = (username, password) => {
    console.log("Inside sign in");
    console.log(username, password);
    return fetch(LOGIN, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ userName: username, password: password })
    }).then((reponse) => reponse.json());
};