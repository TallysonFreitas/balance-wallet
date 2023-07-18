document.addEventListener('DOMContentLoaded',function () {
    const pane = document.getElementsByClassName('pane__days__day')


    for(let i = 0; i < pane.length; i++){
        pane[i].addEventListener('mouseenter',function () {  
            pane[i].childNodes[1].classList.add('active')
        })
        pane[i].addEventListener('mouseleave',function () {  
            pane[i].childNodes[1].classList.remove('active')
        })
    }
    let scale = 0
    for(let i = 0; i < pane.length; i++){
        pane[i].childNodes[1].innerHTML = '$' + valores[i].amount
        pane[i].childNodes[5].innerHTML = valores[i].day
        
        
        if(valores[i].amount > scale){
            scale = valores[i].amount
            console.log(scale)
        }
        
    }
    for(let i = 0; i < pane.length; i++){
        let tamanho = valores[i].amount / scale * 100
        pane[i].childNodes[3].style.height =  tamanho * 1.5 + 'px'
    }
    console.log(pane[0].childNodes[3])
})



const valores =[
    {
    "day": "mon",
    "amount": 17.45
    },
    {
    "day": "tue",
    "amount": 34.91
    },
    {
    "day": "wed",
    "amount": 52.36
    },
    {
    "day": "thu",
    "amount": 31.07
    },
    {
    "day": "fri",
    "amount": 23.39
    },
    {
    "day": "sat",
    "amount": 43.28
    },
    {
    "day": "sun",
    "amount": 25.48
    }
]

    