let li = document.querySelectorAll('ul li');
let btn =  document.querySelectorAll('.btn');
document.addEventListener('DOMContentLoaded', function(e) {
	
	btn.forEach(item => {
	item.parentNode.style.height = '52px';
	item.parentNode.visibility = 'visible';
	// item.parentNode.opacity = '1';
		item.onclick = function(){
			item.parentNode.style.height = '0';
			item.parentNode.style.visibility = 'hidden';
			// item.parentNode.style.opacity = '0';
			item.parentNode.style.padding = '0';
			item.parentNode.style.margin = '0';
			item.parentNode.style.border = 'none';
			item.parentNode.style.transition = '200ms ease-in-out';
		}
	})

})

$(document).ready(function(){
	let value = 'Please enter the E-Mail';
	$(':text').val(value);
	
	$(':text').focusin(function () {
		if($(this).val() == value){
			$(this).val('');
		}
	}).blur(function () {
		if($(this).val() == ''){
			$(this).val(value);	
		}
	})

})