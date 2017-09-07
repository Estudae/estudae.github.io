function ativaswf(swf, nome, width, height, wmode) {
if (wmode != 'opaque' && wmode != 'transparent') {wmode = 'transparent';}
var monta_swf = '';
monta_swf += "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' id=" + nome + " width='"+ width +"' height='"+ height +"' title=''>";
monta_swf += "<param name='movie' value='"+ swf + "'>";
monta_swf += "<param name='quality' value='high'>";
monta_swf += "<param name='menu' value='0'>";
monta_swf += "<param name='allowScriptAccess' value='always'>";
monta_swf += "<param name='wmode' value='"+ wmode +"'>";
monta_swf += "<embed src='"+ swf + "' name=" + nome + " swliveconnect=true quality='high' wmode='"+ wmode +"' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='"+ width +"' height='"+ height +"'></embed>";
monta_swf += "</object>";
document.write(monta_swf);
}
