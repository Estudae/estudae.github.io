<!--
function Cria_Vetor(n)
{
   var i;
   this.length = n;
   for (i=1; i<=n; i++)
   {
      this[i] = ''
   }
}
function Imagem_Click(imagem, figura, figura_atual)
{
   if (figura_atual == figura.length)
      {
          figura_atual=1;
      }
   else
       {
          figura_atual++;
       }
    imagem.src=figura[figura_atual];
    return(figura_atual);
}
// -->
