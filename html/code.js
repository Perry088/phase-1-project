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