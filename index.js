const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feedElement = document.getElementById("feed");

const articleElement = document.createElement("article");
articleElement.classList.add("post");

feedElement.appendChild(articleElement);

/* Post Header */
const postHeaderElement = document.createElement("div");
postHeaderElement.classList.add("post-header");

articleElement.appendChild(postHeaderElement);

const avatarElement = document.createElement("img");
avatarElement.classList.add("avatar")
avatarElement.src = posts[0].avatar;
avatarElement.alt = posts[0].username;

postHeaderElement.appendChild(avatarElement);

const postHeaderInfoElement = document.createElement("div");
postHeaderElement.appendChild(postHeaderInfoElement);

const postFullNameElement = document.createElement("span");
postFullNameElement.classList.add("strong")
postFullNameElement.textContent = posts[0].name;

const postLocationElement = document.createElement("span");
postLocationElement.classList.add("location")
postLocationElement.textContent = posts[0].location;

postHeaderInfoElement.appendChild(postFullNameElement);
postHeaderInfoElement.appendChild(postLocationElement);

/* Post Image */
const postImgElement = document.createElement("div");
postImgElement.classList.add("post-img");
articleElement.appendChild(postImgElement);

const postImgAsset = document.createElement("img");
postImgAsset.src = posts[0].post;
postImgAsset.alt = `Photo by ${posts[0].username}`;
postImgElement.appendChild(postImgAsset);

/* Post Footer */
const postFooterElement = document.createElement("div");
postFooterElement.classList.add("post-footer");

articleElement.appendChild(postFooterElement);

/* Post Footer Actions */
const postFooterActionsElement = document.createElement("div");
postFooterActionsElement.classList.add("post-footer-actions");
const postFooterActionsHeartElement = document.createElement("img");
/* Heart Icon */
postFooterActionsHeartElement.src = "images/icon-heart.png";
postFooterActionsHeartElement.alt = `Heart Icon`;
postFooterActionsElement.appendChild(postFooterActionsHeartElement);
/* Comment Icon */
const postFooterActionsCommentElement = document.createElement("img");
postFooterActionsCommentElement.src = "images/icon-comment.png";
postFooterActionsCommentElement.alt = `Comment Icon`;
postFooterActionsElement.appendChild(postFooterActionsCommentElement);
/* Direct Message Icon */
const postFooterActionsDMElement = document.createElement("img");
postFooterActionsDMElement.src = "images/icon-dm.png";
postFooterActionsDMElement.alt = `Direct Message Icon`;
postFooterActionsElement.appendChild(postFooterActionsDMElement);

postFooterElement.appendChild(postFooterActionsElement);

/* Post Footer Intercations */
const postFooterInteractionsElement = document.createElement("div");
postFooterInteractionsElement.classList.add("strong");
postFooterInteractionsElement.textContent = `${posts[0].likes} likes`;
postFooterElement.appendChild(postFooterInteractionsElement);

/* Post Footer Info */
const postFooterInfoElement = document.createElement("div");
postFooterElement.appendChild(postFooterInfoElement);

const postFooterUsernameElement = document.createElement("span");
postFooterUsernameElement.classList.add("strong");
postFooterUsernameElement.textContent = posts[0].username;
postFooterInfoElement.appendChild(postFooterUsernameElement);

const postCaptionElement = document.createElement("span");
postCaptionElement.classList.add("caption");
postCaptionElement.textContent = posts[0].comment;
postFooterInfoElement.appendChild(postCaptionElement);


