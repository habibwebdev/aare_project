const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();


setTimeout(function() {
    $('#message').fadeOut('slow');
}, 4000);

if (window.location.pathname == '/') {
  $("#message").addClass("absolute-112");
}
// if (window.location.href == window.location.origin + '/') {
//   $("#message").addClass("absolute-112");
// }
