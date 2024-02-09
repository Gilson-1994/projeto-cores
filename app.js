const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn')

const color = document.querySelector('.span-color')

console.log(btn, color)

btn.addEventListener('click', function(){
    console.log('clicou no butão')

    const radomNumber = getRadomNamber()

    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colors[radomNumber]
    color.textContent = colors[getRadomNamber()]
    
})

function getRadomNamber(){
    return Math.floor(Math.random() * colors.length)
}

        


