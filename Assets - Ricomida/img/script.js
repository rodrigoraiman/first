$(function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

   
});


    $("a").click(function(event){
        if (this.hash !== "") { 
          event.preventDefault();
    
          var gato = this.hash;
    
          $("html, body").animate({
            scrollTop: $(gato).offset().top
          }, 800, function(){
            window.location.hash = gato;
     });
        
    
    
    $("send").click(function(){
     alert("El correo fue enviado correctamente");
});


$('#myPopover').on('hidden.bs.popover', function () {
    // do something...
  });