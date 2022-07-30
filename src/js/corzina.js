
const productsBtn = document.querySelectorAll('.corzina-btn');
const cartProductsList = document.querySelector('.list__js');
const cart = document.querySelector('.cart');
const cartQuantity = document.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.fullprice');
const cartBox = document.querySelector('.box__js');
let cartNumber = document.querySelector('.cart-product__number');
let array = []



// const localStorageHost = () => {
// 	const productsLi = document.querySelectorAll('.cart__item');
// 	for (const li of productsLi) {
// 		const liItem = li.outerHTML
// 		array.push(liItem)
// 	}
// 	sessionStorage.setItem('li',JSON.stringify(array))
// 	console.log(sessionStorage.getItem('li'))
	
// }


let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return Number.parseInt(str);
};

const plusFullPrice = (currentPrice) => {
	return price += Math.round(currentPrice)  ;
};

const minusFullPrice = (currentPrice) => {
	return price -= Math.round(currentPrice) ;
};


const printQuantity = () => {
	let productsListLength = document.querySelector('.list__js').children.length;
	cartQuantity.textContent = productsListLength;
	productsListLength === 0 ? cartQuantity.classList.add('un-active-qvontiti') : cartQuantity.classList.remove('un-active-qvontiti');

};
const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)} zl`;
};
const full = document.querySelector(".print_fullprice")
const printFull = () => {
	full.textContent = `${normalPrice(printPrice)} zl`;
};
let printPrice = 0;
let priceSym = 0;
const plusFull = (curre,values) => {
	return priceSym = values * curre;
};
const FullPrice = (currentPrice) => {
	printPrice = 0
	return printPrice += Math.round(currentPrice);
};
printQuantity();
const generateCartProduct = (img, title, price, id) => {
	return `
		
        <li class="cart__item product" data-id="${id}">
			<div class="cart__box">
				<img class="image-switch__img img" src ="${img}" alt="" width="130">
				<div class="btn__box">
				    <h2 class="cart-item__title">${title}</h2>
					<span class="cart-product__price-sum">${normalPrice(price)}</span>
					<span class="cart-product__price">${normalPrice(price)}</span>
					<div class="btn__boxs">
						<input class="cart-product__number" minlength="1" maxlength="3" value="1" type="number" name="value" >
					</div>
				</div>
				<button  type="button" class="corzina-btn__close">x</button>
			</div>
		</li>
	`;
};

const deleteProducts = (productParent) => {
	let id = productParent.dataset.id;
	
	document.querySelector(`.item-js[data-id="${id}"]`).querySelector('.corzina-btn').disabled = false;
	let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price-sum').textContent));
	minusFullPrice(currentPrice);
	printFullPrice();
	productParent.remove();
	FullPrice(currentPrice)
	printFull()
	printQuantity();
};

productsBtn.forEach(el => {
	el.closest('.product').setAttribute('data-id', randomId());

	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let parent = self.closest('.product');
		let id = parent.dataset.id;
		let img = parent.querySelector('.img').getAttribute('src');
		let title = parent.querySelector('.title').textContent;
		let priceString = priceWithoutSpaces(parent.querySelector('.menu__price').textContent);
		let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.menu__price').textContent));

		plusFullPrice(priceNumber);

		printFullPrice();
		printFull()

		cartProductsList.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
		printQuantity();
		

		// localStorageHost()

		self.disabled = true;

		
	});


    
});


cartProductsList.addEventListener('click', (e) => {
	const priceSum = document.querySelector(".fullprice");
    const printFullprice = document.querySelector(".print_fullprice"); 
	const cartBtnClose = document.querySelectorAll('.corzina-btn__close');
	for (const sdsd of cartBtnClose) {
		
		if (e.target === sdsd) {
			deleteProducts(e.target.closest('.product'))
			let currentPrice = e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price-sum").textContent
			console.log(currentPrice)
			
			FullPrice(currentPrice)
			printFull()
		}	
	}
	
	
		
	const input = document.querySelectorAll(".cart-product__number")
	for (const sdsd of input) {
		if (e.target === sdsd) {
			sdsd.addEventListener('input', (e) => {
				let values = e.target.value

				if (values == 1) {
					const curre = e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price").textContent
                    console.log(curre)
					e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price-sum").textContent = curre;
					console.log(e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price-sum").textContent)
					plusFull(curre, values)
					// let price = 0;
					const priceSum = document.querySelector(".fullprice");
					const printFullprice = document.querySelector(".print_fullprice");
					printFullprice.textContent = priceSum.textContent;
				}
				if (values >= 2) {
					let curre = e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price").textContent
					plusFull(curre, values)
					e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price-sum").textContent = priceSym
					
					let currentPrice = e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price-sum").textContent
					
					// let price = 0;
					FullPrice(currentPrice)
					printFull()
				} else {
					console.log('kjxnfvljknzslkvn')
				}

				
		    })
		}
	}
	


});



// const sawedLocal = sessionStorage.getItem('li')
// const parsLocal = JSON.parse(sawedLocal) 
// cartProductsList.innerHTML = parsLocal;

printQuantity();