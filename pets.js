let typed = document.querySelector('.input');

let output = document.querySelector('.output');

let button = document.querySelector('.button')

function tap() {
    output.setAttribute('class', 'role')

    setInterval(() => {
        output.removeAttribute('class')
       slip()
    }, 2000);
}

let randomize = Math.random() * typed.value

/* function generate(){
    if(randomize <= ){

    }
} */

let body = document.body
body.style.cursor = 'crosshair'


function slip(){
   if (typed.value.toLowerCase().trim() == 'cat' || typed.value.toLowerCase().trim() == 'cats'){
        output.innerHTML = `
        <img class="pictures" src="./Animals/cats.jfif" alt="">
        `
    }
    else if (typed.value.toLowerCase().trim() == 'dog'|| typed.value.toLowerCase().trim() == 'dogs'){
        output.innerHTML = `
        <img class="pictures" src="./Animals/dog.jfif" alt="">
        `
    }
    else if (typed.value.toLowerCase().trim() == 'lion'|| typed.value.toLowerCase().trim() == 'lions'){
        output.innerHTML = `
        <img class="pictures" src="./Animals/Lion.jfif" alt=""> 
        `
    }
    else if (typed.value.toLowerCase().trim() == 'girrafe' || typed.value.toLowerCase().trim() == 'giraffe' ||
    typed.value.toLowerCase().trim() == 'girafe' || typed.value.toLowerCase().trim() == 'girraffe'){
        output.innerHTML = `
        <img class="pictures" src="./Animals/girrafe.jfif" alt=""> 
        `
    }
    else if (typed.value.toLowerCase().trim() == 'flamingo'){
        output.innerHTML = `
        <img class="pictures" src="./Animals/flamingo.jfif" alt=""> 
        `
    }
    else if (typed.value.toLowerCase().trim() == 'gorilla'){
        output.innerHTML = `
        <img class="pictures" src="./Animals/OIP.jfif" alt=""> 
        `
    }

    else if (typed.value.toLowerCase().trim() == 'pets' || typed.value.toLowerCase().trim() == 'pet'){
        output.innerHTML = `
        <div class="pets">
                <img src="./Animals/cats.jfif" alt="" />
                <img src="./Animals/dog.jfif" alt="" />
                <img src="./Animals/flamingo.jfif" alt="" />
                <img src="./Animals/OIP.jfif" alt="" />
                <img src="./Animals/Lion.jfif" alt="" />
                </div> 
        `
    }
    
    
}

button.addEventListener('click',tap)