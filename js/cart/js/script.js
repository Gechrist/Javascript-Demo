var cart = [];

function addtocart(destid) {
	var parent = document.getElementById(destid).children;
	var img = parent[0].src;
	var destname = parent[1].children;
	var name = destname[0].innerText;
	var cosmopolitan = {};
		cosmopolitan.image = img;
		cosmopolitan.name = name;
			cart.push(cosmopolitan);
}

function dropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
	var i;
	var text = "";
	for (i=0; i<cart.length; i++) {
		text = text + "<img style='width:170px; height=220px' src='" + cart[i].image + "'>" + cart[i].name; + "<br>";
	};
	
	document.getElementById("myDropdown").innerHTML = text;
}


