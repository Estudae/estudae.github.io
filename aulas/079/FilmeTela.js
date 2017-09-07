<!--
var oldValue = 0;
var newValue = 0;
var FilmeAtivo=null;
function DocumentoOver()
{
   var state;
   if (FilmeAtivo != null)
   {
      if (NS4) {
         state = FilmeAtivo.GetPlayState();}
      else if (IE) {
         state = FilmeAtivo.PlayState;}
      if (state==2) FilmeAtivo.Pause();
      FilmeAtivo = null;
   }
}
document.onmouseover = DocumentoOver;
function Filme_Click(filme)
{
  var i;
  i = Verifica_Link(filme);
  if ((i!=null) && (document.allLayers[i].sMouseClick!=null))
  {
     eval(document.allLayers[i].sMouseClick);
  }
}
function FuncoesFilme(funcao)
{
    var filme;
    var state;
    if (NS4) {
       filme = GetObj('Filme_Tela1');
       state = filme.GetPlayState();}
    else if (IE) {
       filme = FindObj('Filme_Tela1');
       state = filme.PlayState;}
    if (funcao == 311) {
       if (state!=2) filme.Play();}
    else if (funcao == 312) {
       filme.Pause();}
    else if (funcao == 313) {
       filme.Stop();
       filme.Play();
       filme.Pause();}
    else if (funcao == 314) {
       if (state!=2) filme.Play();}
    else if (funcao == 315) {
       if (state==2) {filme.Pause();}
       filme.FastReverse();}
    else if (funcao == 316) {
       if (state==2) {filme.Pause();}
       filme.FastForward();}
}
function Verifica_Link(nomeFilme)
{
  var sentenca1, sentenca2, i, topo1, esquerda1, largura1, altura1, topo2, esquerda2, largura2, altura2;
  var filme, nomeObj;
  filme = FindObj(nomeFilme);
  if(IE)
  {
     topo1 = filme.style.pixelTop;
     esquerda1 = filme.style.pixelLeft;
     altura1 = filme.style.pixelHeight;
     largura1 = filme.style.pixelWidth;
  }
  else
  {
     topo1 = filme.top;
     esquerda1 = filme.left;
     altura1 = filme.clip.height;
     largura1 = filme.clip.width;
  }
       //varre todos os elementos
       for (i=0; i<=document.allLayers.length-1; i++)
       {
          //se o elemento for soltar
          nomeObj = (NS)?document.allLayers[i].name : document.allLayers[i].id;
          if (nomeObj.indexOf('DRotuloTrans')!=-1)
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
