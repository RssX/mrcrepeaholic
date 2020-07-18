const butonDulceata = document.querySelector('.butondulceata');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('.close-cart');
const cartItem = document.querySelector('.cart-item');

function showCart(){
    cart.classList.add('showCart');
};
function hideCart(){
    cart.classList.remove('showCart');
};

cartDulceata.addEventListener('click', showCart);
closeCart.addEventListener('click', hideCart);

// window.addEventListener('click', function(event){
//     if (event.target.parentNode != cart && 
//         event.target.cartItem != cart && 
//         event.target != cart && event.target != butonDulceata){
//         hideCart();
//     }
// });
