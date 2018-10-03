<?php
// Die Nachricht
$nachricht = "Hallo Christian,\r\n\r\ndas ist die erste Mail,  die von unserer Weltverbesserer Seite verschickt wird:)\r\n
Drücke doch mal unter http://www.weltverbesserer.cofinpro.de/pokemon den Knopf \"Email an Himsl\" ;)\r\n.
Wir können die Funktion super verwenden um dir ganz viele Spammails zu schicken:D\r\n
Viele Grüße,\r\n
Andreas";

// Falls eine Zeile der Nachricht mehr als 70 Zeichen enthälten könnte,
// sollte wordwrap() benutzt werden
$nachricht = wordwrap($nachricht, 70, "\r\n");

// Verschicken
mail('Christian.Himsl@cofinpro.de', 'Weltverbesserermail', $nachricht);
?>