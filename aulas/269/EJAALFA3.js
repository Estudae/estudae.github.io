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
   if(FindObj('DSoltar1').atual == 1)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar!';
       }
   }
   if (FindObj('DSoltar1').atual == -1) {
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
   if(FindObj('DSoltar2').atual == 1)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar!';
       }
   }
   if (FindObj('DSoltar2').atual == -1) {
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
   if(FindObj('DSoltar3').atual == 1)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar!';
       }
   }
   if (FindObj('DSoltar3').atual == -1) {
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
   if(FindObj('DSoltar4').atual == 1)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar!';
       }
   }
   if (FindObj('DSoltar4').atual == -1) {
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
eval(FindObj('DPreenchimento1').codVerf);
   if(FindObj('DPreenchimento1').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaPreenche!='') {
         somReveja=somFaltaPreenche;
       }
       preenche_errado = preenche_errado + 1;
       if (mensagem_tela_faltapree!='') {
         mensagem=mensagem_tela_faltapree;
       } else {
         mensagem='Reveja Preenchimentos: ' + preenche_errado;
       }
   }
   if (FindObj('DPreenchimento1').atual == -1) {
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
eval(FindObj('DPreenchimento2').codVerf);
   if(FindObj('DPreenchimento2').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaPreenche!='') {
         somReveja=somFaltaPreenche;
       }
       preenche_errado = preenche_errado + 1;
       if (mensagem_tela_faltapree!='') {
         mensagem=mensagem_tela_faltapree;
       } else {
         mensagem='Reveja Preenchimentos: ' + preenche_errado;
       }
   }
   if (FindObj('DPreenchimento2').atual == -1) {
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
eval(FindObj('DPreenchimento3').codVerf);
   if(FindObj('DPreenchimento3').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaPreenche!='') {
         somReveja=somFaltaPreenche;
       }
       preenche_errado = preenche_errado + 1;
       if (mensagem_tela_faltapree!='') {
         mensagem=mensagem_tela_faltapree;
       } else {
         mensagem='Reveja Preenchimentos: ' + preenche_errado;
       }
   }
   if (FindObj('DPreenchimento3').atual == -1) {
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
eval(FindObj('DPreenchimento4').codVerf);
   if(FindObj('DPreenchimento4').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaPreenche!='') {
         somReveja=somFaltaPreenche;
       }
       preenche_errado = preenche_errado + 1;
       if (mensagem_tela_faltapree!='') {
         mensagem=mensagem_tela_faltapree;
       } else {
         mensagem='Reveja Preenchimentos: ' + preenche_errado;
       }
   }
   if (FindObj('DPreenchimento4').atual == -1) {
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
   if(acertosAtual!=8)
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
