<!--
function OptVest_Click(imagem, indice, indice_obj, figura, figura_atual)
{
   var img;
   if (figura_atual > 0 ) {
     img = 'OpTesteVest_' + indice + '_' + figura_atual;
     if(NS4) GetObj(img).src=figura[1];
     else FindObj(img).src=figura[1];
   }
    if(NS4) GetObj(imagem).src=figura[2];
    else FindObj(imagem).src=figura[2];
   return(indice_obj);
}
// -->
