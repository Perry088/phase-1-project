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

    fucntion createPostElement(post){
        
    }