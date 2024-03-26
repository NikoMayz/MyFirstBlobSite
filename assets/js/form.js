document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.getElementById('blog-form');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get input values
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Check if any field is empty
        if (!username || !title || !content) {
            alert('Please complete all fields.'); // Prompt user to complete the form
            return; // Exit function to prevent form submission
        }

        // Create a blog post object
        const post = {
            username: username,
            title: title,
            content: content
        };

        // Store the blog post data in localStorage
        let posts = localStorage.getItem('posts');
        if (!posts) {
            posts = [];
        } else {
            posts = JSON.parse(posts);
        }
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        // Redirect the user to the posts page (blog.html)
        window.location.href = 'blog.html';
    });

    // Back button functionality
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', function () {
            window.location.href = 'index.html'; // Redirect to the landing page
        });
    }
});