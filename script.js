
//------------------------- FORMATAÇÃO DE MOEDA ----------------------------------------

// 1. Seleciona os elementos do HTML
var precoAtualElemento = document.querySelector("#preco-atual");
var precoAnteriorElemento = document.querySelector("#preco-anterior");

// 2. Cria o formatador de moeda (Exemplo: Real Brasileiro - R$)
var formatadorMoeda = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

// 3. Função para transformar o texto em moeda
function aplicarFormatacao(elemento) {
    if (elemento) {
        // Pega o texto de dentro da tag (ex: "125") e transforma em número decimal
        var valorNumerico = parseFloat(elemento.textContent);
        
        // Formata o número e joga de volta para o HTML
        elemento.textContent = formatadorMoeda.format(valorNumerico);
    }
}

// 4. Executa a função para os dois preços
aplicarFormatacao(precoAtualElemento);
aplicarFormatacao(precoAnteriorElemento);



// -------------- MODAL LIGHTBOX -------------------------------------------------

/* Open the Modal */
function openModal() {
  document.getElementById("myModal").style.display = "flex"
}

/* Close the Modal */
function closeModal() {
  document.getElementById("myModal").style.display = "none"
}

var slideIndex = 1;
showSlides(slideIndex);

/* Next/previous controls */
function plusSlides(n) {
  showSlides(slideIndex += n)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "")
  }
  slides[slideIndex-1].style.display = "block"
  dots[slideIndex-1].className += " active";
}


// ------- Lógica botões da Main -----------

const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");
const qtd = document.querySelector("#numero");

let numero = 0;

function adicionar(){
  qtd.innerHTML = ++numero;
}

function retirar(){
  if(numero > 0)
    qtd.innerHTML = --numero;
  else
    numero = numero
}

// ----------- Lógica Carrinho --------------------

const botaoCarrinho = document.querySelector('#main-botao');
let carrinho = false
let qtdCarrinho = 0;


function proCarrinho(){
  if(numero !== 0){
    carrinho = true;
    qtdCarrinho += numero
  }
}

// ------- Lógica botões do carrinho -----------

const maisC = document.querySelector("#mais-c");
const menosC = document.querySelector("#menos-c");
const qtdC = document.querySelector("#numero-c");

let numeroCarrinho;

function adicionarCart(){
  qtdC.innerHTML = ++numeroCarrinho;
}

function retirarCart(){
  if(numeroCarrinho > 0)
    qtdC.innerHTML = --numeroCarrinho;
  else
    carrinho = false;
}