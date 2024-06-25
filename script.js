let istatus = document.querySelector('h5')
let btn = document.querySelector('button')
let flag = 0;


btn.addEventListener('click',()=>{
    if(flag == 0){ 
    istatus.innerHTML = 'Friends'
    istatus.style.color = 'Green'
    btn.innerHTML = 'Remove Friend'
    flag = 1
}else{
    istatus.innerHTML = 'Stranger'
    istatus.style.color = 'red'
    btn.innerHTML = 'Add Friend'
    flag = 0
}
})

