// (function(){
//   'use strict';
//   var gridToggleClass = function(e){
//     var gridSystem = document.querySelector('.gridSystem');
//     if(e.KeyCode === 27){
//       gridSystem.classList.toggle('isActive');
//     }
//   };
//   window.addEventListener('keyup', gridToggleClass);
// })(window);
(function() {
  'use strict';
  var gridToggleClass = function(e) {
    var gridSystem = document.querySelector('.gridSystem');
    if (e.keyCode === 27) {
      gridSystem.classList.toggle('isActive');
    }
  };
  window.addEventListener('keyup', gridToggleClass);
})(window);