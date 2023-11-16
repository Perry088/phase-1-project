//post 

function renderOneDish(dish){
    let post =document.createElement('li')
    post.className = 'post'
    post.innerHTML = `
   <image src='${dish.image}'>
   <div class='content'>
        <h1>${dish.name}</h1>
        <p>${dish.description}</p>
        <p>
            likes:<span class='like-count'>${dish.likes}</span>
        </p>
        <p>
            dislikes:<span class='dislike-count'>${dish.dislikes}</span>
        </p>
    </div>
    <div class='buttons'>
        <button id='like'>Like</button>
        <button id='dislike'>dislike</button>
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


document.querySelector('#new-dish').addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let dish = {
        name:e.target.name.value,
        image:e.target.image_url.value,
        description:e.target.description.value
    }
    renderOneDish(dish)
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