function calculateDamage() {

	var lvl = document.getElementById("lvl").value;
	var pwr = document.getElementById("pwr").value;
	var attdef = document.getElementById("attdef").value;
	var d6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
	var mod = document.getElementById("mod").value;
	var result = document.getElementById("result");

	lvl = parseFloat(lvl);
	pwr = parseFloat(pwr);
	attdef = parseFloat(attdef);
	d6 = parseFloat(d6);
	mod = parseFloat(mod);

	var damage = (((((2 * lvl/5 + 2) * pwr * attdef) / 50) + d6) * mod);

	if (isNaN(damage)) {
		document.getElementById("result").innerHTML = "Error occured. Try again";
		document.getElementById("result").style.display = "block";
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
