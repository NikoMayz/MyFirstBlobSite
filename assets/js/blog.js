document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle between light and dark mode
    function toggleMode() {
        const body = document.body;
        const modeToggle = document.getElementById('mode-toggle');

        if (modeToggle.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Add event listener for mode toggle switch
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('change', toggleMode);

    // Function to fetch blog posts from localStorage and display them
    function displayPosts() {
        const postList = document.getElementById('post-list');
        postList.innerHTML = ''; // Clear previous posts

        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        if (posts.length === 0) {
            const noPostsMessage = document.createElement('li');
            noPostsMessage.textContent = 'No blog posts yet.';
            postList.appendChild(noPostsMessage);
        } else {
            posts.forEach(function (post) {
                console.log(post); // Log post information to console
                const postItem = document.createElement('li');
                postItem.classList.add('post-item');
                postItem.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <p class="author">By ${post.username}</p>
                `;
                postList.appendChild(postItem);
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

