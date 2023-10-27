const postContainer = document.getElementById('post-container')

fetch('http://localhost:3000/dishes')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            const postElement = createPostElement(post);
            postContainer.appendChild(postElement);
        });
    })
    .catch(error => console.error("Error fetching data:", error));

    function createPostElement(post){
        const postDiv = document.createElement('div');
        postDiv.className = 'post';

        const postImage = document.createElement('img');
        postImage.src = post.image;
        postImage.alt = 'Post Image';
        postImage.className = 'post-image';
        
        const postContent = document,createElement('div');
        postContent. className = 'post-content';

        const postName = document.createElement('h1');
        postName.textContent = post.name;
        postName.className = 'post-name';
    }