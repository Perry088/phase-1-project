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
        
        const postContent = document.createElement('div');
        postContent. className = 'post-content';

        const postName = document.createElement('h1');
        postName.textContent = post.name;
        postName.className = 'post-name';

        const postDescription = document.creatElement ('p');
        postDescription.textContent = post.Description;
        postDescription.className = 'post-description';

        const postRating = document.createElement('div');
        postRating.className = 'post-rating';

        const ratingLabel = document.createElement('span');
        ratingLabel.textContent = 'Your Rating: ';
        ratingLabel.classNAme = 'rating-label';

        const averageRating = document.createElement('div');
        averageRating.textContent = 'Average Rating: ';
        averageRating.className = 'average-rating';

        const averageRatingValue = document.creatElement('span');
        averageRatingValue.textContent = calculateAverageRating(post.id, post.rating).toFixed(1);
        averageRating.className ='average-rating-value';
        averageRating.appendChild(averageRatingValue)

        const rateButtons = document.createElement("div");
        rateButtons.className = "rate-buttons";
        for (let i = 1; i <= 5; i++) {
            const rateButton = document.createElement("button");
            rateButton.textContent = i;
            rateButton.className = "rate-button";
            rateButton.dataset.rating = i;
            rateButton.addEventListener("click", () => ratePost(post.id, i));
            rateButtons.appendChild(rateButton);
       }
        postRating.appendChild(ratingLabel);
        postRating.appendChild(rateButtons);
        postRating.appendChild(averageRating);
    
        postContent.appendChild(postName);
        postContent.appendChild(postDescription);
        postContent.appendChild(postRating);
    
        postDiv.appendChild(postImage);
        postDiv.appendChild(postContent);
    
        return postDiv;

    }