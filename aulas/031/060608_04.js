<!--
var verifica = true;
var somParabens = '';
var somRevejaTeste = '';
var somRevejaGira = '';
var somRevejaPreenche = '';
var somFaltaSelecionar = '';
var somFaltaPreenche='';
var somFaltaLiga='';
var somFaltaGira='';
var somFaltaArrastar='';
var somFaltaDiss='';
var somAlterIncorreta='';
var somFimEx='';
var somReveja='';
var tipoSomConv = 0;
var mensagem_tela_parabens='';
var mensagem_tela_revejateste='';
var mensagem_tela_revejagira='';
var mensagem_tela_revejapree='';
var mensagem_tela_faltaselecionar='';
var mensagem_tela_faltaliga='';
var mensagem_tela_faltapree='';
var mensagem_tela_faltagira='';
var mensagem_tela_faltaarrastar='';
var mensagem_tela_faltadis='';
var mensagem_tela_alterincorreta='';
var mensagem_tela_fimex='';
function VerificaExerc()
{
var acertosAtual=0;
var mensagem=''; preenche_errado=0;
var nota=0;
recoloqueArrastar = false;
var liga_errado=0;
if((carregado==true) || (IE4))
{
 if(verifica==true)
 {
   if(DLiga21.atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaLiga!='') {
         somReveja=somFaltaLiga;
       }
       if (mensagem_tela_faltaliga!='') {
         mensagem=mensagem_tela_faltaliga;
       } else {
         mensagem='Falta completar o exercício de ligar os pontos!';
       }
   }
   if (DLiga21.atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(DLiga22.atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaLiga!='') {
         somReveja=somFaltaLiga;
       }
       if (mensagem_tela_faltaliga!='') {
         mensagem=mensagem_tela_faltaliga;
       } else {
         mensagem='Falta completar o exercício de ligar os pontos!';
       }
   }
   if (DLiga22.atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(DLiga23.atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaLiga!='') {
         somReveja=somFaltaLiga;
       }
       if (mensagem_tela_faltaliga!='') {
         mensagem=mensagem_tela_faltaliga;
       } else {
         mensagem='Falta completar o exercício de ligar os pontos!';
       }
   }
   if (DLiga23.atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(DLiga24.atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaLiga!='') {
         somReveja=somFaltaLiga;
       }
       if (mensagem_tela_faltaliga!='') {
         mensagem=mensagem_tela_faltaliga;
       } else {
         mensagem='Falta completar o exercício de ligar os pontos!';
       }
   }
   if (DLiga24.atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(DLiga25.atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaLiga!='') {
         somReveja=somFaltaLiga;
       }
       if (mensagem_tela_faltaliga!='') {
         mensagem=mensagem_tela_faltaliga;
       } else {
         mensagem='Falta completar o exercício de ligar os pontos!';
       }
   }
   if (DLiga25.atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(DLiga26.atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaLiga!='') {
         somReveja=somFaltaLiga;
       }
       if (mensagem_tela_faltaliga!='') {
         mensagem=mensagem_tela_faltaliga;
       } else {
         mensagem='Falta completar o exercício de ligar os pontos!';
       }
   }
   if (DLiga26.atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(DLiga27.atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaLiga!='') {
         somReveja=somFaltaLiga;
       }
       if (mensagem_tela_faltaliga!='') {
         mensagem=mensagem_tela_faltaliga;
       } else {
         mensagem='Falta completar o exercício de ligar os pontos!';
       }
   }
   if (DLiga27.atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(DLiga28.atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaLiga!='') {
         somReveja=somFaltaLiga;
       }
       if (mensagem_tela_faltaliga!='') {
         mensagem=mensagem_tela_faltaliga;
       } else {
         mensagem='Falta completar o exercício de ligar os pontos!';
       }
   }
   if (DLiga28.atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(DLiga29.atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaLiga!='') {
         somReveja=somFaltaLiga;
       }
       if (mensagem_tela_faltaliga!='') {
         mensagem=mensagem_tela_faltaliga;
       } else {
         mensagem='Falta completar o exercício de ligar os pontos!';
       }
   }
   if (DLiga29.atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   acertos = acertos + acertosAtual; 
   if(acertosAtual!=9)
   {
      if (somReveja!='') {
        if (tipoSomConv ==2) {
          tocaSomStreaming(somReveja);
        } else if (tipoSomConv ==1) {
          tocaSomObj2(somReveja);
        } else {
          toca_somNovo(somReveja);
        }
      }
      alert(mensagem);
      if (maxTentativas != 0)
      {
         tentativas = tentativas + 1;
         if (tentativas < maxTentativas)
         {
            alert('Tentativas Restantes: ' + (maxTentativas - tentativas));
            return(mensagem);
         }
         else
         {
            alert('Tentativas Esgotadas!');
         }
      }
      else
      {
         return(mensagem);
      }
   }
   else
   {
      if (somParabens!='') {
        if (tipoSomConv ==2) {
          tocaSomStreaming(somParabens);
        } else if (tipoSomConv ==1) {
          tocaSomObj2(somParabens);
        } else {
          toca_somNovo(somParabens);
        }
      }
      if (mensagem_tela_parabens!='') {
        alert(mensagem_tela_parabens);
      } else {
        alert('Parabéns');
      }
   }
 }
}
else
{
   alert('Aguarde até que a página seja carregada completamente.');
   return('Aguarde até que a página seja carregada completamente.');
}
}
// -->
