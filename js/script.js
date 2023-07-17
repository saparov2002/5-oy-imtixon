const userApi = "https://api.github.com/users/saparov2002";
const followersApi = "https://api.github.com/users/saparov2002/followers";
const reposApi = "https://api.github.com/users/saparov2002/repos";

const wrapperLeft = document.querySelector('.wrapper__left');


const items1 = document.querySelector(".items1");

const repoBlock = document.querySelector(".repo__block");


fetch(reposApi)
  .then(response => response.json())
  .then(repos => {
    const reposList = document.createElement("ul");
    repos.forEach(repo => {

      const repoItem = document.createElement("li");
      repoItem.innerHTML = `
        <div class="item1">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <span class="public">public</span>
        
         
        </div>
      `;
      reposList.appendChild(repoItem);
    });
    items1.appendChild(reposList);
  })
  .catch(error => {
    console.log("Xatolik yuz berdi:", error);
  });






  fetch(userApi)
    .then(response => response.json())
    .then(user => {
      
      const userProfile = document.createElement("div");
      userProfile.innerHTML = `
        <img class="user-avatar" src="${user.avatar_url}" alt="User Avatar">
        <h2 class="user-name">${user.login}</h2>
        <button class="user-btn">follow</button>
        <p class="user-followers">Followers: ${user.following}</p>
        <p class="user-repos">Following: ${user.public_repos}</p>
      `;
      wrapperLeft.appendChild(userProfile);
    })
    .catch(error => {
      console.log("Error occurred:", error);
    });
  


   

fetch(reposApi)
  .then(response => response.json())
  .then(followers => {
   
    const followersList = document.createElement("ul");
    followers.forEach(follower => {
      console.log(fol);
     
      const followerItem = document.createElement("li");
      followerItem.innerHTML = `
        <img class="follower-avatar" src="${follower.avatar_url}" alt="Follower Avatar">
        <a href="${follower.html_url}" target="_blank" class="follower-username">${follower.login}</a>
      `;
      followersList.appendChild(followerItem);
    });
    repoBlock.appendChild(followersList);
  })
  .catch(error => {
    console.log("Error occurred:", error);
  });
