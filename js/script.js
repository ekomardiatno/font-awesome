$(document).ready(function(){
  $('.icon-name').each(function(){
    var a = $(this), b = a.attr('class'), c = a.text(), d = b.replace('icon-name ','');
    a.before('<div class="col-xs-4 col-sm-3 col-md-2 wrap-icon">'+
             '<div class="col-icon">'+
             '<div class="icon"><i class="'+d+' fa-'+c+'"></i></div>'+
             '<div class="icon-name">'+c+'</div>'+
             '<input type="text" class="copy-icon" value="'+d+' fa-'+c+'"/>'+
             '</div>'+
             '</div>');
    a.remove();
  });
  
  $('.col-icon').on('click',function(){
    var a = $(this), b = a.find('.copy-icon');
    b.select();
    document.execCommand("copy");
  });
  
  $('#myInput').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('.col-cat').filter(function(){
      var a = $(this), b = a.find('.icon-name'), c = a.find('.wrap-icon');
      a.toggle(b.text().toLocaleLowerCase().indexOf(value) > -1);
      c.filter(function(){
        var a = $(this), b = a.find('.icon-name');
        a.toggle(b.text().toLocaleLowerCase().indexOf(value) > -1);
      })
    })
  });
  
  /*alert($('.icon-name').length)*/
})