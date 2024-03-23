document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});

$(document).ready(function() {

	$('#add-zvonok .modal-submit').click(function() {
		
		$("#add-zvonok .form_ok").remove();
		$("#add-zvonok .form_err").remove();

		var name = '';
		var names = '';
		var city = $('#add-zvonok input[name = city]').val();
		var type = $('#add-zvonok input[name = type]').val();
		
		
		if ($('#add-zvonok textarea[name = txt]').val() != undefined && $('#add-zvonok textarea[name = txt]').val() !="") {
			var txt = $('#add-zvonok textarea[name = txt]').val();
		} else {
			var txt = "";
		}
		var tel = $('#add-zvonok input[name = tel]').val();



		if (tel != "") {
			$.ajax({
				type: "POST",
				data: "names="+names+"&type="+type+"&name="+name+"&tel="+tel+"&txt="+txt+"&city="+city,
				url: 'https://pochinimsve.ru/laptop/form_to.php',
				success: function(data) {
					if (data == 1) {
                        document.querySelectorAll('.input')[0].value = '';
						setTimeout(()=>{window.open('thanks.html', '_self', false);}, 400);
						dataLayer.push({'event': 'form_send'});
					}
				},
			});
        }

		return false;
	});
});