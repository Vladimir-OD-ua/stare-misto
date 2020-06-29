const openModal = data => {
    const modal = document.getElementById('modal');
    modal.classList.add('open');
    modal.classList.remove('close');
    const price = document.getElementById('price');
    const name = document.getElementById('name');
    const components = document.getElementById('components');
    const image =  document.getElementById('image');


    price.innerText = data.price;
    name.innerText = data.name;
    components.innerText = data.components;
    image.src = data.image
};

const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.add('close');
    modal.classList.remove('open')
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add('close');
        modal.classList.remove('open')
    }
};
