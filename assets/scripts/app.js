(function() {
  'use strict';

  var product = {
    'p' : '7A8B53D6444444CCC49CBFB12A4842B9',
    'm' : 'B6A9B9AFEBEB524334421FB01B05CC64',
    'g' : 'E914CCE27676856CC4AC9F83C35D725A',
    'gg': '135D0A5E1818B05EE445AFB824DAEA0E',
    'xg': '4C95C729F9F94F8FF47CCF91AA0F60D3',
    'fp' : '5C2D0928FAFA081444AA1FA9CDBA5051',
    'fm' : '99416B96BCBC957554C26F8104DB20A1',
    'fg' : 'D72D5C169393A34EE4934F8B8E2610FA',
    'fgg': '0AA485662525032114E74FA0B01B2582'
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