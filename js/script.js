var nomeUtente = prompt("Come ti chiami?");

var sesso = prompt("Qual è il tuo sesso?");

var nome = document.getElementById("nome");

if (!isNaN(nomeUtente) || !isNaN(sesso)) {
  alert("Non sono ammessi valori numerici");

} else if (sesso != "maschio" && sesso != "femmina") {
  alert("Sono ammessi solo i valori maschio o femmina")

} else {
  nome.innerHTML = nomeUtente;

  if (sesso == "maschio") {
    nome.classList.add("text_blue");

  } else {
    nome.classList.add("text_pink");
  }
}
