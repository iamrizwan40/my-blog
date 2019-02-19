
	let name = document.querySelector('#name');
	let email = document.querySelector('#email');
	let message = document.querySelector('#message');
	let post = document.querySelector('.post')	
	
	document.addEventListener('DOMContentLoaded', () => {
		post.onclick = (e) => {
			e.preventDefault();
			let posts = document.querySelector('#posts');
			let postContent = document.createElement('div');
			postContent.classList = 'posts';

			let postName = document.createTextNode(name.value);
			let postEmail = document.createTextNode('('+email.value+')');
			let postMessage = document.createTextNode(message.value);
			
			let span1 = document.createElement('span');
			let span2 = document.createElement('span');
			let p = document.createElement('p');
			let deleteBtn = document.createElement('button');
			let editBtn = document.createElement('button');
			let deleteBtnTxtNode =  document.createTextNode('Delete');
			let editBtnTxtNode =  document.createTextNode('Edit');
			deleteBtn.append(deleteBtnTxtNode);
			editBtn.append(editBtnTxtNode);

			span1.classList = 'name-span';
			span2.classList = 'email-span';
			p.classList = 'message-p';
			deleteBtn.classList = 'btn delete';
			editBtn.classList = 'btn edit';
			
			
			span1.append(postName);
			span2.append(postEmail);
			p.append(postMessage);
			
			postContent.append(span1);
			postContent.append(span2);
			postContent.append(p);
			postContent.append(editBtn);
			postContent.append(deleteBtn);
			
			posts.append(postContent);

			let deleteButton = document.querySelectorAll('.delete');
			let editButton = document.querySelectorAll('.edit');
			let pureArray = Array.from(deleteButton);
			let pureArray_1 = Array.from(editButton);

			deleteButton.forEach(btn => {
				btn.onclick = function () {
					btn.parentNode.style.display = 'none';
				}
			});
			
			let btnTrue = true;
			let save = document.createElement('button');
			let cancel = document.createElement('button');
			let saveTxtNode = document.createTextNode('Save');
			let cancelTxtNode =  document.createTextNode('Cancel');
			

			editButton.forEach((btn)=> {
				btn.onclick = function() {
					if (btn.innerHTML === 'Edit') {
						btn.innerHTML = 'Save';
						btn.nextSibling.innerHTML = 'Cancel';
						btn.previousSibling.innerHTML = '<textarea rows=\'7\' cols=\'50\'>'+btn.previousSibling.textContent+'</textarea>';
						btn.previousSibling.classList = 'textarea';
						console.log(postContent);
					}else if(btn.innerHTML === 'Save'){
						btn.innerHTML = 'Edit';
						btn.nextSibling.innerHTML = 'Delete';
						let textarea = document.querySelectorAll('.textarea');
						textarea.forEach(txtArea => {
							txtArea.onkeyup = function (event) {
								console.log('I am keyup')
								// btn.previousSibling.innerHTML = "<p>" + textarea.event.target.value + "</p>";
							}
						})
					}	
				}
			})
			name.value = '';
			email.value = '';
			message.value = '';
		}
	})


