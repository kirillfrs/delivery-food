const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')




let toggleModal = () => {
    modal.classList.toggle('active')
};

cartButton.addEventListener('click', toggleModal);


close.addEventListener('click', toggleModal);

new WOW().init();