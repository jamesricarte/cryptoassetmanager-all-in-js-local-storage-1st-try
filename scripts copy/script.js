//localStorage.removeItem('list');
//localStorage.setItem('list', JSON.stringify(coinList));
//JSON.parse(localStorage.getItem('list'));

    const savedLocalStorage = JSON.parse(localStorage.getItem('list'));
    const coinList = [];

    if (savedLocalStorage !== null) {
        for (let i = 0; i < savedLocalStorage.length ; i++) {
            const storageLoop = savedLocalStorage[i];
            coinList.push(storageLoop);
        }
    }
    
    renderList();

    function addCoin() {
       
    const coinNameInput = document.querySelector('.js-coin-name-input');
    const coinNoInput = document.querySelector('.js-no-coin-input');
    const coinPriceInput = document.querySelector('.js-price-coin-input');

        const coinListObject = {
            coinName: coinNameInput.value,
            coinNo: coinNoInput.value,
            coinPrice: coinPriceInput.value,
            totalValue: Number(coinNoInput.value*coinPriceInput.value)
        }

        if (coinNameInput.value !== '' && coinNoInput.value !== '' && coinPriceInput.value !== '') {
            coinList.push(coinListObject);
        }

        renderList();

        if (coinNameInput.value !== '' && coinNoInput.value !== '' && coinPriceInput.value !== '') {
            coinNameInput.value = '';
            coinNoInput.value = '';
            coinPriceInput.value = '';
        }

    }

    function renderList() {
        let listLoopHTML = '';

        for (let i = 0; i < coinList.length; i++) {
            const listLoop = coinList[i];
            
            const html = `<div class="html-coin-list">
                                <div class="sections">
                                    <div class="sec-coin-name">
                                        <p class="sec-titles">Coin Name:</p>
                                        <p>${listLoop.coinName}</p>
                                    </div>
                                    <div class="sec-coin-no">
                                        <p class="sec-titles">Amount:</p>
                                        <p>${listLoop.coinNo}</p>
                                    </div>
                                    <div class="sec-coin-price">
                                        <p class="sec-titles">Price:</p>
                                        <p>${listLoop.coinPrice}</p>
                                    </div>
                                    <div class="sec-total-value">
                                        <p class="sec-titles">Total Value:</p>
                                        <p>${listLoop.totalValue}</p>
                                    </div>
                                    <div class="button"> 
                                            <a href="edit-page.html">
                                                <button onclick="
                                                localStorage.setItem('select', JSON.stringify(${i}));
                                                ">Edit</button>
                                            </a>
                                            
                                        <button onclick="
                                            coinList.splice(${i},1);
                                            renderList();
                                        ">Delete</button>
                                    </div>
                                </div>
                        </div>`;
            listLoopHTML += html;
        }
        document.querySelector('.js-added-coin-list').innerHTML = listLoopHTML;
        localStorage.setItem('list', JSON.stringify(coinList));
    }
    
    function addCoinEnterKeyDown(event) {
        if (event.key === 'Enter') {
            addCoin();
        }
    }

    console.log('coinList', coinList);
    console.log('savedLocalStorage', savedLocalStorage);

    console.log('selectedIndex', JSON.parse(localStorage.getItem('select')));
