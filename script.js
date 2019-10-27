$(document).ready(function(){
    $('.move-up').click(function(){
        if ($(this).prev()){

            /*
                for(i=0; i<2; i++) {
                    $(this).parent().insertBefore($(this).parent().prev()).slideDown();
                }
            */

           for(i=0; i<2; i++) {
                $(this).parent().insertBefore($(this).parent().prev()).slideDown();
            }
        }
    });
    $('.move-down').click(function(){
        for(i=0; i<2; i++) {
            $(this).parent().insertAfter($(this).parent().next()).slideDown();
        }
    });
});