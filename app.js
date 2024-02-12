let tabLinks = document.getElementsByClassName("tab-links");

let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
	for (tabLink of tabLinks) {
		tabLink.classList.remove("active-link");
	}

	for (tabContent of tabContents) {
		tabContent.classList.remove("active-tab");
	}

	event.currentTarget.classList.add("active-link");

	document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
	sidemenu.style.right = "0";
}

function closemenu() {
	sidemenu.style.right = "-200px";
}

const scriptURL =
	"https://script.google.com/macros/s/AKfycbxXs0n2hkM_mnuXO5RBY_lWDsacDHeySItJg9yWYsC2lw1gdDLi64iRBbcbvYYlUn1j/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			msg.innerHTML = "Message sent successfully";
			setTimeout(function () {
				msg.innerHTML = "";
			}, 5000);
			form.reset();
		})
		.catch((error) => console.error("Error!", error.message));
});
