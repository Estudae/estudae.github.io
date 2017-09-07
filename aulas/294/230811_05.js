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
   acertos = acertos + acertosAtual; 
   if(acertosAtual!=25)
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
