$(document).ready(function () {

    form = $('#abrir_aula');

    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });

    console.log(data);
    
    if (data.cod) {
        abrirAula(data.cod);
        $('#abrir_aula').hide();
    } else {
        $('.wrap').hide();
        $('#abrir_aula').show();
    }

    form.submit(function () {
        var input = $('#aula');
        var aula = trataCodigo(input.val());
        
        if(aula){
            abrirAula(aula);
        }else{
            preventDefault();
        }
        
        $('#abrir_aula').hide();
        $('.wrap').show();
        return false;
    });
    
    //adiciona zeros a
    function trataCodigo(cod){
        if (cod.length == 1){
            return '00'+cod;
        }else if (cod.length == 2){
            return '0'+cod;
        }else if (cod.length == 3){
            return cod;
        }else if (cod.length == 0){
            return false;
        }
    }

    /*form.keypress(function (event) {
        if (event.which > 57 || event.which < 48) event.returnValue = false
        console.log(event.which);
    });*/
    
    form.on('keypress', function teclas(){
	   if (event.keyCode != 13 && (event.keyCode > 57 || event.keyCode < 48)){
           event.returnValue = false
       }
        console.log(event.keyCode);
        
    });


    function abrirAula(codAula) {
        var url = '';

	//para servidor local -- repositorio de aulas local
	if(location.hostname == '192.168.0.100'){
	  url = 'aulas/';
	}else{
	  url = 'https://www.estudae.com.br/aulas/';
	}	

	//url = 'https://www.estudae.com.br/aulas/';

	//url = 'aulas/';	

	var html = '';
        $('.wrap').empty();
        html = '<iframe src="' + url + codAula + '/index.html" frameborder="0" class="frame"></iframe>';
        console.log(html);
        $('.wrap').append(html);
    }
});
