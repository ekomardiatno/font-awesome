$(document).ready(function(){
  $('.icon-name').each(function(){
    var a = $(this), b = a.attr('class'), c = a.text(), d = b.replace('icon-name ','');
    a.before('<div class="col-xs-6 col-sm-3 col-md-2 col-icon">'+
             '<div class="icon"><i class="'+d+' fa-'+c+'"></i></div>'+
             '<div class="'+b+'">'+d+' fa-'+c+'</div>'+
             '<input type="text" class="copy-icon" value="'+d+' fa-'+c+'"/>'+
             '</div>');
    a.remove();
  })
  $('.col-icon').on('click',function(){
    var a = $(this), b = a.find('.copy-icon');
    b.select();
    document.execCommand("copy");
  })
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".col-icon").filter(function() {
      $(this).toggle($(this).find('.icon-name').text().toLowerCase().indexOf(value) > -1)
    });
  });
  /*alert($('.icon-name').length)*/
})