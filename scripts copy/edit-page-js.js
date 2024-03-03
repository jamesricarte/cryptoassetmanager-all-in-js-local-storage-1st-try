//localStorage.removeItem('list');
//localStorage.setItem('list', JSON.stringify(coinList));
//JSON.parse(localStorage.getItem('list'));

const savedLocalStorage = JSON.parse(localStorage.getItem('list'));
console.log('savedLocalStorage', savedLocalStorage);
const selectedIndex = JSON.parse(localStorage.getItem('select'));
console.log('selectedIndex:',selectedIndex);

const coinSelection = [];

        const storageLoop = savedLocalStorage[selectedIndex];
        coinSelection.push(storageLoop);
    
console.log('coinSelection', coinSelection);

const html = 
        `<div class="js-selected-coin-logger">
                <div>
                <p class="sec-titles">Coin Name:</p>
                <p>${coinSelection[0].coinName}</p>
                </div>

                <div>
                <p class="sec-titles">Amount:</p>
                <p>${coinSelection[0].coinNo}</p>
                </div>

                <div>
                <p class="sec-titles">Price:</p>
                <p>₱${coinSelection[0].coinPrice}</p>
                </div>

                <div>
                <p class="sec-titles">Total Value:</p>
                <p>₱${coinSelection[0].totalValue}</p>
                </div>

                <div>
                <button>Deduct</button></div>
                <button>Add</button></div>
                </div>
        `;

document.querySelector('.js-coin-logger').innerHTML = html;