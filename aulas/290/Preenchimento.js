<!--
function VerificaPreenchimento(valor, vetor, ignora, diferencia)
{
    var n, ok, todosnulos;
    if(ignora == 1)
    {
       valor = limpa(valor);
       for(n=0; n < vetor.length; n++)
          vetor[n] = limpa(vetor[n]);
    }
    if(diferencia == 0)
    {
       valor = valor.toUpperCase();
       for(n=0; n < vetor.length; n++)
          vetor[n] = vetor[n].toUpperCase();
    }
    ok = false;
    todosnulos  = true;
    for(n=0; n < vetor.length; n++) {
       if ((vetor[n] != ''))
          todosnulos = false;
       if ((vetor[n] != '') && (vetor[n] == valor))
          ok = true;
    }
    if (todosnulos == true)
       return('1');
    else
    {
      if (ok == true)
         return('1');
      else
         return('0');
    }
}
function limpa(texto)
{
var textolimpo = texto;
   while(textolimpo.indexOf(' ') != -1)
   {
      textolimpo = textolimpo.substring(0, textolimpo.indexOf(' ')) + textolimpo.substring(textolimpo.indexOf(' ')+1, textolimpo.length);
   }
   return(textolimpo)
}
// -->
