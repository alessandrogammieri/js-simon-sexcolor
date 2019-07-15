/* Il software deve chiedere all’utente il suo nome e il sesso con due
prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere
azzurro o rosa a seconda del sesso inserito. */


// Dichiarazione delle variabili
var name, element, sesso, domanda;

// Chiediamo all'utente il suo nome
name = prompt("Inserisci qui il tuo nome");

// Assegnamo ad una variabile il nostro id ed element è un DOM Object Element
element = document.getElementById('mio_id');

// Creiamo una variabile di appoggio
sesso = false;

// Ciclo while per determinare il colore
while (sesso == false) {
  domanda = prompt("Specifica il tu sesso, scrivi Maschio o Femmina");
  if (domanda == "Maschio") {
    element.style.color = "blue";
    sesso = true;
  } else if (domanda == "Femmina") {
    element.style.color = "pink";
    sesso = true;
  } else {
    alert('Richiesta errata. Riprova!');
  }
}

// Stampiamo il nome dell'utente
document.getElementById('mio_id').innerHTML = "Ciao " + name;
