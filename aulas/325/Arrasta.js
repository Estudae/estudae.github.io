<!--
var arrastando=false, arrAtu, difArrX, difArrY;
function MoveArr(e)
{
var x2, y2;
    if(arrastando)
    {
       var xAtu=0, yAtu=0;
       try {
         var xAtu = e.pageX;
         var yAtu = e.pageY;
       } catch(err) {
         xAtu = event.clientX + document.body.scrollLeft;
         yAtu = event.clientY + document.body.scrollTop;
       }
       y2 = yAtu - difArrY;
       x2 = xAtu - difArrX;
       dd.elements[arrAtu].moveTo(x2,y2);
    }
}
function iniciaArr(sL1, x, y)
{
  if(!arrastando && sL1.colou == 0) {
    arrastando=true;
    arrAtu = sL1;
    var obj=FindObj(arrAtu);
    difArrX = x - obj.x_ini;
    difArrY = y - obj.y_ini;
    document.onmousemove = MoveArr;
  }
}
// -->
