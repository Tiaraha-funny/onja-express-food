console.log('good luck!');

//drag all the elements needed

const addOrderBtn = document.querySelector('.add-order');
const divModals = document.querySelector('.modals');
const orderList = document.querySelector('.order-list');
const outerModal = document.querySelector('.form_modal_outer');
const innerModal = document.querySelector('.form_modal_inner');

const submitBtn = document.querySelector('.submitOrder');
const details = document.querySelector('.details');
const served = document.querySelector('.served');

const inputName = document.querySelector('[name="name"]');
const selectInpput = document.querySelector('.select-form');
const radio = document.querySelector('[type="radio"]');
const inputNumber = document.querySelector('[name="amount"]');

//opening the modal form

const openModal = e => {
    outerModal.classList.add('open');
};

const handleClick = e => {
    console.log('remove class');

    const isOutside = !e.target.closest('.form_modal_inner');
    if (isOutside) {
        outerModal.classList.remove('open');
    }
};

const handleEscape = e => {
    if (e.key === 'Escape') {
        outerModal.classList.remove('open');
    }
};

// create the HTML after clicking the add order list

let myHTML =  `
        <div class="order" data-dish="romazava" data-size="large" data-amount="2">
                <span class="title">
                    ${inputName.value}
                </span>
                <button class="details">Details</button>
               <button class="served">Delete order</button>
            </div>
    `    
;

document.addEventListener('submit', (e) => {
    console.log('submit me');
    e.preventDefault();
    orderList.insertAdjacentHTML('afterbegin', myHTML);
    outerModal.classList.remove('open');
});

//crete the HTML after clicking the details button
let myDetailsHTML = `
<div class="form_modal_outer">
    <div class="form_modal_inner">
        <h2>${inputName.value}</h2>
    </div>
</div>
`

details.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Work please');
    divModals.innerHTML = myDetailsHTML;
});
// outerModal.classList.add('.form_modal_outer');

window.addEventListener('keydown', handleEscape);
outerModal.addEventListener('click', handleClick);
addOrderBtn.addEventListener('click', openModal);