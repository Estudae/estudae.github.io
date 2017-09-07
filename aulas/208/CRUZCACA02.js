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
   if(Giras_Efeito1_atual == Giras_Efeito1_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito1_atual == -1) {
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
   if(Giras_Efeito2_atual == Giras_Efeito2_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito2_atual == -1) {
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
   if(Giras_Efeito3_atual == Giras_Efeito3_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito3_atual == -1) {
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
   if(Giras_Efeito4_atual == Giras_Efeito4_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito4_atual == -1) {
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
   if(Giras_Efeito5_atual == Giras_Efeito5_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito5_atual == -1) {
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
   if(Giras_Efeito6_atual == Giras_Efeito6_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito6_atual == -1) {
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
   if(Giras_Efeito7_atual == Giras_Efeito7_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito7_atual == -1) {
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
   if(Giras_Efeito8_atual == Giras_Efeito8_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito8_atual == -1) {
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
   if(Giras_Efeito9_atual == Giras_Efeito9_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito9_atual == -1) {
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
   if(Giras_Efeito10_atual == Giras_Efeito10_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito10_atual == -1) {
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
   if(Giras_Efeito11_atual == Giras_Efeito11_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito11_atual == -1) {
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
   if(Giras_Efeito12_atual == Giras_Efeito12_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito12_atual == -1) {
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
   if(Giras_Efeito13_atual == Giras_Efeito13_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito13_atual == -1) {
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
   if(Giras_Efeito14_atual == Giras_Efeito14_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito14_atual == -1) {
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
   if(Giras_Efeito15_atual == Giras_Efeito15_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito15_atual == -1) {
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
   if(Giras_Efeito16_atual == Giras_Efeito16_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito16_atual == -1) {
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
   if(Giras_Efeito17_atual == Giras_Efeito17_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito17_atual == -1) {
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
   if(Giras_Efeito18_atual == Giras_Efeito18_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito18_atual == -1) {
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
   if(Giras_Efeito19_atual == Giras_Efeito19_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito19_atual == -1) {
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
   if(Giras_Efeito20_atual == Giras_Efeito20_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito20_atual == -1) {
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
   if(Giras_Efeito21_atual == Giras_Efeito21_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito21_atual == -1) {
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
   if(Giras_Efeito22_atual == Giras_Efeito22_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito22_atual == -1) {
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
   if(Giras_Efeito23_atual == Giras_Efeito23_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito23_atual == -1) {
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
   if(Giras_Efeito24_atual == Giras_Efeito24_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito24_atual == -1) {
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
   if(Giras_Efeito25_atual == Giras_Efeito25_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito25_atual == -1) {
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
   if(Giras_Efeito26_atual == Giras_Efeito26_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito26_atual == -1) {
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
   if(Giras_Efeito27_atual == Giras_Efeito27_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito27_atual == -1) {
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
   if(Giras_Efeito28_atual == Giras_Efeito28_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito28_atual == -1) {
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
   if(Giras_Efeito29_atual == Giras_Efeito29_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito29_atual == -1) {
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
   if(Giras_Efeito30_atual == Giras_Efeito30_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito30_atual == -1) {
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
   if(Giras_Efeito31_atual == Giras_Efeito31_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito31_atual == -1) {
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
   if(Giras_Efeito32_atual == Giras_Efeito32_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito32_atual == -1) {
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
   if(Giras_Efeito33_atual == Giras_Efeito33_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito33_atual == -1) {
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
   if(Giras_Efeito34_atual == Giras_Efeito34_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito34_atual == -1) {
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
   if(Giras_Efeito35_atual == Giras_Efeito35_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito35_atual == -1) {
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
   if(Giras_Efeito36_atual == Giras_Efeito36_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito36_atual == -1) {
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
   if(Giras_Efeito37_atual == Giras_Efeito37_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito37_atual == -1) {
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
   if(Giras_Efeito38_atual == Giras_Efeito38_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito38_atual == -1) {
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
   if(Giras_Efeito39_atual == Giras_Efeito39_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito39_atual == -1) {
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
   if(Giras_Efeito40_atual == Giras_Efeito40_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito40_atual == -1) {
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
   if(Giras_Efeito41_atual == Giras_Efeito41_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito41_atual == -1) {
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
   if(Giras_Efeito42_atual == Giras_Efeito42_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito42_atual == -1) {
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
   if(Giras_Efeito43_atual == Giras_Efeito43_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito43_atual == -1) {
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
   if(Giras_Efeito44_atual == Giras_Efeito44_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito44_atual == -1) {
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
   if(Giras_Efeito45_atual == Giras_Efeito45_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito45_atual == -1) {
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
   if(Giras_Efeito46_atual == Giras_Efeito46_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito46_atual == -1) {
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
   if(Giras_Efeito47_atual == Giras_Efeito47_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito47_atual == -1) {
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
   if(Giras_Efeito48_atual == Giras_Efeito48_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito48_atual == -1) {
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
   if(Giras_Efeito49_atual == Giras_Efeito49_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito49_atual == -1) {
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
   if(Giras_Efeito50_atual == Giras_Efeito50_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito50_atual == -1) {
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
   if(Giras_Efeito51_atual == Giras_Efeito51_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito51_atual == -1) {
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
   if(Giras_Efeito52_atual == Giras_Efeito52_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito52_atual == -1) {
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
   if(Giras_Efeito53_atual == Giras_Efeito53_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito53_atual == -1) {
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
   if(Giras_Efeito54_atual == Giras_Efeito54_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito54_atual == -1) {
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
   if(Giras_Efeito55_atual == Giras_Efeito55_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito55_atual == -1) {
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
   if(Giras_Efeito56_atual == Giras_Efeito56_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito56_atual == -1) {
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
   if(Giras_Efeito57_atual == Giras_Efeito57_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito57_atual == -1) {
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
   if(Giras_Efeito58_atual == Giras_Efeito58_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito58_atual == -1) {
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
   if(Giras_Efeito59_atual == Giras_Efeito59_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito59_atual == -1) {
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
   if(Giras_Efeito60_atual == Giras_Efeito60_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito60_atual == -1) {
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
   if(Giras_Efeito61_atual == Giras_Efeito61_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito61_atual == -1) {
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
   if(Giras_Efeito62_atual == Giras_Efeito62_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito62_atual == -1) {
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
   if(Giras_Efeito63_atual == Giras_Efeito63_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito63_atual == -1) {
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
   if(Giras_Efeito64_atual == Giras_Efeito64_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito64_atual == -1) {
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
   if(Giras_Efeito65_atual == Giras_Efeito65_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito65_atual == -1) {
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
   if(Giras_Efeito66_atual == Giras_Efeito66_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito66_atual == -1) {
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
   if(Giras_Efeito67_atual == Giras_Efeito67_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito67_atual == -1) {
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
   if(Giras_Efeito68_atual == Giras_Efeito68_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito68_atual == -1) {
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
   if(Giras_Efeito69_atual == Giras_Efeito69_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito69_atual == -1) {
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
   if(Giras_Efeito70_atual == Giras_Efeito70_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito70_atual == -1) {
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
   if(Giras_Efeito71_atual == Giras_Efeito71_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito71_atual == -1) {
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
   if(Giras_Efeito72_atual == Giras_Efeito72_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito72_atual == -1) {
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
   if(Giras_Efeito73_atual == Giras_Efeito73_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito73_atual == -1) {
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
   if(Giras_Efeito74_atual == Giras_Efeito74_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito74_atual == -1) {
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
   if(Giras_Efeito75_atual == Giras_Efeito75_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito75_atual == -1) {
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
   if(Giras_Efeito76_atual == Giras_Efeito76_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito76_atual == -1) {
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
   if(Giras_Efeito77_atual == Giras_Efeito77_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito77_atual == -1) {
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
   if(Giras_Efeito78_atual == Giras_Efeito78_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito78_atual == -1) {
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
   if(Giras_Efeito79_atual == Giras_Efeito79_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito79_atual == -1) {
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
   if(Giras_Efeito80_atual == Giras_Efeito80_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito80_atual == -1) {
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
   if(Giras_Efeito81_atual == Giras_Efeito81_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito81_atual == -1) {
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
   if(Giras_Efeito82_atual == Giras_Efeito82_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito82_atual == -1) {
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
   if(Giras_Efeito83_atual == Giras_Efeito83_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito83_atual == -1) {
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
   if(Giras_Efeito84_atual == Giras_Efeito84_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito84_atual == -1) {
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
   if(Giras_Efeito85_atual == Giras_Efeito85_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito85_atual == -1) {
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
   if(Giras_Efeito86_atual == Giras_Efeito86_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito86_atual == -1) {
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
   if(Giras_Efeito87_atual == Giras_Efeito87_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito87_atual == -1) {
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
   if(Giras_Efeito88_atual == Giras_Efeito88_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito88_atual == -1) {
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
   if(Giras_Efeito89_atual == Giras_Efeito89_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito89_atual == -1) {
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
   if(Giras_Efeito90_atual == Giras_Efeito90_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito90_atual == -1) {
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
   if(Giras_Efeito91_atual == Giras_Efeito91_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito91_atual == -1) {
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
   if(Giras_Efeito92_atual == Giras_Efeito92_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito92_atual == -1) {
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
   if(Giras_Efeito93_atual == Giras_Efeito93_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito93_atual == -1) {
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
   if(Giras_Efeito94_atual == Giras_Efeito94_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito94_atual == -1) {
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
   if(Giras_Efeito95_atual == Giras_Efeito95_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito95_atual == -1) {
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
   if(Giras_Efeito96_atual == Giras_Efeito96_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito96_atual == -1) {
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
   if(Giras_Efeito97_atual == Giras_Efeito97_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito97_atual == -1) {
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
   if(Giras_Efeito98_atual == Giras_Efeito98_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito98_atual == -1) {
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
   if(Giras_Efeito99_atual == Giras_Efeito99_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito99_atual == -1) {
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
   if(Giras_Efeito100_atual == Giras_Efeito100_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito100_atual == -1) {
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
   if(Giras_Efeito101_atual == Giras_Efeito101_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito101_atual == -1) {
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
   if(Giras_Efeito102_atual == Giras_Efeito102_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito102_atual == -1) {
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
   if(Giras_Efeito103_atual == Giras_Efeito103_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito103_atual == -1) {
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
   if(Giras_Efeito104_atual == Giras_Efeito104_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito104_atual == -1) {
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
   if(Giras_Efeito105_atual == Giras_Efeito105_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito105_atual == -1) {
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
   if(Giras_Efeito106_atual == Giras_Efeito106_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito106_atual == -1) {
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
   if(Giras_Efeito107_atual == Giras_Efeito107_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito107_atual == -1) {
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
   if(Giras_Efeito108_atual == Giras_Efeito108_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito108_atual == -1) {
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
   if(Giras_Efeito109_atual == Giras_Efeito109_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito109_atual == -1) {
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
   if(Giras_Efeito110_atual == Giras_Efeito110_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito110_atual == -1) {
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
   if(Giras_Efeito111_atual == Giras_Efeito111_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito111_atual == -1) {
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
   if(Giras_Efeito112_atual == Giras_Efeito112_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito112_atual == -1) {
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
   if(Giras_Efeito113_atual == Giras_Efeito113_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito113_atual == -1) {
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
   if(Giras_Efeito114_atual == Giras_Efeito114_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito114_atual == -1) {
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
   if(Giras_Efeito115_atual == Giras_Efeito115_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito115_atual == -1) {
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
   if(Giras_Efeito116_atual == Giras_Efeito116_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito116_atual == -1) {
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
   if(Giras_Efeito117_atual == Giras_Efeito117_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito117_atual == -1) {
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
   if(Giras_Efeito118_atual == Giras_Efeito118_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito118_atual == -1) {
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
   if(Giras_Efeito119_atual == Giras_Efeito119_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito119_atual == -1) {
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
   if(Giras_Efeito120_atual == Giras_Efeito120_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito120_atual == -1) {
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
   if(Giras_Efeito121_atual == Giras_Efeito121_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito121_atual == -1) {
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
   if(Giras_Efeito122_atual == Giras_Efeito122_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito122_atual == -1) {
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
   if(Giras_Efeito123_atual == Giras_Efeito123_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito123_atual == -1) {
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
   if(Giras_Efeito124_atual == Giras_Efeito124_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito124_atual == -1) {
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
   if(Giras_Efeito125_atual == Giras_Efeito125_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito125_atual == -1) {
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
   if(Giras_Efeito126_atual == Giras_Efeito126_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito126_atual == -1) {
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
   if(Giras_Efeito127_atual == Giras_Efeito127_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito127_atual == -1) {
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
   if(Giras_Efeito128_atual == Giras_Efeito128_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito128_atual == -1) {
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
   if(Giras_Efeito129_atual == Giras_Efeito129_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito129_atual == -1) {
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
   if(Giras_Efeito130_atual == Giras_Efeito130_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito130_atual == -1) {
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
   if(Giras_Efeito131_atual == Giras_Efeito131_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito131_atual == -1) {
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
   if(Giras_Efeito132_atual == Giras_Efeito132_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito132_atual == -1) {
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
   if(Giras_Efeito133_atual == Giras_Efeito133_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito133_atual == -1) {
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
   if(Giras_Efeito134_atual == Giras_Efeito134_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito134_atual == -1) {
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
   if(Giras_Efeito135_atual == Giras_Efeito135_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito135_atual == -1) {
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
   if(Giras_Efeito136_atual == Giras_Efeito136_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito136_atual == -1) {
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
   if(Giras_Efeito137_atual == Giras_Efeito137_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito137_atual == -1) {
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
   if(Giras_Efeito138_atual == Giras_Efeito138_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito138_atual == -1) {
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
   if(Giras_Efeito139_atual == Giras_Efeito139_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito139_atual == -1) {
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
   if(Giras_Efeito140_atual == Giras_Efeito140_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito140_atual == -1) {
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
   if(Giras_Efeito141_atual == Giras_Efeito141_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito141_atual == -1) {
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
   if(Giras_Efeito142_atual == Giras_Efeito142_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito142_atual == -1) {
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
   if(Giras_Efeito143_atual == Giras_Efeito143_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito143_atual == -1) {
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
   if(Giras_Efeito144_atual == Giras_Efeito144_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito144_atual == -1) {
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
   if(Giras_Efeito145_atual == Giras_Efeito145_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito145_atual == -1) {
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
   if(Giras_Efeito146_atual == Giras_Efeito146_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito146_atual == -1) {
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
   if(Giras_Efeito147_atual == Giras_Efeito147_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito147_atual == -1) {
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
   if(Giras_Efeito148_atual == Giras_Efeito148_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito148_atual == -1) {
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
   if(Giras_Efeito149_atual == Giras_Efeito149_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito149_atual == -1) {
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
   if(Giras_Efeito150_atual == Giras_Efeito150_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito150_atual == -1) {
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
   if(Giras_Efeito151_atual == Giras_Efeito151_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito151_atual == -1) {
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
   if(Giras_Efeito152_atual == Giras_Efeito152_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito152_atual == -1) {
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
   if(Giras_Efeito153_atual == Giras_Efeito153_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito153_atual == -1) {
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
   if(Giras_Efeito154_atual == Giras_Efeito154_correta)
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       erros = erros + 1;
       if (somFaltaGira!='') {
         somReveja=somFaltaGira;
       }
       if (mensagem_tela_faltagira!='') {
         mensagem=mensagem_tela_faltagira;
       } else {
         mensagem='Falta selecionar alternativa correta!';
       }
   }
   if (Giras_Efeito154_atual == -1) {
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
   if(acertosAtual!=154)
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
