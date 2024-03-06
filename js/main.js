const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


const myCarouselImages = document.querySelector('.my-carousel-images');
const myThumbnails = document.querySelector('.my-thumbnails');

let contImg = 0;

// reset immagini
myCarouselImages.innerHTML = '';
myThumbnails.innerHTML = '';


// reinserimento delle immagini
images.forEach((elemento, indice) =>{
    myCarouselImages.innerHTML += `
    <div class="my-carousel-item">
        <img class="img-fluid" src= "${elemento.url}" alt="${elemento.title} picture" >
            <div class="item-description px-3">
                <h2>${elemento.title}</h2> 
                <p>${elemento.description}</p>
            </div>
    </div>
    `;
   
}) 

// reinserimento delle thumbnail
images.forEach((elemento, indice) =>{
    myThumbnails.innerHTML += `
    <div class="my-thumbnail">
        <img class="img-fluid" src="${elemento.url}" alt="Thumbnail of ${elemento.title} picture">
    </div>
    `;
}) 

// reinserimento del tasto prev
myThumbnails.innerHTML += `
    <div class="my-previous position-absolute">
        <span class="my-prev-hook"></span>
    </div>
`;

// reinserimento del tasto next
myThumbnails.innerHTML += `
    <div class="my-next position-absolute">
        <span class="my-next-hook"></span>
    </div>
`;


const myCarouselItem = document.getElementsByClassName('my-carousel-item');
const myThumbnail = document.getElementsByClassName('my-thumbnail');

const btnPrev = document.querySelector('.my-prev-hook');
const btnNext = document.querySelector('.my-next-hook');

// aggiungo la classe active ad immagini e thumbnail
myCarouselItem[contImg].classList.add('active');
myThumbnail[contImg].classList.add('active');

console.log(btnPrev, btnNext);

// al click del btnPREV
btnPrev.addEventListener('click', function (){

    prev();
});


// al click del btnNext
btnNext.addEventListener('click', function (){

    next();
});





////// *  BONUS 1  * //////

const allThumbnail = document.querySelectorAll('.my-thumbnail');

allThumbnail.forEach((elemento, indice) => {

    elemento.addEventListener('click', () => {

        myCarouselItem[contImg].classList.remove('active');
        myThumbnail[contImg].classList.remove('active');

        contImg = indice;

        myCarouselItem[contImg].classList.add('active');
        myThumbnail[contImg].classList.add('active');
    })
})



////// *  BONUS 2  * //////

// al click dell'utente aggiungo funzionalità di autoplay alle immagini

autoPlay = setInterval (function() {

    myCarouselItem[contImg].classList.remove('active');
    myThumbnail[contImg].classList.remove('active');

    contImg++;
   
    if (contImg == images.length) {
        contImg = 0;
    }

    myCarouselItem[contImg].classList.add('active');
    myThumbnail[contImg].classList.add('active');

  }, 3000)







  ///////////////////////////    FUNZIONI    ////////////////////////////
  
  function prev() {

    myCarouselItem[contImg].classList.remove('active');
    myThumbnail[contImg].classList.remove('active');

    contImg--;

   
    if (contImg < 0) {
        contImg = images.length-1;
    }

    myCarouselItem[contImg].classList.add('active');
    myThumbnail[contImg].classList.add('active');

  }




  function next() {

    myCarouselItem[contImg].classList.remove('active');
    myThumbnail[contImg].classList.remove('active');

    contImg++;

    
    if (contImg > images.length-1) {
        contImg = 0;
    }

    myCarouselItem[contImg].classList.add('active');
    myThumbnail[contImg].classList.add('active');

  }