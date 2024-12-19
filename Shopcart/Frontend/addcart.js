const qtyValue = document.querySelector('.qty-value');
const qtyBtns = document.querySelectorAll('.qty-btn');
let qty = 1;

qtyBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.textContent === '+' && qty < 10) {
      qty++;
    } else if (e.target.textContent === '-' && qty > 1) {
      qty--;
    }
    qtyValue.textContent = qty;
  });
});


document.querySelector('.apply-btn').addEventListener('click', () => {
  const coupon = document.getElementById('coupon').value;
  if (coupon === 'DISCOUNT10') {
    alert('Coupon Applied! 10% Discount Added.');
  } else {
    alert('Invalid Coupon Code.');
  }
});

function changeImage(imageSrc) {
  const featuredImage = document.getElementById('featured-image');
  featuredImage.src = imageSrc;

 
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumb => {
      thumb.classList.remove('active');
      if (thumb.src.includes(imageSrc)) {
          thumb.classList.add('active');
      }
  });
}
  
  function changeImage(imageName) {
   
    console.log("Changing image to:", imageName);
  }

  
  function removeItem() {
    alert("Item removed");
    
  }
