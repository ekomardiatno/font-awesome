$(document).ready(function(){
  $('.icon-name').each(function(){
    var a = $(this), b = a.attr('class'), c = a.text(), d = b.replace('icon-name ','');
    a.before('<div class="col-xs-6 col-sm-3 col-md-2 col-icon">'+
             '<div class="icon"><i class="'+d+' fa-'+c+'"></i></div>'+
             '<div class="'+b+'">'+d+' fa-'+c+'</div>'+
             '<input type="hidden" class="copy-icon" value="'+d+' fa'+c+'"/>'+
             '</div>');
    a.remove();
  })
  
  alert($('.icon-name').length)
})