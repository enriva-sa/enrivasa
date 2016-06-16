angular.module('mainApp.directive',[])
.directive('subMenuLauncher',function(){
  $('.menu li a').not('#products-launcher').on('click',function(){
    $('#menu-products').addClass('hidden');
    $('#menu-products').prev().removeClass('selected');
  });
  $('#products-launcher').on('click',function(){
    if($('#menu-products').hasClass('hidden')){
      $('#menu-products').removeClass('hidden');
      $('#menu-products').prev().addClass('selected');
    }else{
      $('#menu-products').addClass('hidden');
      $('#menu-products').prev().removeClass('selected');
    }
  });
})
// PREVENT a href FROM REDIRECTION
.directive('a',function(){
  return {
    restrict:'E',
    link: function(scope,elem,attrs){
      if((attrs.href === '#myCarousel1')||(attrs.href==='#noAction')){
        elem.on('click',function(e){
          e.preventDefault();
        });
      }
    }
  }
})
.directive('productSmall', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      this.openProductDetailsCover = function(event) {
        var $parentElement = element.parent();
        var markupṔroductIdTarget = $parentElement.data('markupid');
        var $productDetailsCover = $parentElement.find('.productDetails#productDetail' + markupṔroductIdTarget);
        $productDetailsCover.css('display', 'block');
        var $body = $('body');
        $body.css('overflow', 'hidden');
      };

      element.on('click', this.openProductDetailsCover.bind(this));
    },
  };
});
