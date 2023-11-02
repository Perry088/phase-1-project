function renderOneDish(dish){
    let post =document.createElement('li')
    post.className = 'post'
    post.innerHTML = `
   <image src='${dish.image}'>
   <div class='content'>
        <h1>${dish.name}</h1>
        <p>${dish.description}</p>
            <div class='rating'>
                <div class='big-star'>
                    <i class='fas fa-star></i>
                    <p class= 'selected-rating></p>
                </div>
                <h3>Rate This Dish</h3>
                <ul class- 'stars'>
                    <li class='star' data-value='1'>
                        <i class='fas fa-star'></i>
                    </li>
                    <li class='star' data-value='2'>
                        <i class='fas fa-star'></i>
                    </li>
                    <li class='star' data-value='3'>
                        <i class='fas fa-star'></i>
                    </li>
                    <li class='star' data-value='4'>
                        <i class='fas fa-star'></i>
                    </li>
                    <li class='star' data-value='5'>
                        <i class='fas fa-star'></i>
                    </li>
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
    