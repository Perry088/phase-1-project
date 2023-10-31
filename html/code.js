function renderOneDish(dish){
    let post =document.createElement('li')
    post.className = 'post'
    post.innerHTML = `
   <image src='${dish.image}'>
   <div class='content'>
        <h1>${dish.name}</h1>
        <p>${dish.description}</p>
            <div class='buttons'>
            <button>1</button>
            <button>2</button>
            <button>3</button> 
            <button>4</button>
            <button>5</button>
            </div>
        <p>
        $<span class= 'average-rating'>${dish.rating}</span>
        </div>`

    document.querySelector('#post-container').appendChild(post)
}

function getDishes(){
    fetch('http://localhost:3000/dishes')
    .then(res=> res.json())
    .then(dishs=> dishs.forEach(dish => renderOneDish(dish)))
}

function initialize(){
    getDishes()
}
initialize()

// fetch('http://localhost:3000/dishes')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(post => {
//             const postElement = createPostElement(post);
//             postContainer.appendChild(postElement);
//         });
//     })
    // .catch(error => console.error("Error fetching data:", error));

    // function createPostElement(post){
    //     const postDiv = document.createElement('div');
    //     postDiv.className = 'post';

    //     const postImage = document.createElement('img');
    //     postImage.src = post.image;
    //     postImage.alt = 'Post Image';
    //     postImage.className = 'post-image';
        
    //     const postContent = document.createElement('div');
    //     postContent. className = 'post-content';

    //     const postName = document.createElement('h1');
    //     postName.textContent = post.name;
    //     postName.className = 'post-name';

    //     const postDescription = document.creatElement ('p');
    //     postDescription.textContent = post.Description;
    //     postDescription.className = 'post-description';

    //     const postRating = document.createElement('div');
    //     postRating.className = 'post-rating';

    //     const ratingLabel = document.createElement('span');
    //     ratingLabel.textContent = 'Your Rating: ';
    //     ratingLabel.classNAme = 'rating-label';

    //     const averageRating = document.createElement('div');
    //     averageRating.textContent = 'Average Rating: ';
    //     averageRating.className = 'average-rating';

    //     const averageRatingValue = document.creatElement('span');
    //     averageRatingValue.textContent = calculateAverageRating(post.id, post.rating).toFixed(1);
    //     averageRating.className ='average-rating-value';
    //     averageRating.appendChild(averageRatingValue)

    //     const rateButtons = document.createElement("div");
    //     rateButtons.className = "rate-buttons";
    //     for (let i = 1; i <= 5; i++) {
    //         const rateButton = document.createElement("button");
    //         rateButton.textContent = i;
    //         rateButton.className = "rate-button";
    //         rateButton.dataset.rating = i;
    //         rateButton.addEventListener("click", () => ratePost(post.id, i));
    //         rateButtons.appendChild(rateButton);
    //    }
    //     postRating.appendChild(ratingLabel);
    //     postRating.appendChild(rateButtons);
    //     postRating.appendChild(averageRating);
    
    //     postContent.appendChild(postName);
    //     postContent.appendChild(postDescription);
    //     postContent.appendChild(postRating);
    
    //     postDiv.appendChild(postImage);
    //     postDiv.appendChild(postContent);
    
    //     return postDiv;

    // }

    // const ratings = {};

    // function ratePost(postId, rating){
    //     ratings[postId] = rating;
    //     const averageRatingValue = document.querySelector(`.post[data-id="${postId}"] .average-rating-value`);
    //     averageRatingValue.textContent = calculateAverageRating(postId, rating).toFixed(1);
    // }

    // function calculateAverageRating(postId, newRating){
    //     if (!ratings[postId]){
    //         ratings[postId] = newRating;
    //     } else{
    //         ratings[postId] = (ratings[postId] + newRating) / 2;
    //     }
    //     return ratings[postId]
    // }
    