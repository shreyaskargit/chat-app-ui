var body = document.querySelector('body');
var contact = document.querySelector('#contacts');
var profile = document.querySelector('#profile');
var contact_menu = document.querySelector('#chats .header span .fa-bars');
var profile_menu = document.querySelector('#chats .header span .fa-user');

profile_menu.addEventListener('click', function(e){
	profile.style.display = "block";
});
contact_menu.addEventListener('click', function(e){
	contact.style.display = "block";
});
// if(x>=765){
// 	contact.style.display = "block";
// }
// if(x>=990){
// 	profile.style.display = "block";
// }
// else{
// 	profile.style.display = "none";
// }
if (matchMedia) {
const mq1 = window.matchMedia("(min-width: 990px)");
const mq2 = window.matchMedia("(min-width: 765px)");
mq2.addListener(WidthChange2);
mq1.addListener(WidthChange1);
WidthChange1(mq1);
WidthChange2(mq2);
}
function WidthChange1(mq) {
if (mq.matches) {
	profile.style.display = "block";
} else {
	profile.style.display = "none";
}
}
function WidthChange2(mq) {
if (mq.matches) {
	contact.style.display = "block";
} else {
	contact.style.display = "none";
}
}

window.onclick = function(e){
	w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if(e.target != profile && e.target!=profile_menu){
		var w = window, d = document, r = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || r.clientWidth || g.clientWidth;
		if(x<990)
		profile.style.display = "none";
	}
	if(e.target != contact && e.target!=contact_menu){
		var w = window, d = document, r = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || r.clientWidth || g.clientWidth;
		if(x<765)
		contact.style.display = "none";
	}
}