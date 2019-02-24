//as students walk in teacher enters name
//button on click shows all student names
$(document).ready(function(){
  var names = [];
//event listener button on click sends input value to an array
$('#enterName').on('click', function(e){
  e.preventDefault();
  var name = $('input').val();
  names.push(name);
  $('input').val("");
}); //end of enterName button function
//event listener for second button for each array item to append into ul
$('#listStudents').on('click', function(){
  $('ul').children().remove();
  names.forEach(function(el){
    $('ul').append('<li>'+el+'</li>');
    });
  });//end of show student button function

  //erase array and ul list for reset button
});//end of document ready
