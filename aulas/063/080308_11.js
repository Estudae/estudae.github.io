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
   if(FindObj('DArrastarImgN11').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN11').orfa==0 || FindObj('DArrastarImgN11').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN11').atual == -1) {
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
   if(FindObj('DArrastarImgN21').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN21').orfa==0 || FindObj('DArrastarImgN21').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN21').atual == -1) {
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
   if(FindObj('DArrastarImgN31').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN31').orfa==0 || FindObj('DArrastarImgN31').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN31').atual == -1) {
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
   if(FindObj('DArrastarImgN41').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN41').orfa==0 || FindObj('DArrastarImgN41').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN41').atual == -1) {
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
   if(FindObj('DArrastarImgN51').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN51').orfa==0 || FindObj('DArrastarImgN51').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN51').atual == -1) {
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
   if(FindObj('DArrastarImgN12').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN12').orfa==0 || FindObj('DArrastarImgN12').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN12').atual == -1) {
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
   if(FindObj('DArrastarImgN22').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN22').orfa==0 || FindObj('DArrastarImgN22').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN22').atual == -1) {
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
   if(FindObj('DArrastarImgN32').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN32').orfa==0 || FindObj('DArrastarImgN32').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN32').atual == -1) {
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
   if(FindObj('DArrastarImgN13').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN13').orfa==0 || FindObj('DArrastarImgN13').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN13').atual == -1) {
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
   if(FindObj('DArrastarImgN23').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN23').orfa==0 || FindObj('DArrastarImgN23').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN23').atual == -1) {
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
   if(FindObj('DArrastarImgN33').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN33').orfa==0 || FindObj('DArrastarImgN33').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN33').atual == -1) {
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
   if(FindObj('DArrastarImgN43').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN43').orfa==0 || FindObj('DArrastarImgN43').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN43').atual == -1) {
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
   if(FindObj('DArrastarImgN53').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
     if (FindObj('DArrastarImgN53').orfa==0 || FindObj('DArrastarImgN53').erro==1) {
       erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
     }
   }
   if (FindObj('DArrastarImgN53').atual == -1) {
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
   if(acertosAtual!=13)
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
