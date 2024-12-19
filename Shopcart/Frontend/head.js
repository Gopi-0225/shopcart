
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');

    if (product === 'oneplus-bullets-z2') {
      document.getElementById('product-description').innerText = 'OnePlus Bullets Z2 Bluetooth Wireless in Earphones with Mics, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life, IP55 Dust and Water Resistant (Magico Black)';
      document.getElementById('product-image').src = 'images/headphone.jpg';
    }
  };