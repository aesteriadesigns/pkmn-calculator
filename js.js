function calculateDamage() {

	var lvl = document.getElementById("lvl").value;
	var pwr = document.getElementById("pwr").value;
	var att = document.getElementById("att").value;
	var def = document.getElementById("def").value;
	var d6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
	var mod = document.getElementById("mod").value;
	var result = document.getElementById("result");

	lvl = parseFloat(lvl);
	pwr = parseFloat(pwr);
	att = parseFloat(att);
	def = parseFloat(def);
	d6 = parseFloat(d6);
	mod = parseFloat(mod);

	var damage = (((((2 * lvl/5 + 2) * pwr * att / def) / 50) + d6) * mod);

	console.log(damage);

	if (isNaN(damage)) {
		document.getElementById("result").innerHTML = "Fill out all fields.";
		document.getElementById("result").style.display = "block";
		document.getElementById("result").style.background = "#b35b5b";
	} else {
		document.getElementById("result").innerHTML = "Damage Dealt: "  + Math.round(damage);
		document.getElementById("result").style.display = "block";
		document.getElementById("result").style.background = "#5bb383";
		document.getElementById("d6").value = d6;
	}

}

function resetForm() {
	var elements = document.getElementsByTagName("input");
	for (var ii = 0; ii < elements.length; ii++) {
		if (elements[ii].type == "number") {
			elements[ii].value = "";
			document.getElementById("result").innerHTML = " ";
			document.getElementById("result").style.display = "none";
		}
	}
}

function showModal() {
	var modal = document.getElementById("modal");
	var btn = document.getElementById("modalbtn");
	var close = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
	    modal.style.display = "block";
	}
	
	close.onclick = function() {
	    modal.style.display = "none";
	}

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
}
