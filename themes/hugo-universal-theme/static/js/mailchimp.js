const mceChangeDisplay = () => {
	const mailChimp = document.getElementById("footer_mailChimp");
	const mceClose =  document.getElementById("mce-close"); 
	mailChimp.style.position = "static";
	mceClose.style.display = "none";
}