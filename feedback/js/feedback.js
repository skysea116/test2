function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(typeof haystack[i] == 'object') {
            if(arrayCompare(haystack[i], needle)) return true;
        } else {
            if(haystack[i] == needle) return true;
        }
    }
    return false;
}
window.isset = function (v) {
    if (typeof(v) == 'object' && v == 'undefined') {
        return false;
    } else  if (arguments.length === 0) {
        return false;
    } else {
        var buff = arguments[0];
        for (var i = 0; i < arguments.length; i++){
            if (typeof(buff) === 'undefined' || buff === null) return false;
            buff = buff[arguments[i+1]];
        }
    }
    return true;
}

function myconf() {
    var cf = $.Deferred();
        // $.ajax({
        //     type: 'POST',
        //     url: 'feedback/',
        //     dataType: 'json',
        //     data: 'act=cfg',
        //     success: function(answer) {
        //         cf.resolve(answer.configs);
        //     }
        // });
    return cf;
}

var mcf = myconf();

mcf.done(function(conf) {

$(document).ready(function() {
(function() {
           var fb = $('.feedback');
           if(fb.length > 0) {
                fb.each(function(){
                    var form = $(this).closest('form'), name = form.attr('name');
                    if(isset(conf[name]) && isset(conf[name].cfg.antispamjs)) {
                      $(form).prepend('<input type="text" name="'+ conf[name].cfg.antispamjs +'" value="tesby" style="display:none;">');
                    }
                });
            }
  })();
});


/**
 * Отправка форм.
 *
 */

function feedback(vars) {
    var bt = $(vars.form).find('.feedback');
    var btc = bt.clone();
    var bvc = bt.val();
    var cfg = conf[vars.act].cfg;

    $.ajax({
        type: 'POST',
        url: 'feedback/',
        cache: false,
        dataType: 'json',
        data: 'act=' + vars.act + '&' + vars.data,
        beforeSend: function() {
            $(bt).prop("disabled", true);
            $(bt).addClass('loading');
        },
        success: function(answer) {

            $(bt).prop("disabled", false);
            $(bt).removeClass('loading');

            if(isset(answer.ok) && answer.ok == 1) {
                $(vars.form)[0].reset();
            }

            $(vars.form).find('input[type=text]:visible, textarea:visible, select:visible').addClass('good').removeClass('error');

            if(isset(answer.errors)) {
                $.each(answer.errors, function(k,val) {
                    var reg = /[a-z]/i;
                    if(reg.test(k)) {
                        var e = $(vars.form).find('[name='+ k +']');
                        if(e.length == 1) {
                            $(e).addClass('error').removeClass('good');
                        }
                    }
                });
            }

            if(isset(answer.infos)) {
                $.each(answer.infos, function(k,val) {
                    $('#response_message .modal-content').removeClass('error').html(val);
                    $.fancybox.close([{ "src": "#popup" }] );
                    $.fancybox.open([{ "src": "#response_message", "modal": true }] );
                });
            }

            $('#response_message .close_btn').click(function(){
                $.fancybox.close('#response_message');
                return false;
            });

            $('#response_message .ok_btn').click(function(){
                $.fancybox.close('#response_message');
                return false;
            });
        }
    });

}

    $(document).on('mouseenter mouseover', '.feedback', function(){
        var form = $(this).closest('form'), name = form.attr('name');
        if(isset(conf[name]) && isset(conf[name].cfg.antispamjs)) {
            $('input[name='+ conf[name].cfg.antispamjs +']').val('');
        }
    });


/**
 * Обработчик кнопки форм.
 * Кнопка должна быть внутри тегов <form> c классом .feedback
 * будет отправлено любое кол-во полей, кроме файлов
 *
 */

$(document).on('click', '.feedback', function(){
   var form = $(this).closest('form'), name = form.attr('name'), obj = {};
       obj.form = form;
       obj.act = name;
       obj.data = $(form).serialize();

      feedback(obj);

    return false;
});

}); // done
