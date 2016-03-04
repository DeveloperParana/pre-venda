(function() {
  'use strict';

  var product = {
    'p' : '7A8B53D6444444CCC49CBFB12A4842B9',
    'm' : 'B6A9B9AFEBEB524334421FB01B05CC64',
    'g' : 'E914CCE27676856CC4AC9F83C35D725A',
    'gg': '135D0A5E1818B05EE445AFB824DAEA0E',
    'xg': '4C95C729F9F94F8FF47CCF91AA0F60D3',
    'fp' : 'FAB91C9D696908ADD4419F82D5C24C7A',
    'fm' : 'CD22C730EFEF32E884D8EF9A4706BA27',
    'fg' : '9A5FB4A38383781CC4745F9AF4EC53EA',
    'fgg': '5F5843DD20203A52240B9F9CDDEFF3AF'
  };

  function comprar() {
    var selectedSize = false;
    var radios = document.getElementsByName('productSize');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        selectedSize = radios[i].value;
        break;
      }
    }

    if (selectedSize === false) {
      alert('Por favor selecione o tamanho da camiseta!');
      return false;
    }

    document.querySelector('#productCode').value = product[selectedSize];
    PagSeguroLightbox(document.querySelector('#venda'));
  }

  var tshirtButton = document.querySelector('.tshirt-button');
  tshirtButton.addEventListener('click', comprar);
})();