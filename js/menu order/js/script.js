var cart = [];

function addtocart(destid) {
	var parent = document.getElementById(destid).children;
	var img = parent[0].src;
	var destname = parent[1].innerText;
	var cosmopolitan = {};
		cosmopolitan.image = img;
		cosmopolitan.name = destname;
			cart.push(cosmopolitan);
}

function dropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
	document.getElementById("myDropdown").innerHTML = "<img style='width:170px; height=220px' src='" + cart[0].image + "'>";
}


