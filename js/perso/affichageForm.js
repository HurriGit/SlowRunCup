function afficherForm() {
	let form = document.getElementById("form")
    if(form.className === "hide"){
      form.className = "show"
    } else {
		form.className = "hide"
    }
}