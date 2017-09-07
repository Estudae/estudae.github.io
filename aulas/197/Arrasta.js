<!--
var arrastando=false, arrAtu, difArrX, difArrY;
function MoveArr(e)
{
var x2, y2;
    if(arrastando)
    {
       var xAtu=0, yAtu=0;
       try {
         var xAtu = (window.Event) ? e.pageX : event.clientX;
         var yAtu = (window.Event) ? e.pageY : event.clientY;
       } catch(err) {
         xAtu = event.clientX;
         yAtu = event.clientY;
       }
       y2 = yAtu + document.body.scrollTop - difArrY;
       x2 = xAtu + document.body.scrollLeft - difArrX;
       dd.elements[arrAtu].moveTo(x2,y2);
    }
}
function iniciaArr(sL1, x, y)
{
  if(!arrastando) {
    arrastando=true;
    arrAtu = sL1;
    var obj=FindObj(arrAtu);
    difArrX = x - obj.x_ini;
    difArrY = y - obj.y_ini;
    document.onmousemove = MoveArr;
  }
}
// -->
