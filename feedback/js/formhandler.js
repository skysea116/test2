$(document).ready(function (){
    $('body').find('form').on('submit', function (){
        var formData = [];
        var tmpForm = {};
        var $form = $(this);
        $(this).find('input, textarea').each(function (n,e){
            if($(e).attr('type') !== 'submit'){
                tmpForm = {};
                tmpForm.name = $(e).attr('name');
                tmpForm.value = $(e).val();
                formData.push(tmpForm);
            }
        });
        $.ajax({
            type: 'POST',
            url: '/feedback/form.php',
            dataType: 'text',
            data: formData,
            success: function (res){
                //console.log(res);
                $form.html('Спасибо за обращение, наш менеджер свяжется с Вами в ближайшее время')
            }
        })
        return false;
    })
})
