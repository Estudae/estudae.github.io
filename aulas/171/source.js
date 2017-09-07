<!--
var intervalo=0;
var NS = false;
var NS6 = false;
var NS4 = false;
var IE = false;
var IE4 = false;
var IE5 = false;
var carregado=false;
var nDeslocou=0;
var nDeslocouVertical=0;
var primeiraTela='240808_01';
var projeto = GetArgValue('projeto');
if (projeto == '') projeto='240808_CLARICE';
var codCurso = GetArgValue('codCurso');
var hyperlink = GetArgValue('lnk');
var erros = GetArgValue('rrs');
var acertos = GetArgValue('crts');
var WMP = GetArgValue('wmp');
var origem = GetArgValue('origem');
var sTempo = GetArgValue('tmp');
var sUsuario = GetArgValue('usuario');
document.allLayers = new Array();
window.screen.updateInterval=0;
if(WMP=='true') {WMP=true;}
else {WMP=false;}
if (erros == '') erros = 0;
else erros = parseInt(erros);
if (acertos == '') acertos = 0;
else acertos = parseInt(acertos);
function verificaNavegador() {
   var versao = 4;
   if (navigator.appName == 'Netscape')
   {
     NS = true;
     if (navigator.appVersion == '4') navigator.plugins.refresh();
     versao = parseInt(navigator.appVersion);
     if(versao>=5) {NS6 = true;} else {NS4 = true;}
   }
   else if (navigator.appName == 'Microsoft Internet Explorer')
   {
     IE = true;
     versao = navigator.appVersion;
     if(parseInt(versao.substring(0,1)) < 4) {
        alert('Essa página é melhor visualizada no Internet Explorer 5 ou superior');
     }
     else if (versao.indexOf('MSIE') != -1)
     {
         var pos;
         pos = versao.indexOf('MSIE');
         if (parseInt(versao.substring(pos + 5, pos + 6)) >= 5) {
            IE5=true;
         }
         else if(parseInt(versao.substring(0,1)) == 4)
         {
            IE4=true;
         }
     }
   }
}
verificaNavegador();
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=='Netscape') && (parseInt(appVersion)==4)) {
     document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
function FindObj(name)
{
    if (document.getElementById)
    {
      if (navigator.appName.indexOf('; Microsoft; Internet; ')==-1){
        if (document.embeds && document.embeds[name]){
          return document.embeds[name];
        } else {
          return document.getElementById(name);
        }
      }
      else{
        return document.getElementById(name);
      }
    }
    else if (document.all)
    {
        return document.all[name];
    }
    else if (document.layers)
    {
        return document.layers[name];
    }
    else
    {
        return GetObj(name);
    }
}
function GetObj(n, d) { //v3.0
var p,i,x;
if(!d)
    d=document;
    if((p=n.indexOf('?')) > 0 && parent.frames.length) {
        d=parent.frames[n.substring(p+1)].document;
        n=n.substring(0,p);
    }
    if(!(x=d[n]) && d.all)
         x=d.all[n];
    for (i=0;!x&&i<d.forms.length;i++)
         x=d.forms[i][n];
    for(i=0; !x && d.layers && i<d.layers.length; i++)
         x=GetObj(n,d.layers[i].document);
    return x;
    }
function Janela_Load()
{
    intervalo = window.screen.updateInterval;
    CarregaCamadas();
    carregado=true;
}
function link_click(ligacao, link, avancar, org, novaJanela)
{
 var sLnk='';
 var sWMP='';
 var continua=false;
   if(telaTemExercicio == true) {
     if(VerificaExerc()==null) continua=true;
   }
   else continua=true;
   if(continua) {
      if (avancar==null) avancar=false;
      if (org==null) org=false;
      if ((avancar==true) && (hyperlink=='1')) 
          {ligacao = PrimeiroLink; link = 1;}
      if (org==true) {
           if(retOrigem()=='') {
              ligacao = primeiraTela + '.htm';}
           else {
              ligacao = retOrigem() + '.htm';}
          link = 0;
      }
      if(link==1 && retOrigem()=='') {origem = nomeTela}
      if(link==null) {sLnk='0';}
      else {sLnk=link;}
      if(WMP==true) {sWMP='true';}
      else {sWMP='false';}
      var parametros = '?origem=' + origem + '&wmp=' + sWMP + '&lnk=' + sLnk + '&codCurso=' + codCurso + '&projeto=' + projeto + '&usuario=' + sUsuario + '&tmp=' + sTempo + '&rrs=' + erros + '&crts=' + acertos;
      if(novaJanela == true && ligacao == 'finaliza.html') {
       window.close();
      }
      else if(novaJanela == true) {
         if(ligacao!=null) window.open(ligacao + parametros, null, 'width=500, height=350, scrollbars=1, resizable=1');
      }
      else {
         if(ligacao!=null) window.location.href = ligacao + parametros;
      }
   }
}
function Hint(texto, visivel)
{
   if(!NS4)
   {
      var obj = FindObj('rotuloMovel');
      var sVisivel;
      if (visivel == true) sVisivel = 'visible';
      else sVisivel = 'hidden';
      obj.innerText = texto;
      obj.style.posTop = window.event.y + document.body.scrollTop + 10;
      obj.style.posLeft = window.event.x + document.body.scrollLeft + 10;
      obj.style.visibility = sVisivel;
   }
}
function posiRotMovel(texto, x, y)
{
   if(!NS4)
   {
      var obj = FindObj('rotuloMovel');
      obj.innerText = texto;
      obj.style.posTop = y;
      obj.style.posLeft = x;
      obj.style.visibility = 'visible';
   }
}
function volta()
{
   window.history.go(-1)
}
function CarregaCamadasNS6(inicio)
{
    var i;
    with (inicio)
    {
       if (childNodes)
       {
          for (i=0; i<childNodes.length; i++)
          {
              if (childNodes[i].id && childNodes[i].id != '' && childNodes[i].style && childNodes[i].style.position)
              {
                 document.allLayers[document.allLayers.length]=childNodes[i];
              }
              CarregaCamadasNS6(childNodes[i]);
          }
       }
    }
}
function CarregaCamadas()
{
    with (document)
    {
      if (NS4)
      {
          for (i=0; i<layers.length; i++)
               allLayers[i]=layers[i];
          for (i=0; i<allLayers.length; i++)
               if(allLayers[i].document && allLayers[i].document.layers)
                     with (allLayers[i].document)
                        for(j=0; j<layers.length; j++)
                            allLayers[allLayers.length]=layers[j];
      }
      else if (NS6)
      {
          CarregaCamadasNS6(document);
      }
      else
      {
          for (i=0;i<all.length;i++)
               if (all[i].style && all[i].style.position)
                   allLayers[allLayers.length]=all[i];
      }
    }
}
function trocaCor(nomeObjeto, cor)
{
    if(!NS4) {
       var obj = FindObj(nomeObjeto);
       if(obj!=null) {
          if(IE) obj.style.color = '#' + cor;
          else   obj.color = '#' + cor;
       }
    }
}
function exibeObjeto(nomeObjeto)
{
    var obj = FindObj(nomeObjeto);
    if(obj!=null) {
       if(NS && (obj.style == null))
       {
          obj.visibility = 'visible';
       }
       else
       {
          obj.style.visibility = 'visible';
       }
    }
}
function escondeObjeto(nomeObjeto)
{
    var obj = FindObj(nomeObjeto);
    if(obj!=null) {
       if(obj.fixo == false) { 
          if(NS)
          {
             obj.visibility = 'hidden';
          }
          else
          {
             obj.style.visibility = 'hidden';
          }
       }
    }
}
function TiraPx(posicao)
{
     return(parseInt(posicao.substring(0,posicao.indexOf('px'))));
}
function Desloca(NomeObj)
{
   if(NS4)
   {
      var Obj = GetObj(NomeObj);
      Obj.left = Obj.left + 8;
      Obj.top = Obj.top + 8;
   }
}
function colocaBorda(NomeObj, iBorda)
{
   if (!NS4) {
      var obj = FindObj(NomeObj);
      if (iBorda > 0) obj.style.borderWidth = iBorda;
      obj.style.overflow = 'auto';
   }
}
function colocaEstiloFonte(NomeObj, nomeFonte, tamanhoFonte)
{
   if (!NS4 && !IE4) {
      var obj = FindObj(NomeObj);
      obj.style.fontFamily = nomeFonte;
      obj.style.fontSize = tamanhoFonte + 'pt';
   }
}
function removeHref(NomeObj, mao)
{
    if (!NS4)
    {
        var obj = FindObj(NomeObj);
        obj.removeAttribute('href', false);
        if (mao==true) obj.style.cursor = 'hand';
    }
}
function removeAlt(NomeObj)
{
    if (!NS4)
    {
        var obj = FindObj(NomeObj);
        obj.removeAttribute('alt', false);
    }
}
function GetArgValue (name)
{
   var arg = name + '=';
   var value;
   var posProx;
   var alen = arg.length;
   var posVar = window.location.href.indexOf(name + '=');
   if(posVar!=-1)
   {
      posProx = window.location.href.indexOf('&', posVar);
      if(posProx==-1) posProx = window.location.href.length;
      value = window.location.href.substring(posVar + alen, posProx);
      return(value);
   }
   else return('');
}
function retOrigem() {
   return(origem);
}
function chamaFinaliza() {
    link_click('finaliza.html', null, null, null, true); 
}
function get_random(maxNum) {
    var ranNum= Math.round(Math.random()*(maxNum-1));
    return ranNum;
}
// -->
