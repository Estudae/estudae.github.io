<!--
var objOver;
function Rotulo_Over(rotulo)
{
 var i;
 if(NS4)
 {
   i = Verifica_Sobre(rotulo);
   if ((i!=null)  && (document.allLayers[i].sMouseOver!=null))
   {
       FindObj(rotulo).style.cursor = 'hand';
       eval(document.allLayers[i].sMouseOver);
       objOver = document.allLayers[i];
   }
 }
}
function Rotulo_Out()
{
   if(objOver!=null)
   {
      eval(objOver.sMouseOut);
      objOver=null;
   }
}
function Verifica_Sobre(nomeRotulo)
{
  var sentenca1, sentenca2, i, topo1, esquerda1, largura1, altura1, topo2, esquerda2, largura2, altura2;
  var rotulo, nomeObj;
  rotulo = FindObj(nomeRotulo);
  if(IE)
  {
     topo1 = rotulo.style.pixelTop;
     esquerda1 = rotulo.style.pixelLeft;
     altura1 = rotulo.style.pixelHeight;
     largura1 = rotulo.style.pixelWidth;
  }
  else
  {
     topo1 = rotulo.top;
     esquerda1 = rotulo.left;
     altura1 = rotulo.clip.height;
     largura1 = rotulo.clip.width;
  }
       //varre todos os elementos
       for (i=0; i<=document.allLayers.length-1; i++)
       {
          //se o elemento for soltar
          nomeObj = (NS)?document.allLayers[i].name : document.allLayers[i].id;
          if (nomeObj.indexOf('Anima')!=-1)
          {
              if(IE)
              {
                  topo2 = document.allLayers[i].style.pixelTop;
                  esquerda2 = document.allLayers[i].style.pixelLeft;
                  altura2 = document.allLayers[i].style.pixelHeight;
                  largura2 = document.allLayers[i].style.pixelWidth;
              }
              else
              {
                  topo2 = document.allLayers[i].top;
                  esquerda2 = document.allLayers[i].left;
                  altura2 = document.allLayers[i].clip.height;
                  largura2 = document.allLayers[i].clip.width;
              }
              xdentro = false;
              ydentro = false;
              for(n=esquerda1; n<=esquerda1+largura1; n++)
              {
                  if(n >= esquerda2 && n<=esquerda2+largura2)
                  {
                    xdentro = true;
                  }
              }
              for(n=topo1; n<=topo1+altura1; n++)
              {
                  if(n >= topo2 && n<=topo2+altura2)
                  {
                    ydentro = true;
                  }
              }
                  
              if ((xdentro) && (ydentro))
              {
                 return(i);
              }
          }
       }
}
// -->
