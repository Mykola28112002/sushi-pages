
const productsBtn = document.querySelectorAll('.corzina-btn');
const cartProductsList = document.querySelector('.list__js');
const cart = document.querySelector('.cart');
const cartQuantity = document.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.fullprice');
const cartBox = document.querySelector('.box__js');
let cartNumber = document.querySelector('.cart-product__number');



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
const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)} zl`;
};
const printQuantity = () => {
	let productsListLength = document.querySelector('.list__js').children.length;
	cartQuantity.textContent = productsListLength;
	productsListLength === 0 ? cartQuantity.classList.add('un-active-qvontiti') : cartQuantity.classList.remove('un-active-qvontiti');

};

printQuantity();
const generateCartProduct = (img, title, price, id) => {
	return `
		
        <li class="cart__item product" data-id="${id}">
			<div class="cart__box">
				<img class="image-switch__img img" src ="${img}" alt="" width="130">
				<div class="btn__box">
				    <h2 class="cart-item__title">${title}</h2>
					<span class="cart-product__price">${normalPrice(price)}</span>
					<div class="btn__boxs">
					    <button class="btn_plus">+</button>
						<span class="cart-product__number">1</span>
                    	<button class="btn_min">-</button>
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
	let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
	minusFullPrice(currentPrice);
	printFullPrice();
	productParent.remove();
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

		cartProductsList.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
		printQuantity();

		
		self.disabled = true;

		
	});


    
});
let numbers = 0;
const plusFulle = () => {
	return numbers += 1  ;
};

const minusFull = () => {
	return numbers -= 1 ;
};

let praces = 0;
let pra = 0;
const praceplusFulle = (praces,numbers ) => {
	return pra = numbers * Number(praces)  ;
};

const praceminusFull = (praces,numbers) => {
	return pra = (numbers -1 )* Number(praces) ;
};
cartProductsList.addEventListener('click', (e) => {
	const cartBtnClose = document.querySelectorAll('.corzina-btn__close');
	const cartBtnPlus = document.querySelectorAll('.btn_plus');
	const cartBtnMin = document.querySelectorAll('.btn_min');
	for (const sdsd of cartBtnClose) {
		if (e.target === sdsd) {
			deleteProducts(e.target.closest('.product'))
		}
	}
	
	for (const sdsd of cartBtnPlus) {
		
		if (e.target === sdsd) {
			numbers = Number(e.target.parentNode.querySelector(".cart-product__number").textContent)
			plusFulle()
			e.target.parentNode.querySelector(".cart-product__number").textContent = numbers
            let praces = e.target.parentNode.parentNode.querySelector(".cart-product__price").textContent
			praceplusFulle(praces,numbers)
			e.target.parentNode.parentNode.querySelector(".cart-product__price").textContent = pra
           
		}
	
	}
	for (const sdsd of cartBtnMin) {
		
		if (e.target === sdsd) {
			minusFull()
			if (numbers < 1) {
				numbers = 1
			} else {
				e.target.parentNode.querySelector(".cart-product__number").textContent = numbers
			}
			let praces = e.target.parentNode.parentNode.querySelector(".cart-product__price").textContent
			praceminusFull(praces,numbers)
			e.target.parentNode.parentNode.querySelector(".cart-product__price").textContent = pra
            
		}
	}
});