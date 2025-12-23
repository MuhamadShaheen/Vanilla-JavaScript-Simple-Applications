let getButton = document.getElementById("submit-button");
let inputField = document.getElementById("user-input");
getButton.onclick = function() {
    if (inputField.value === "") {
        alert("Please Type Github Username");
    }
    else {
        getRepos();
    }
}

function getRepos() {
    fetch(`https://api.github.com/users/${inputField.value}/repos`)
    .then((response) => response.json())
    .then((repos) => {
        let reposHolder = document.querySelector(".repos-holder");
        reposHolder.innerHTML = "";
        repos.forEach(repo => {
            let repoDiv = document.createElement("div");
            repoDiv.classList.add("repo");
            let repoNameDiv = document.createElement("div");
            repoNameDiv.classList.add("repo-name");
            repoNameDiv.innerText = repo.name;

            repoDiv.appendChild(repoNameDiv);
            let repoLink = document.createElement("a");
            repoLink.classList.add("repo-link");
            repoLink.href = repo.html_url;
            repoLink.setAttribute("target","_blank");

            let visitSpan = document.createElement("span");
            visitSpan.innerText = "Visit";
            repoLink.appendChild(visitSpan);
            repoDiv.appendChild(repoLink);
            
            reposHolder.appendChild(repoDiv);
        })
    })
}