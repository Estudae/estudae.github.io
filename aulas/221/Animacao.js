<!--
function preloadImages() {
    var d=document; 
    if(d.images) { 
       if(!d.preLoaded) d.preLoaded=new Array();
       var i;; 
       var j=d.preLoaded.length;
       var arg=preloadImages.arguments;
       for(i=0; i<arg.length; i++) {
           d.preLoaded[j]=new Image; 
           d.preLoaded[j].src=arg[i];
           j++;
       }
    }
}
function interrompe(nomeObj) {
    var obj = FindObj(nomeObj);
    window.clearInterval(obj.idInterval);
    obj.idInterval = 0;
    if (obj.idFrame !=0) {
        window.clearInterval(obj.idFrame);
        obj.idFrame = 0;
        if (obj.avancaTela != '') {
            link_click(obj.avancaTela, '0', true);
        }
        if (obj.invisivel == 1){
            document.getElementById("Animacao"+dig+"div").style.display = "none";
        }
        if (obj.proxAnim != '') {
            var obj2 = FindObj(obj.proxAnim);
            if (obj2.iniciaInvisivel = 1) {//deixa-lo visível
                tornaVisivel(obj.proxAnim);
            }
            calculaVelocidade(obj.proxAnim);
            calculaVelocidadeXY(0, obj.proxAnim);
            window.setInterval("move("+ obj.proxAnim +","+ obj.proxAnim.substring(1, obj.proxAnim.length) +")",100);
            movePara(obj.proxAnim, obj.proxAnim.substring(1, obj.proxAnim.length));
        }
    }
}
function move(nomeObj, nomeFig) {
  var obj = FindObj(nomeObj);
  var nDifTime;
  var nX1, nY1, nn;
  var nMinX, nMaxX;
  var nMinY, nMaxY;
  var xPosi, yPosi, nPxTot, nLenPx, nNewLinPosi;
  var nDx, nDy, nLenLin;
  var nDifX, nDifY, nTempo;
  var d = new Date();
  if (obj!= null && obj.vPxSec > 0)
  {
    if (obj.registra!=0 || obj.funcao!=0 || obj.link!='' || obj.som!='' || obj.linkprog!='')
      dd.elements[nomeObj]._setCrs('hand');
    nDifTime = (d.getTime() - obj.vTempoAnt)/1000;
    obj.vTempoAnt = d.getTime();
    nX1 = (obj.vLinPosi == 0) ? obj.leftOri + dd.elements[nomeObj].w / 2 : obj.vCamX[obj.vLinPosi];
    nY1 = (obj.vLinPosi == 0) ? obj.topOri + dd.elements[nomeObj].h / 2 : obj.vCamY[obj.vLinPosi];
    nn  = obj.vLinPosi;
    nMinX = new Number;
    nMinX = Math.min(obj.vCamX[nn], nX1);
    nMaxX = Math.max(obj.vCamX[nn], nX1);
    nMinY = Math.min(obj.vCamY[nn], nY1);
    nMaxY = Math.max(obj.vCamY[nn], nY1);
    xPosi = dd.elements[nomeObj].x + dd.elements[nomeObj].w / 2;
    yPosi = dd.elements[nomeObj].y + dd.elements[nomeObj].h / 2;
    var iPosi=0;
    var nPxX = obj.vPxX;
    var nPxY = obj.vPxY;
    iPosi = (xPosi + nPxX * nDifTime < nMinX) || (xPosi + nPxX * nDifTime > nMaxX) || (yPosi + nPxY * nDifTime < nMinY) || (yPosi + nPxY * nDifTime > nMaxY) ? 1 : 0;
    if (iPosi==1)
      verificaLinha(obj, nomeObj, nomeFig);
    if (iPosi==0)
    {
      dd.elements[nomeObj].moveTo(xPosi + obj.vPxX * nDifTime - dd.elements[nomeObj].w / 2, yPosi + obj.vPxY * nDifTime - dd.elements[nomeObj].h / 2);
    }
  }
  if (obj != null) {
  obj.vInicioAnima=0;
      if (obj.vInicioAnima==0 && obj.looping==0 && obj.nCiclos > 0){
          id = obj.id.substring(0, 9);
          dig = parseInt(obj.id.substring(9));
          obj.nCiclos = obj.nCiclos - 1;
          if (obj.nCiclos == 0){//entra aqui ao final do ciclo
             if (obj.iniciaInvisivel == 1){
                  document.getElementById("Animacao"+dig+"div").style.display = "none";
              }
          }
      }
  }
  }
function verificaLinha(obj, nomeObj, nomeFig) {
  var nPxTot=0.0, nLenPx=0.0, nNewLinPosi=0.0, nX1=0.0, nY1=0.0;
  var nDx=0.0, nDy=0.0, nLenLin=0.0, nDifPosi=0.0, i;
  var entrouIf=0.0, nDifX=0.0, nDifY=0.0;
  var d = new Date();
  var n=(1/1000)*d.getTime();
  n=n-obj.vTempoIni;
  nPxTot = obj.vPxSec * n;
  nLenPx = 0;
  nNewLinPosi = -1;
  nX1 = obj.leftOri + dd.elements[nomeObj].w / 2;
  nY1 = obj.topOri + dd.elements[nomeObj].h / 2;
  for (i = 0; i<obj.vCamX.length; i++)
  {
    nDx = obj.vCamX[i] - nX1;
    nDy = obj.vCamY[i] - nY1;
    nLenLin = Math.sqrt(Math.pow(nDx,2) + Math.pow(nDy,2));
    if ((nPxTot>=nLenPx) && (nPxTot <= (nLenPx + nLenLin)))
    {
      nNewLinPosi = i;
      nDifPosi = nPxTot - nLenPx;
      break;
    }
    else
    {
      nLenPx = nLenPx + nLenLin;
      nX1 = obj.vCamX[i];
      nY1 = obj.vCamY[i];
    }
  }
  entrouIf = 0;
  if (nNewLinPosi > -1)
  {
    nDifX = nDifPosi * nDx / nLenLin;
    nDifY = nDifPosi * nDy / nLenLin;
    dd.elements[nomeObj].moveTo(nX1 + nDifX - dd.elements[nomeObj].w / 2, nY1 + nDifY - dd.elements[nomeObj].h / 2);
    calculaVelocidadeXY(nNewLinPosi, nomeObj);
    obj.vLinPosi = nNewLinPosi;
  }
  else
  {
    if (obj.vInicioAnima==0 && obj.looping==0)
      obj.vCiclos = obj.vCiclos - 1;
    if (obj.vInicioAnima==0 && obj.looping==0 && obj.vCiclos<=0)
    {
      interrompe(nomeObj);
      if (obj.vInterrompe==0) {
         if (obj.vCiclos != 1)
            window.setInterval('trocaFigura(\'' + nomeFig + '\', '+ obj.interrompe +', \'' + nomeObj + '\')', obj.tempoFrame);
         else
            window.setInterval('trocaFigura(\'' + nomeFig + '\', 0, \'\')', obj.tempoFrame);
      }
      return;
    }
    if (nLenPx > 0)
    {
      nPxTot = (nPxTot / nLenPx - Math.round(nPxTot / nLenPx)) * nLenPx;
      nLenPx = 0;
      nNewLinPosi = 0;
      nX1 = obj.leftOri + dd.elements[nomeObj].w / 2;
      nY1 = obj.topOri + dd.elements[nomeObj].h / 2;
      for (i==0; i<obj.vCamX.lenght; i++) {
        nDx = obj.vCamX[i] - nX1;
        nDy = obj.vCamY[i] - nY1;
        nLenLin = Math.sqrt(Math.pow(nDx,2) + Math.pow(nDy,2));
        if (nPxTot >= nLenPx && nPxTot <= nLenPx + nLenLin)
        {
          nNewLinPosi = i - 1;
          nDifPosi = nPxTot - nLenPx;
          break;
        }
        nLenPx = nLenPx + nLenLin;
        nX1 = obj.vCamX[i];
        nY1 = obj.vCamY[i];
      }
    }
    else
    {
      nDifPosi = 0;
      nX1 = obj.leftOri + dd.elements[nomeObj].w / 2;
      nY1 = obj.topOri + dd.elements[nomeObj].h / 2;
    }
    nDifX = nDifPosi * nDx / nLenLin;
    nDifY = nDifPosi * nDy / nLenLin;
    dd.elements[nomeObj].moveTo(nX1 + nDifX - dd.elements[nomeObj].w / 2,nY1 + nDifY - dd.elements[nomeObj].h / 2);
    nTempo = nPxTot / obj.vPxSec;
    obj.vTempoIni = (d.getTime()/1000) - nTempo;
    calculaVelocidadeXY(nNewLinPosi, nomeObj);
    obj.vLinPosi = nNewLinPosi;
  }
}
function trocaFigura(nomeObj, interrompe, nome) {
    var obj;
    if (NS4) {obj = GetObj(nomeObj);}
    else     {obj = FindObj(nomeObj);}
    if(obj.figAtual!=obj.fig.length - 1) {
       obj.figAtual = obj.figAtual + 1;
    }
    else {
        if (interrompe != 1)
            obj.figAtual = 0;
        else {
            var obj2 = FindObj(nome);
            window.clearInterval(obj2.idInterval);
            obj2.idInterval = 0;
            if (obj2.idFrame !=0) {
                window.clearInterval(obj2.idFrame);
                obj2.idFrame = 0;
                if (obj2.avancaTela != '') {
                    link_click(obj2.avancaTela, '0', true);
                }
                dig = parseInt(obj2.id.substring(9));
                if (obj2.invisivel == 1){
                    document.getElementById("Animacao"+dig+"div").style.display = "none";
                }
                if (obj2.iniciaInvisivel = 1) {//deixa-lo visível
                    tornaVisivel(nome);
                }
                if (obj2.proxAnim != '') {
                    var obj3 = FindObj(obj2.proxAnim);
                    if (obj3.iniciaInvisivel = 1) {//deixa-lo visível
                        tornaVisivel(obj2.proxAnim);
                    }
                    calculaVelocidade(obj2.proxAnim);
                    calculaVelocidadeXY(0, obj2.proxAnim);
                    window.setInterval("move("+ obj2.proxAnim +","+ obj2.proxAnim.substring(1, obj2.proxAnim.length) +")",100);
                    movePara(obj2.proxAnim, obj2.proxAnim.substring(1, obj2.proxAnim.length));
                }
            }
        }
    }
    dd.elements[nomeObj].swapImage(obj.fig[obj.figAtual]);
    if (obj.registra!=0 || obj.funcao!=0 || obj.link!='' || obj.som!='' || obj.linkprog!='')
      dd.elements[nomeObj]._setCrs('hand');
}
function movePara(nomeObj, nomeFig){
    var obj = FindObj(nomeObj);
    var d = new Date();
    obj.vLinAtu = obj.vCamX.length;
    obj.vTempoAnt = d.getTime();
    obj.vTempoIni = d.getTime()/1000;
    if (obj.idFrame == 0) {
        if (obj.vCiclos != 1)
            obj.idFrame = window.setInterval('trocaFigura(\'' + nomeFig + '\', '+ obj.interrompe +', \'' + nomeObj + '\')', obj.tempoFrame);
        else
            obj.idFrame = window.setInterval('trocaFigura(\'' + nomeFig + '\', 0, \'\')', obj.tempoFrame);
    }
}
function calculaVelocidade(nomeObj) {
  var nX1, nY1;
  var nDx, nDy;
  var nLenLin, nLenPx;
  var obj = FindObj(nomeObj);
  nLenPx = 0;
  nX1 = obj.leftOri + dd.elements[nomeObj].w / 2;
  nY1 = obj.topOri + dd.elements[nomeObj].h / 2;
  for(i=0; i<obj.vCamX.length; i++) {
    nDx = Math.abs(obj.vCamX[i] - nX1);
    nDy = Math.abs(obj.vCamY[i] - nY1);
    nX1 = obj.vCamX[i];
    nY1 = obj.vCamY[i];
    nLenLin = Math.sqrt(Math.pow(nDx,2) + Math.pow(nDy,2));
    nLenPx = nLenPx + nLenLin;
  }
  obj.vPxSec = nLenPx / obj.duracao;
}
function calculaVelocidadeXY(n, nomeObj) {
  var nDx, nDy;
  var nX1, nY1, nPosi, nLenLin;
  var obj = FindObj(nomeObj);
  if (n==0 || obj.vCamX.length < 2) {
    nPosi = 0;
    nX1 = obj.leftOri + dd.elements[nomeObj].w / 2;
    nY1 = obj.topOri + dd.elements[nomeObj].h / 2;
  } else {
    nX1 = obj.vCamX[n-1];
    nY1 = obj.vCamY[n-1];
    nPosi = n;
  }
  nDx = obj.vCamX[nPosi] - nX1;
  nDy = obj.vCamY[nPosi] - nY1;
  nLenLin = Math.sqrt(Math.pow(nDx,2) + Math.pow(nDy,2));
  obj.vPxX = obj.vPxSec * nDx / nLenLin;
  obj.vPxY = obj.vPxSec * nDy / nLenLin;
}
function inicializaAnim(nomeObj, nomeFig, intervalo) {
  window.setInterval('move(\'' + nomeObj + '\',\'' + nomeFig + '\')', intervalo);
  movePara(nomeObj, nomeFig);
}
function iniciaInv(nomeObj) {
    var obj = FindObj(nomeObj);
    var dig = parseInt(obj.id.substring(9));
    document.getElementById("Animacao"+dig+"div").style.visibility = "hidden";
}
function tornaVisivel(nomeObj) {
    var obj = FindObj(nomeObj);
    var dig = parseInt(obj.id.substring(9));
    document.getElementById("Animacao"+dig+"div").style.visibility = "visible";
}
// -->
