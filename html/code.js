//post 

function createDish(dish){
    let post =document.createElement('li')
    post.className = 'post'
    post.innerHTML = 
   `<image src='${dish.image}'>
   <div class='content'>
        <h1>${dish.name}</h1>
        <p>${dish.description}</p>
    </div>
    <div class='buttons'>
        <button id='like'>Like</button>
        <button id='dislike'>dislike</button>
    </div>
    <div>
        <p>
            <span class='like-count'>likes</span>
        </p>
        <p>
            <span class='dislike-count'>dislikes</span>
        </p>
    </div>`
    
    post.querySelector('#like').addEventListener('click', () =>{
        dish.likes += 1;
        post.querySelector('.like-count').textContent = dish.likes
        updateLikes(dish)
    })
    post.querySelector('#dislike').addEventListener('click', () =>{
        dish.dislikes +=1;
        post.querySelector('.dislike-count').textContent = dish.dislikes
        updateDislikes(dish)
    })
    
    let likeCount = post.querySelector('.like-count')
    likeCount.addEventListener('mouseover', function(){
         likeCount.textContent = `${dish.likes}`
    })
    likeCount.addEventListener('mouseleave', function(){
        likeCount.textContent='likes'
    })

    let dislikeCount = post.querySelector('.dislike-count')
    dislikeCount.addEventListener('mouseover', function(){
         dislikeCount.textContent = `${dish.dislikes}`
    })
    dislikeCount.addEventListener('mouseleave', function(){
        dislikeCount.textContent='dislikes'
    })

    document.querySelector('#post-container').appendChild(post)
}

function getDishes(){
    fetch('http://localhost:3000/dishes')
    .then(res=> res.json())
    .then(dishs=> dishs.forEach(dish => createDish(dish)))
}

function initialize(){
    getDishes()
}
initialize()


document.querySelector('#new-dish').addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let dish = {
        name:e.target.name.value,
        image:e.target.image_url.value,
        description:e.target.description.value
    }
    createDish(dish)
    addDish(dish)
}
function addDish(dish){
    fetch('http://localhost:3000/dishes', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(dish)
    })
    .then(res => res.json())
    .then(dish => console.log(dish))
}

function updateLikes(dish){
    fetch(`http://localhost:3000/dishes/${dish.id}`, {
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(dish)
    })
    .then(res => res.json())
    .then(dish => console.log(dish))
}

function updateDislikes(dish){
    fetch(`http://localhost:3000/dishes/${dish.id}`, {
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(dish)
    })
    .then(res => res.json())
    .then(dish => console.log(dish))
}