document.addEventListener('DOMContentLoaded', function () {


    // Function to fetch blog posts from localStorage and display them
    function displayPosts() {
        const postList = document.getElementById('post-list'); //where posts will be displayed
        postList.innerHTML = ''; // Clear previous posts

        const posts = JSON.parse(localStorage.getItem('posts')) || [];  //retrieves and parses data into array

        if (posts.length === 0) { //if there are no posts
            const noPostsMessage = document.createElement('li'); //create new list item
            noPostsMessage.textContent = 'No blog posts yet.';  
            postList.appendChild(noPostsMessage);  //appends it to post-list element
        } else {
            posts.forEach(function (post) {  //if there are post
                console.log(post); // Log post information to console
                const postItem = document.createElement('li');  //create a new LI with the following info
                postItem.classList.add('post-item');
                postItem.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <p class="author">By ${post.username}</p> 
                `;
                postList.appendChild(postItem); //and append it to post list
            });
        }
    }

    // Display blog posts when the page loads
    displayPosts();

    // Function to handle back button click
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function () {
        window.location.href = 'index.html'; // Redirect to the landing page
    });
});

