const inputValue = document.querySelector("#search");
const searchBtn = document.querySelector(".searchBtn");
const nameContainer = document.querySelector(".profile-name");
const unContainer = document.querySelector(".main-profile-name");
const reposContainer = document.querySelector(".profile-repos");
const urlContainer = document.querySelector(".profile-url");

const client_id = "Iv1.4ef96f6122d6d3fe";
const client_secret = "8b2385ad3128357803dae2f584316bf1ba9c6650";


const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    // converting data to readable format
    const data = await api_call.json();
    return { data };
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);

        nameContainer.innerHTML = `Name: <div>${res.data.name}</div>`;
        unContainer.innerHTML = `Name: <div>${res.data.login}</div>`;
        reposContainer.innerHTML = `Repos: <div>${res.data.public_repos}</div>`; 
        urlContainer.innerHTML = `URL: <div>${res.data.html_url}</div>`;     
    });
}

searchBtn.addEventListener("click", () => {
    showData();
})





























// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
//     console.log(response);
// })

// .catch(function(error) {
//     console.log(error);
// });