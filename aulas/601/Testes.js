<!--
function GiraTeste(Indice, teste_atual)
{
   var prox_letra;
   var botao_atual;
   var texto_atual;
   var botao_prox;
   var texto_prox;
   if (teste_atual=='A')
   {
      prox_letra='B';
   }
   else if (teste_atual=='B')
   {
      prox_letra='C';
   }
   else if (teste_atual=='C')
   {
      prox_letra='D';
   }
   else if (teste_atual=='D')
   {
      prox_letra='E';
   }
   else if (teste_atual=='E')
   {
      prox_letra='A';
   }
   dd.elements['BotaoTeste' + Indice + teste_atual].hide();
   dd.elements['TextoTeste' + Indice + teste_atual].hide();
   dd.elements['BotaoTeste' + Indice + prox_letra].show();
   dd.elements['TextoTeste' + Indice + prox_letra].show();
   teste_atual = prox_letra;
   return(teste_atual);
}
// -->
