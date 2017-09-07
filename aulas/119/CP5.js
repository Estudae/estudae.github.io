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
var considera_incorretas=0;
var tela_tentativas = 0;
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
   eval(FindObj('DPreenchimento1').codVerf);
   if(FindObj('DPreenchimento1').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   eval(FindObj('DPreenchimento5').codVerf);
   if(FindObj('DPreenchimento5').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento5').atual == -1) {
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
   eval(FindObj('DPreenchimento6').codVerf);
   if(FindObj('DPreenchimento6').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento6').atual == -1) {
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
   eval(FindObj('DPreenchimento7').codVerf);
   if(FindObj('DPreenchimento7').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento7').atual == -1) {
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
   eval(FindObj('DPreenchimento8').codVerf);
   if(FindObj('DPreenchimento8').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento8').atual == -1) {
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
   eval(FindObj('DPreenchimento9').codVerf);
   if(FindObj('DPreenchimento9').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento9').atual == -1) {
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
   eval(FindObj('DPreenchimento10').codVerf);
   if(FindObj('DPreenchimento10').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento10').atual == -1) {
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
   eval(FindObj('DPreenchimento11').codVerf);
   if(FindObj('DPreenchimento11').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento11').atual == -1) {
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
   eval(FindObj('DPreenchimento12').codVerf);
   if(FindObj('DPreenchimento12').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento12').atual == -1) {
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
   eval(FindObj('DPreenchimento13').codVerf);
   if(FindObj('DPreenchimento13').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento13').atual == -1) {
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
   eval(FindObj('DPreenchimento14').codVerf);
   if(FindObj('DPreenchimento14').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento14').atual == -1) {
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
   eval(FindObj('DPreenchimento15').codVerf);
   if(FindObj('DPreenchimento15').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento15').atual == -1) {
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
   eval(FindObj('DPreenchimento16').codVerf);
   if(FindObj('DPreenchimento16').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento16').atual == -1) {
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
   eval(FindObj('DPreenchimento17').codVerf);
   if(FindObj('DPreenchimento17').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento17').atual == -1) {
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
   eval(FindObj('DPreenchimento18').codVerf);
   if(FindObj('DPreenchimento18').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento18').atual == -1) {
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
   eval(FindObj('DPreenchimento19').codVerf);
   if(FindObj('DPreenchimento19').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento19').atual == -1) {
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
   eval(FindObj('DPreenchimento20').codVerf);
   if(FindObj('DPreenchimento20').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento20').atual == -1) {
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
   eval(FindObj('DPreenchimento21').codVerf);
   if(FindObj('DPreenchimento21').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento21').atual == -1) {
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
   eval(FindObj('DPreenchimento22').codVerf);
   if(FindObj('DPreenchimento22').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento22').atual == -1) {
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
   eval(FindObj('DPreenchimento23').codVerf);
   if(FindObj('DPreenchimento23').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento23').atual == -1) {
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
   eval(FindObj('DPreenchimento24').codVerf);
   if(FindObj('DPreenchimento24').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento24').atual == -1) {
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
   eval(FindObj('DPreenchimento25').codVerf);
   if(FindObj('DPreenchimento25').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento25').atual == -1) {
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
   eval(FindObj('DPreenchimento26').codVerf);
   if(FindObj('DPreenchimento26').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento26').atual == -1) {
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
   eval(FindObj('DPreenchimento27').codVerf);
   if(FindObj('DPreenchimento27').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento27').atual == -1) {
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
   eval(FindObj('DPreenchimento28').codVerf);
   if(FindObj('DPreenchimento28').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento28').atual == -1) {
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
   eval(FindObj('DPreenchimento29').codVerf);
   if(FindObj('DPreenchimento29').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento29').atual == -1) {
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
   eval(FindObj('DPreenchimento30').codVerf);
   if(FindObj('DPreenchimento30').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento30').atual == -1) {
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
   eval(FindObj('DPreenchimento31').codVerf);
   if(FindObj('DPreenchimento31').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento31').atual == -1) {
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
   eval(FindObj('DPreenchimento32').codVerf);
   if(FindObj('DPreenchimento32').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento32').atual == -1) {
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
   eval(FindObj('DPreenchimento33').codVerf);
   if(FindObj('DPreenchimento33').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento33').atual == -1) {
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
   eval(FindObj('DPreenchimento34').codVerf);
   if(FindObj('DPreenchimento34').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento34').atual == -1) {
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
   eval(FindObj('DPreenchimento35').codVerf);
   if(FindObj('DPreenchimento35').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento35').atual == -1) {
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
   eval(FindObj('DPreenchimento36').codVerf);
   if(FindObj('DPreenchimento36').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento36').atual == -1) {
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
   eval(FindObj('DPreenchimento37').codVerf);
   if(FindObj('DPreenchimento37').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento37').atual == -1) {
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
   eval(FindObj('DPreenchimento38').codVerf);
   if(FindObj('DPreenchimento38').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento38').atual == -1) {
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
   eval(FindObj('DPreenchimento39').codVerf);
   if(FindObj('DPreenchimento39').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento39').atual == -1) {
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
   eval(FindObj('DPreenchimento40').codVerf);
   if(FindObj('DPreenchimento40').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento40').atual == -1) {
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
   eval(FindObj('DPreenchimento41').codVerf);
   if(FindObj('DPreenchimento41').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento41').atual == -1) {
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
   eval(FindObj('DPreenchimento42').codVerf);
   if(FindObj('DPreenchimento42').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento42').atual == -1) {
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
   eval(FindObj('DPreenchimento43').codVerf);
   if(FindObj('DPreenchimento43').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento43').atual == -1) {
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
   eval(FindObj('DPreenchimento44').codVerf);
   if(FindObj('DPreenchimento44').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento44').atual == -1) {
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
   eval(FindObj('DPreenchimento45').codVerf);
   if(FindObj('DPreenchimento45').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento45').atual == -1) {
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
   eval(FindObj('DPreenchimento46').codVerf);
   if(FindObj('DPreenchimento46').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento46').atual == -1) {
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
   eval(FindObj('DPreenchimento47').codVerf);
   if(FindObj('DPreenchimento47').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento47').atual == -1) {
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
   eval(FindObj('DPreenchimento48').codVerf);
   if(FindObj('DPreenchimento48').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento48').atual == -1) {
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
   eval(FindObj('DPreenchimento49').codVerf);
   if(FindObj('DPreenchimento49').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento49').atual == -1) {
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
   eval(FindObj('DPreenchimento50').codVerf);
   if(FindObj('DPreenchimento50').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento50').atual == -1) {
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
   eval(FindObj('DPreenchimento51').codVerf);
   if(FindObj('DPreenchimento51').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento51').atual == -1) {
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
   eval(FindObj('DPreenchimento52').codVerf);
   if(FindObj('DPreenchimento52').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento52').atual == -1) {
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
   eval(FindObj('DPreenchimento53').codVerf);
   if(FindObj('DPreenchimento53').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento53').atual == -1) {
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
   eval(FindObj('DPreenchimento54').codVerf);
   if(FindObj('DPreenchimento54').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento54').atual == -1) {
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
   eval(FindObj('DPreenchimento55').codVerf);
   if(FindObj('DPreenchimento55').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento55').atual == -1) {
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
   eval(FindObj('DPreenchimento56').codVerf);
   if(FindObj('DPreenchimento56').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento56').atual == -1) {
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
   eval(FindObj('DPreenchimento57').codVerf);
   if(FindObj('DPreenchimento57').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento57').atual == -1) {
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
   eval(FindObj('DPreenchimento58').codVerf);
   if(FindObj('DPreenchimento58').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento58').atual == -1) {
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
   eval(FindObj('DPreenchimento59').codVerf);
   if(FindObj('DPreenchimento59').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento59').atual == -1) {
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
   eval(FindObj('DPreenchimento60').codVerf);
   if(FindObj('DPreenchimento60').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento60').atual == -1) {
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
   eval(FindObj('DPreenchimento61').codVerf);
   if(FindObj('DPreenchimento61').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
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
   if (FindObj('DPreenchimento61').atual == -1) {
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
   if(acertosAtual!=61)
   {
      if (considera_incorretas==1) {
      } else {
        if (somReveja!='') {
          if (tipoSomConv ==2) {
            tocaSomStreaming(somReveja);
          } else if (tipoSomConv ==1) {
            tocaSomObj2(somReveja);
          } else {
            toca_somNovo(somReveja, false);
          }
        }
        alert(mensagem);
      }
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
         if (considera_incorretas==1) {
           mensagem = null;
         }
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
          toca_somNovo(somParabens, false);
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
