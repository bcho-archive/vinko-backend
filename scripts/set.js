
window.onload = function () {

  $('#my-alert').bind('closed.bs.alert', function () {
   $(".alert").alert('close');
})
};
