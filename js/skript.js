$(document).ready(function() {
 $('.header__burger').click(function(event){
   $('.header__burger,.header__manu').toggleClass('active');
   $('body').toggleClass('lock')
 })
})