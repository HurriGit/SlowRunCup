function afficherForm() {
	let form = document.getElementById("form")
    if(form.className === "hide"){
      form.className = "show"
    } else {
		form.className = "hide"
    }
}

function affichageToast() {
  let strMessage = document.getElementById("messageToast").value
  console.log(strMessage)
  M.toast({html: strMessage, classes: 'rounded'})
}