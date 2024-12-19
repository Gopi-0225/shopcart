
function applyDiscounts() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card) => {
        const priceElement = card.querySelector('.price-value');
        const discountText = card.querySelector('.discount').textContent;

        const originalPrice = parseFloat(priceElement.textContent);
        const discountPercent = parseFloat(discountText.match(/(\d+)%/)[1]);

        
        const discountedPrice = (originalPrice * (1 - discountPercent / 100)).toFixed(2);

        
        const discountedPriceElement = document.createElement('p');
        discountedPriceElement.textContent = `Discounted Price: ₹${discountedPrice}`;
        discountedPriceElement.style.color = 'green';
        discountedPriceElement.style.fontWeight = 'bold';

       
        if (!card.querySelector('.discounted-price')) {
            discountedPriceElement.classList.add('discounted-price');
            card.appendChild(discountedPriceElement);
        }
    });
}


