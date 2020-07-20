console.log('good luck!');

//drag all the elements needed
const addOrderBtn = document.querySelector('.add-order');
const outerModal = document.querySelector('.form_modal_outer');
const innerModal = document.querySelector('.form_modal_inner');
const orderList = document.querySelector('.order-list');

// create HTML for the form
const myFormHTML =  `
    <h2>Add an order</h2>
    <form>
        <p>Your name :</p>
        <input
            class="input-form"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
            required
        />
        <p><label for="dish">Please select your dish :</label></p>
        <select name="dish" id="dish" class="select-form" required>
            <option value="romazava">Romazava</option>
            <option value="koba">Koba</option>
            <option value="ravitoto">Ravitoto</option>
            <option value="mokary">Mokary</option>
            <option value="achard">Achard</option>
            <option value="masikita">Masikita</option>
            <option value="sambos">Sambos</option>
            <option value="mofo-baolina">Mofo baolina</option>
            <option value="ranonapango">Ranonapango</option>
        </select>
        <p>Please select the size of your plate :</p>
        <input class="radio" type="radio" id="small" name="size" value="small" required />
        <label for="small">Small</label><br />
        <input class="radio" type="radio" id="medium" name="size" value="medium" />
        <label for="medium">Medium</label><br />
        <input class="radio" type="radio" id="large" name="size" value="large" />
        <label for="large">Large</label><br />
        <p>How many pieces do you want to order?</p>
        <input
            class="input-form"
            type="number"
            id="quantity"
            name="amount"
            placeholder="Enter a number here"
            required
        />
        <button class="submitOrder" type="submit">Submit to add the order</button>
    </form>    
    `

//opening the modal form
    
const openModal = e => {
    outerModal.classList.add('open');
    innerModal.innerHTML = myFormHTML;
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

let mySubmitHTML =  `
        <div class="order" data-dish="romazava" data-size="large" data-amount="2">
                <span class="title">
                    Petah Jeannie
                </span>
                <button class="details">Details</button>
               <button class="served">Delete order</button>
            </div>
    `    
;
//crete the HTML after clicking the details button
let myDetailsHTML = `
<div class="form_modal_outer">
    <div class="form_modal_inner">
        <h2>My dish</h2>
        <img src="https://picsum.photos/400"/>
    </div>
</div>
`
//event delegation for the submit button

window.addEventListener('click', (e) => {
    console.log('details buton is clicked');
    if(e.target.matches('button.submitOrder')) {
        console.log('submit me');
        e.preventDefault();
        orderList.insertAdjacentHTML('afterbegin', mySubmitHTML);
        outerModal.classList.remove('open');
    } 
    if (e.target.matches('details')) {
        //open the modal
        outerModal.classList.add('open');
        innerModal.innerHTML = myDetailsHTML;
    }
})


//accessing the function

window.addEventListener('keydown', handleEscape);
outerModal.addEventListener('click', handleClick);
addOrderBtn.addEventListener('click', openModal);

