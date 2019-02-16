let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let post = document.querySelector('.post');

// select ul
let ul = document.querySelector('ul');
// create li
let li = document.createElement('li');

// create name span and text node
// let nameSpan = document.createElement('span');
// let nameSpanTxtNode = document.createTextNode(name.value);

// create email span and textnode
// let emailSpan = document.createElement('span');
// let emailSpanTxtNode = document.createTextNode(email.value);

// create a message pargraph and text node
// let p = document.createElement('p');
// let pTextNode = document.createTextNode(message.value);

// append name span text node into name span
// nameSpan.append(nameSpanTxtNode);

// append email span text node into email span
// emailSpan.append(emailSpanTxtNode);

// append p text node into name p
// p.append(pTextNode);

// create li text nodes
// let liTxtNode_1 = document.createTextNode(name.value);
// let liTxtNode_2 = document.createTextNode(email.value);
// let liTxtNode_3 = document.createTextNode(message.value);

// append li text nodes

post.addEventListener('click', postRender);
function postRender(e) {
	e.preventDefault();
	
	// create li text nodes
	let liTxtNode_1 = document.createTextNode(name.value);
	let liTxtNode_2 = document.createTextNode(email.value);
	let liTxtNode_3 = document.createTextNode(message.value);
	
	li.append(liTxtNode_1);
	li.append(liTxtNode_2);
	li.append(liTxtNode_3);
	ul.append(li);
	
	name.value = '';
	email.value = '';
	message.value = '';
}