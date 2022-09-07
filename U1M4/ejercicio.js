let distancia = prompt ("ingrese distancia a recorrer en metros")


if (distancia <= 1000) {document.write("le sugerimos viajar a pie") ; }
else if ( distancia > 1000 && distancia <= 10000) { document.write ("le sugerimos viajar en bicicleta")}
if(distancia > 10000 && distancia <= 30000)
{document.write ("le sugerimos viajar en colectivo")} 
else if (distancia > 30000 && distancia <= 100000) {document.write ("le sugerimos viajar en auto")}
if (distancia > 100000) {document.write ("le sugerimos viajar en avion")}
