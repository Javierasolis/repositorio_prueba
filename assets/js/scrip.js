
$(document).ready(function(){

$( "#enviar" ).tooltip({
    position: {
      my: "center bottom-20",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
          .addClass( "arrow" )
          .addClass( feedback.vertical )
          .addClass( feedback.horizontal )
          .appendTo( this );
      }
    }
  });

  $("#enviar").click(function(){
    alert("El correo fue enviado correctamente");
    })
})

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#inicio'
})
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#quienes'
})
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#destacados'
})
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#contacto'
})