window.onload = function () {
	document.getElementById("loader-wrapper").style = "display:none;";
};

// Handle Go top btn action
// Get the button
var goTopBtn = document.getElementById("goTopBtn");
window.onscroll = function () {
	scroll();
};

function scroll() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		goTopBtn.style.display = "block";

		var navbar = document.getElementById("");
	} else {
		goTopBtn.style.display = "none";
	}
}

function goTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// download btn

$("#btn-download-cv").click(function () {
	$("#btn-download").toggleClass("downloaded");
	downloadCV();
});

// download cv
function downloadCV() {
	const link = document.createElement("a");
	link.href = "../assets/pdf/MAHROS_ALQABASY_RESUME.pdf";
	link.download = "CV.Mahros AL-Qabasy";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function toggleTheme() {
	const body = document.body;

	body.setAttribute(
		"data-theme",
		body.getAttribute("data-theme") == "light" ? "dark" : "light",
	);
}
