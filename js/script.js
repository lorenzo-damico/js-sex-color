var nomeUtente = prompt("Come ti chiami?");

var sesso = prompt("Inserisci il tuo sesso (M o F)?");

var nome = document.getElementById("nome");

if (!isNaN(nomeUtente) || !isNaN(sesso)) {
  alert("Non sono ammessi valori numerici");

} else if (sesso != "M" && sesso != "F") {
  alert("Sono ammessi solo i valori M o F")

} else {
  nome.innerHTML = nomeUtente;

  if (sesso == "M") {
    nome.classList.add("text_blue");

  } else {
    nome.classList.add("text_pink");
  }
}
