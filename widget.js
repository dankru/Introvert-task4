widgetTestGoogleIt = function () {
    var widget = this;
    this.code = null;

    this.yourVar = {};
    this.yourFunc = function () {
    };

    // вызывается один раз при инициализации виджета, в этой функции мы вешаем события на $(document)
    this.bind_actions = function () {
        //пример $(document).on('click', 'selector', function(){});
    };

    // вызывается каждый раз при переходе на страницу
    this.render = function () {

        // add to phone
        $('.js-linked-with-actions').filter(function () {
            return $(this).attr('data-pei-code') === 'phone'
        }).on('click', function () {
            let value = $(this).children('.js-control-phone').children('input').attr('value');
            if ($(this).find('.tips').find('.tips__inner').find('.custom-item').length === 0) {
                $(this).find('.tips').find('.tips__inner').append("<div class='tips-item custom-item'>Нагуглить</div>").on('click', function () {
                    window.open('http://letmegooglethat.com/?q=' + value);
                    window.open('https://yandex.ru/search/?text=' + value);
                });
            }
        })

        // add to email
        $('.js-linked-with-actions').filter(function () {
            return $(this).attr('data-pei-code') === 'email'
        }).on('click', function () {
            let value = $(this).children('.control-wrapper').children('input').attr('value');
            console.log(value);
            if ($(this).find('.tips').find('.tips__inner').find('.custom-item').length === 0) {
                $(this).find('.tips').find('.tips__inner').append("<div class='tips-item custom-item'>Нагуглить</div>").on('click', function () {
                    window.open('http://letmegooglethat.com/?q=' + value);
                    window.open('https://yandex.ru/search/?text=' + value);
                });
            }
        })
    };

    // вызывается один раз при инициализации виджета, в этой функции мы загружаем нужные данные, стили и.т.п
    this.init = function () {

    };

    // метод загрузчик, не изменяется
    this.bootstrap = function (code) {
        widget.code = code;
        // если frontend_status не задан, то считаем что виджет выключен
        // var status = yadroFunctions.getSettings(code).frontend_status;
        var status = 1;

        if (status) {
            widget.init();
            widget.render();
            widget.bind_actions();
            $(document).on('widgets:load', function () {
                widget.render();
            });
        }
    }
};
// создание экземпляра виджета и регистрация в системных переменных Yadra
// widget-test-google-it - ИД и widgetTestGoogleIt - уникальные названия виджета
yadroWidget.widgets['widget-test-google-it'] = new widgetTestGoogleIt();
yadroWidget.widgets['widget-test-google-it'].bootstrap('widget-test-google-it');