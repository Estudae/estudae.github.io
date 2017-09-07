<!--
var b_Linha=false, Linha, Liga, liga_anterior=false;
function Liga1MouseOver(sL1, nLin, sL2)
{
    var x1, y1, xPri, yPri, Liga2;
    var l1, l2, linha, lPri, linhaPri;
    l1=FindObj(sL1);
    l2=FindObj(sL2);
    if(b_Linha)
    {
      Liga2=l1;
      if (liga_anterior==true) {
        x1 = -13 + parseInt(l1.style.left) + (parseInt(l1.style.width) / 2);
        y1 = -13 + parseInt(l1.style.top) + (parseInt(l1.style.height) / 2);
        jgLin[nLin].clear();
        jgLin[nLin].paint();
        jgLin[nLin].drawLine(jgLin[nLin].xIni,jgLin[nLin].yIni,x1,y1);
        jgLin[nLin].paint();
        if (l1.sem_liga2=='1')
        {
          b_Linha = false;
          l2.atual='1';
          document.onmousemove = null;
          if (l1.liga_primeiro=='1')
          {
            lPri=FindObj('DLiga11');
            xPri = -13 + parseInt(lPri.style.left) + (parseInt(lPri.style.width) / 2);
            yPri = -13 + parseInt(lPri.style.top) + (parseInt(lPri.style.height) / 2);
          }
        }
        else
        {
          Linha = jgLin[nLin];
          document.onmousemove = MoveLinha;
          Liga=l1;
          b_Linha = true;
          x1 = parseInt(Liga.style.left) + (parseInt(Liga.style.width) / 2);
          y1 = parseInt(Liga.style.top) + (parseInt(Liga.style.height) / 2);
          jgLin[nLin].xIni = x1;
          jgLin[nLin].yIni = y1;
          liga_anterior = false;
        }
      }
      else
      {
        if((Liga != Liga2) && (Liga2.cruza == Liga.cruza) && l1.errado==0)
        {
          x1 = -13 + parseInt(Liga2.style.left) + (parseInt(Liga2.style.width) / 2);
          y1 = -13 + parseInt(Liga2.style.top) + (parseInt(Liga2.style.height) / 2);
          jgLin[nLin].clear();
          jgLin[nLin].paint();
          jgLin[nLin].drawLine(jgLin[nLin].xIni,jgLin[nLin].yIni,x1,y1);
          jgLin[nLin].paint();
          Linha.feito=1;
          b_Linha = false;
          l2.atual = '1';
          l1.atual = '1';
          document.onmousemove = null;
          if (somswf==2) {
            tocaSomObj2(l2.som);
          } else if (somswf==0) {
            toca_somNovo(l2.som, false);
          } else if (l2.som!='') {
            tocaSomStreaming(l2.som);
          }
        }
        else if(Liga != Liga2)
        {
          if (Liga.tipoobj!=Liga2.tipoobj && l1.liga_errado==1 && Liga.errado==0 && l1.errado==0) {
            Linha.feito=1;
            b_Linha = false;
            l1.atual = '1';
            l1.errado = 1;
            Liga.errado = 1;
          }
          erros = erros + 1;
        }
      }
    }
    else if(l1.inicia==1 && l2.atual=='0' && (b_Linha==false || liga_anterior==true) && l1.errado==0)
    {
       if (jgLin[nLin].feito==0) {
         Linha = jgLin[nLin];
       } else {
         for (i=0; i<jgLin.length; i++) {
           if (jgLin[i].feito==0) {
             Linha = jgLin[i];
             break;
           }
         }
       }
       document.onmousemove = MoveLinha;
       Liga=l1;
       b_Linha = true;
       x1 = parseInt(Liga.style.left) + (parseInt(Liga.style.width) / 2);
       y1 = parseInt(Liga.style.top) + (parseInt(Liga.style.height) / 2);
       Linha.xIni = x1;
       Linha.yIni = y1;
       liga_anterior = false;
    }
}
function Liga2MouseOver(sL1, nLin, sL2, sLinha2)
{
  var x1, y1, Liga2;
  var l1, l2, linha;
  l1=FindObj(sL1);
  l2=FindObj(sL2);
  if(b_Linha)
  {
     Liga2=l1;
     if((Liga != Liga2) && (Liga2.cruza == Liga.cruza) && l1.errado==0)
     {
        x1 = -13 + parseInt(Liga2.style.left) + (parseInt(Liga2.style.width) / 2);
        y1 = -13 + parseInt(Liga2.style.top) + (parseInt(Liga2.style.height) / 2);
        jgLin[nLin].clear();
        jgLin[nLin].paint();
        jgLin[nLin].drawLine(jgLin[nLin].xIni,jgLin[nLin].yIni,x1,y1);
        jgLin[nLin].paint();
        Linha.feito = 1;
        b_Linha = false;
        l1.atual = '1';
        l2.atual = '1';
        document.onmousemove = null;
          if (somswf==2) {
            tocaSomObj2(l2.som);
          } else if (somswf==0) {
            toca_somNovo(l2.som, false);
          } else if (l2.som!='') {
            tocaSomStreaming(l2.som);
          }
      }
      else if(Liga != Liga2)
      {
        if (Liga.tipoobj!=Liga2.tipoobj && Liga.liga_errado==1 && Liga2.errado==0) {
          Linha.feito=1;
          b_Linha = false;
          l2.atual = '1';
          l1.errado = 1;
          Liga.errado = 1;
        }
        erros = erros + 1;
      }
    }
    else if(l1.inicia==1 && l1.atual=='0' && b_Linha==false && l1.errado==0)
    {
      if (jgLin[nLin].feito==0) {
        Linha = jgLin[nLin];
      } else {
        for (i=0; i<jgLin.length; i++) {
          if (jgLin[i].feito==0) {
            Linha = jgLin[i];
            break;
          }
        }
      }
      document.onmousemove = MoveLinha;
      Liga=l1;
      b_Linha = true;
      x1 = parseInt(Liga.style.left) + (parseInt(Liga.style.width) / 2);
      y1 = parseInt(Liga.style.top) + (parseInt(Liga.style.height) / 2);
      Linha.xIni = x1;
      Linha.yIni = y1;
    }
  }
function MoveLinha(e)
{
var x2, y2;
    if(b_Linha)
    {
       var xAtu=0, yAtu=0;
       try {
         var xAtu = (window.Event) ? e.pageX : event.clientX;
         var yAtu = (window.Event) ? e.pageY : event.clientY;
       } catch(err) {
         xAtu = event.clientX;
         yAtu = event.clientY;
       }
       y2 = -13 + yAtu + document.body.scrollTop;
       x2 = -13 + xAtu + document.body.scrollLeft;
       Linha.clear();
       Linha.paint();
       Linha.drawLine(Linha.xIni,Linha.yIni,x2,y2);
       Linha.paint();
    }
}
function iniciaLiga(nomeLiga)
{
   var objL;
   objL=FindObj(nomeLiga);
   objL.inicia=1;
}
// -->
