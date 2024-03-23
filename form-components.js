Vue.component('block-form-one', {
	template: '<div class="second-block">' +
		'<div class="second-block__inner" id="add-zvonok">' +
			'<form>' +
				'<div class="inner__top-form">' +
					'<div class="block-conteiner">' +
						'<div class="conteiner-half">' +
							'<input type="hidden" name="type" value="Партнер">' +
                            '<input type="hidden" name="city" value="СПБ">' +
							'<input type="hidden" name="name" value="">' +
							'<img src="IMG/phone.png" alt="Исконка телефона" class="phone">' +
							'<input type="text" name="tel" value="" data-phone-pattern class="input" placeholder="+7(___)___-__-__">' +
						'</div>' +
						'<div class="conteiner-half-button modal-submit">Заявка на ремонт</div>' +
					'</div>' +
				'</div>' +
				'<div class="inner__box">' +
					'<div class="check"><input type="checkbox" checked class="checkbox"></div>' +
					'<div class="check-text">Нажимая кнопку «заявка на ремонт», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных</div>' +
				'</div>' +
			'</form>' +
		'</div>' +
	'</div>'
});

new Vue({ el: '#components-block-form-one' });

Vue.component('block-form-blue', {
	template: '<div class="block-blue">' +
		'<div class="blue-inner">' +
			'<div class="blue-top">' +
				'<div class="blue-top-text">' +
					'<span class="text-front">Позвоните нам и мы точно сможем вам помочь!</span>' +
					'<img src="IMG/yellow.png" alt="Полоса маркера" class="yellow">' +
				'</div>' +
			'</div>' +
			'<div class="blue-middle">' +
				'<div class="second-block">' +
						'<div class="second-block__inner" id="add-zvonok-2">' +
						'<form>' +
							'<div class="inner__top-form">' +
								'<div class="block-conteiner white-border">' +
									'<div class="conteiner-half">' +
										'<input type="hidden" name="type" value="Партнер">' +
                            			'<input type="hidden" name="city" value="СПБ">' +
										'<input type="hidden" name="name" value="">' +
										'<img src="IMG/phone.png" alt="Иконка телефона" class="phone">' +
										'<input type="text" name="tel" value="" data-phone-pattern class="input" placeholder="+7(___)___-__-__">' +
									'</div>' +
									'<div class="conteiner-half-button modal-submit">Заявка на ремонт</div>' +
								'</div>' +
							'</div>' +
							'<div class="inner__box">' +
								'<div class="check"><input type="checkbox" checked class="checkbox"></div>' +
								'<div class="check-text text-white">Нажимая кнопку «заявка на ремонт», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных</div>' +
							'</div>' +
						'</form>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="blue-bottom">' +
				'<div class="blue-bottom-text">' +
					'<div class="text-abs-top">А еще сделаем скидку на ремонт </div>' +
					'<div class="text-inner-blue">15%</div>' +
					'<div class="text-inner-blue-small">при заказе с сайта</div>' +
					'<img src="IMG/yellow.png" alt="Полоса маркера" class="yellow-small">' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>'

});

new Vue({ el: '#components-block-blue' });

Vue.component('block-form-blue-2', {
	template: '<div class="block-blue">' +
		'<div class="blue-inner">' +
			'<div class="blue-top">' +
				'<div class="blue-top-text text-bottom-block">' +
					'<span class="text-front text-bottom-style">Бесплатно заберём ваш ноутбук <br> курьером, проведём экспресс-ремонт за <br> 2 часа и привезём обратно</span>' +
					'<img src="IMG/yellow.png" alt="Полоса маркера" class="yellow-bottom">' +
					'<img src="IMG/yellow.png" alt="Полоса маркера" class="yellow-bottom-2">' +
					'<img src="IMG/yellow.png" alt="Полоса маркера" class="yellow-bottom-3">' +
				'</div>' +
			'</div>' +
			'<div class="blue-middle">' +
				'<div class="second-block">' +
						'<div class="second-block__inner" id="add-zvonok-3">' +
						'<form>' +
							'<div class="inner__top-form">' +
								'<div class="block-conteiner white-border">' +
									'<div class="conteiner-half">' +
										'<input type="hidden" name="type" value="Партнер">' +
										'<input type="hidden" name="city" value="СПБ">' +
										'<input type="hidden" name="name" value="">' +
										'<img src="IMG/phone.png" alt="Исконка телефона" class="phone">' +
										'<input type="text" name="tel" value="" data-phone-pattern class="input" placeholder="+7(___)___-__-__">' +
									'</div>' +
									'<div class="conteiner-half-button modal-submit">Заявка на ремонт</div>' +
								'</div>' +
							'</div>' +
							'<div class="inner__box">' +
								'<div class="check"><input type="checkbox" checked class="checkbox"></div>' +
								'<div class="check-text text-white">Нажимая кнопку «заявка на ремонт», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных</div>' +
							'</div>' +
						'</form>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>'
});

new Vue({ el: '#components-block-blue-2' });

Vue.component('block-win', {
	template: '<div class="window" id="add-zvonok-4">' +
		'<form>' +
			'<div class="headtext-wind">Заявка на ремонт</div>' +
			'<div class="smalltext-wind">Оставьте заявку, менеджер перезвонит в течении пары минут. <br> А ещё, дадим скидку на ремонт 15%.</div>' +
			'<input type="hidden" name="type" value="Партнер">' +
			'<input type="hidden" name="city" value="СПБ">' +
			'<div class="input-name">Ваше имя: <br> <input type="text" name="name" value="" placeholder="Ваше имя"></div>' +
			'<div class="input-tel">Контактный телефон: <br> <input class="input_form" type="text" name="tel" value="" data-phone-pattern placeholder="+7(___)___-__-__"></div>' +
			'<div class="input-quest">Ваш вопрос: <br> <textarea name="txt" id="" cols="120" rows="3" value="" placeholder="Ваш вопрос"></textarea></div>' +
			'<div class="input-butt"><input type="button" class="modal-submit" value="Отправить"></div>' +
			'<div class="closed" onclick="openClosedWindow(2)">✕</div>' +
		'</form>' +
	'</div>'
});

new Vue({ el: '#components-form-win' });

function openClosedWindow(num){
	let window = document.querySelectorAll('.window');
	let black = document.querySelectorAll('.black');

	if (num == 2){
		window[0].style.display = 'none';
		black[0].style.display = 'none';
	} else {
		window[0].style.display = 'block';
		black[0].style.display = 'block';
	}
}