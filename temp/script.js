$(document).ready(function(){
    $('.move-up').click(function(){
        if ($(this).prev()){

            $(this).parent().slideUp(function(){
                $(this).insertBefore($(this).prev()).slideDown();
            })
        }
          //  $(this).parent().insertBefore($(this).parent().prev()).slideUp();
    });
    $('.move-down').click(function(){
        if ($(this).next())
            $(this).parent().next().slideUp();
            $(this).parent().insertAfter($(this).parent().next()).slideDown();
    });
});