(function() {
  'use strict';

  var product = {
    'p' : 'EC3E3DD1ADADA31BB4861F97AFBB4109',
    'm' : '46078E84B8B8784114B34FA95E5346BB',
    'g' : '774AF7148282180DD4694FA43AB222A5',
    'gg': 'A44427FD7C7CA4266480BFB69010D2DE',
    'xg': 'E4BE611D2828D91884009FBC56F3774C',
    'fp' : 'C3D1118DCDCD34A5541DAF8DC1284450',
    'fm' : '92E0FEFA63632DC994B8BFB41FA66117',
    'fg' : '0584471C0B0BA2CEE4B9CFB4F66C8B5F',
    'fgg': '3533C9C6ECECC4E004E3BFAF6FF7EEE2'
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
