Carosello Array di Oggetti
===
nome repo: js-array-objects-carousel

**Consegna:**
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata o come il vostro già realizzato.

**Milestone 0:**
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

**Milestone 1:**
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
****
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
**Milestone 2:
Aggiungere il **ciclo infinito** del carosello.** Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.

**BONUS 1:**
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

**BONUS 2:**
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

**BONUS 3:**
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


## SVOLGIMENTO
1. resetto il contenuto dell'html
2. reinserimento dell immagini, delle thumbnail e del prev/next
3. add class active ad immagini e thumbnail
4. creo le funzioni dei tasti next e prev per far andare l'utente avanti/indierto al click del bottone
 - ad ogni click si deve rimuovere active a myCarouselItem/myThumbnail
 - aumentare/diminuire il contatore
 - ad ogni click si deve aggiungere active a myCarouselItem/myThumbnail
