import test from 'app';

new Vue({
    el: '.buttons',
    data: {
        button_1: 'О нас',
        button_2: 'Товары и услуги',
        button_3: 'Цены'
    }
})

new Vue({
    el: '.buttons_bottom',
    data: {
        button_1: 'Сделать заказ',
        button_2: 'Отзывы'
    }
})

let app = new Vue({
    el: '.text',
    data: {
        text_one: 'Тут блок ДИВ',
        text_two: 'Второй текст',
        change: ''
    },
    methods: {
        changeFunc: function() {
            this.change == this.text_one ? this.change = this.text_two : this.change = this.text_one;
        },
        start: function () {
            this.change = this.text_one;
        }
    }
})

app.start();