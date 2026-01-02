const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]

const feedElement = document.getElementById("feed");

// Create Post Function
function createPost(post, i) {
    const id = `${post.username}-${i}`;
/* Post Article */
const articleElement = document.createElement("article");
articleElement.classList.add("post");
articleElement.id = id;

feedElement.appendChild(articleElement);

/* Post Header */
const postHeaderElement = document.createElement("div");
postHeaderElement.classList.add("post-header");

articleElement.appendChild(postHeaderElement);

const avatarElement = document.createElement("img");
avatarElement.classList.add("avatar")
avatarElement.src = post.avatar;
avatarElement.alt = post.username;

postHeaderElement.appendChild(avatarElement);

const postHeaderInfoElement = document.createElement("div");
postHeaderElement.appendChild(postHeaderInfoElement);

const postFullNameElement = document.createElement("span");
postFullNameElement.classList.add("strong")
postFullNameElement.textContent = post.name;

const postLocationElement = document.createElement("span");
postLocationElement.classList.add("location")
postLocationElement.textContent = post.location;

postHeaderInfoElement.appendChild(postFullNameElement);
postHeaderInfoElement.appendChild(postLocationElement);

/* Post Image */
const postImgElement = document.createElement("div");
postImgElement.classList.add("post-img");
articleElement.appendChild(postImgElement);

const postImgAsset = document.createElement("img");
postImgAsset.src = post.post;
postImgAsset.alt = `Photo by ${post.username}`;
postImgElement.appendChild(postImgAsset);

/* Post Footer */
const postFooterElement = document.createElement("div");
postFooterElement.classList.add("post-footer");

articleElement.appendChild(postFooterElement);

/* Post Footer Actions */
const postFooterActionsElement = document.createElement("div");
postFooterActionsElement.classList.add("post-footer-actions");
/* Heart Icon */
const postFooterActionHeartButton = document.createElement("button");
postFooterActionHeartButton.classList.add("post-footer-action-btn");
postFooterActionHeartButton.addEventListener("click", () => toggleLike(post, id) );
const postFooterActionsHeartElement = document.createElement("img");
postFooterActionsHeartElement.src = "images/icon-heart.png";
postFooterActionsHeartElement.alt = `Heart Icon`;
postFooterActionsHeartElement.classList.add("heart-icon")
postFooterActionHeartButton.appendChild(postFooterActionsHeartElement);
postFooterActionsElement.appendChild(postFooterActionHeartButton);
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

/* Post Footer Interactions */
const postFooterInteractionsElement = document.createElement("div");
postFooterInteractionsElement.classList.add("strong", "likes-count");
postFooterInteractionsElement.textContent = `${post.likes} likes`;
postFooterElement.appendChild(postFooterInteractionsElement);

/* Post Footer Info */
const postFooterInfoElement = document.createElement("div");
postFooterElement.appendChild(postFooterInfoElement);

const postFooterUsernameElement = document.createElement("span");
postFooterUsernameElement.classList.add("strong");
postFooterUsernameElement.textContent = post.username;
postFooterInfoElement.appendChild(postFooterUsernameElement);

const postCaptionElement = document.createElement("span");
postCaptionElement.classList.add("caption");
postCaptionElement.textContent = post.comment;
postFooterInfoElement.appendChild(postCaptionElement);

}

// Loop through posts and create posts
for (let i =0;i < posts.length; i++) {
    createPost(posts[i], i)
}

// Like Post Function
function likePost(post, id) {
    console.log(`${post.username} liked your post with id ${id}`);
    post.likes++;
    post.isLiked = true;

    const postFooterActionHeartImage = document.querySelector(`#${id} .heart-icon`);
    postFooterActionHeartImage.src = "images/icon-heart-active.png";
    postFooterActionHeartImage.alt = "Red Heart Icon";

    const postFooterInteractionsElement = document.querySelector(`#${id} .likes-count`);
    postFooterInteractionsElement.textContent = `${post.likes} likes`;
}

// Dislike Post Function
function dislikePost(post, id) {
    console.log(`${post.username} disliked your post with id ${id}`);
    post.likes--;
    post.isLiked = false;

    const postFooterActionHeartImage = document.querySelector(`#${id} .heart-icon`);
    postFooterActionHeartImage.src = "images/icon-heart.png";
    postFooterActionHeartImage.alt = "Outline Heart Icon";
    
    const postFooterInteractionsElement = document.querySelector(`#${id} .likes-count`);
    postFooterInteractionsElement.textContent = `${post.likes} likes`;
}

function toggleLike(post, id) {
    if (post.isLiked) {
        dislikePost(post, id);
    } else {
        likePost(post, id);
    }
}


