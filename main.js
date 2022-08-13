
const tiposPizza = [
    {
        id: 1,
        nombre: "Comun",
        img:'./pizza1.jpg',
        ingredientes: "jamon, queso",
        precio: 850,
    },
    {
        id: 2,
        nombre: "Especial",
        img:'./pizza2esp.jpg',
        ingredientes: "jamon, queso, huevo, morrón",
        precio:1200,
    },
    {
        id: 3,
        nombre:"Mediterranea",
        img:'./pizza3medi.jpg',
        ingredientes:"queso, rucula, jamon crudo, aceitunas negras",
        precio:2300,
    },
    {
        id: 4,
        nombre: "Vegetariana",
        img:'./pizza4champi.jpg',
        ingredientes:"queso, huevo, champignones, choclo, tomate",
        precio:2800,
    },
    {
        id: 5,
        nombre:"Alto Lomopizza",
        img:'./pizza5lomo.jpeg',
        ingredientes:"queso, huevo, carne, jamon, panceta, tomate, mayonesa, cebolla",
        precio:3000,
        // desc:'./img/pizza5lomo.jpg'
    }
    
];




document.addEventListener('keyup', e => {
    if(e.target.matches('#buscador')){
        document.querySelectorAll('.cards').forEach(piza =>{
            piza.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?piza.classList.remove('filtro')
            :piza.classList.add('filtro')
        })
    }

})

const cardContainer = document.getElementById('card');


function crearProducto(pizza){
    const card = document.createElement('card');
    card.innerHTML = `<div class="cards">
    <img src="pizza1.jpg" alt="">
    <h2 class="titulo">Común</h2>
    <p class="ingre">Jamon y Queso</p>
    <span>$600</span>
    <button class="comprar">Comprar</button>
</div>
<div class="cards">
    <img src="pizza2esp.jpg" alt="">
    <h2 class="titulo">Especial</h2>
    <p class="ingre">
        Jamon, Queso, Huevo, Morrón
    </p>
    <span>$800</span>
    <button class="comprar">Comprar</button>
</div>
<div class="cards">
    <img src="pizza3medi.jpg" alt="">
    <h2 class="titulo">Mediterranea</h2>
    <p class="ingre">
        Queso, Rúcula, Jamno Crudo, Aceitunas negras
    </p>
    <span>$1200</span>
    <button class="comprar">Comprar</button>
</div>
<div class="cards">
    <img src="pizza4champi.jpg" alt="">
    <h2 class="titulo">Vegetariana</h2>
    <p class="ingre">
        Queso, Huevo, Champignones, Choclo, Tomate
    </p>
    <span>$1500</span>
    <button class="comprar">Comprar</button>
</div>
<div class="cards1">
    <img src="pizza5lomo.jpeg" alt="">
    <h2 class="titulo">Lomo-Pizza</h2>
    <p class="ingre">
        Jamón, Queso, Carne, Panceta, Tomate, Mayonesa, Cebolla
    </p>
    <span>$2000</span>
    <button class="comprar">Comprar</button>
</div>`

    cardContainer.appendChild(card)
    card.classList.add('card-container')
}
crearProducto()

