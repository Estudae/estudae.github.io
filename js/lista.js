$(document).ready(function () {

    var table = $('#aulas');
    var form = $('#buscar_aula');
    
    function recebe(tipo_busca, cod_ano, assunto_busca) {
        var url = 'http://www.estudae.com.br/lista.php';
	var type = 'POST';

        $.ajax({
            type: type,
            dataType: 'JSON',
            url: url,
            data: {
                assunto: assunto_busca,
                tipo: tipo_busca,
                ano: cod_ano
            },
            success: function (data) {
                console.log(data);
                populateMsgs(tipo_busca, data);
            },
            error: function (data) {
                console.error(data);
                console.log(data);
            }
        });
        return false;
    }

    function populateMsgs(tipo_busca, mensagens) {

        var html = '';
        mensagens.sort(function (a, b) {
            return a.bimestre < b.bimestre ? -1 : a.bimestre > b.bimestre ? 1 : 0;
        });

        if (tipo_busca == 'por_ano'){
            html = '<tr><th>Código</th><th>Nome da Aula</th><th>Descrição da Aula</th><th>Bimestre</th></tr>';    
        }else{
            html = '<tr><th>Código</th><th>Nome da Aula</th><th>Descrição da Aula</th><th>Ano</th></tr>';
        }
        
        
        $.each(mensagens, function (key, value) {
            var msg = value;
            var descricao = msg.descricao;
            if (msg.descricao == null){
                descricao = '';
            }
            html += '<tr>';
            html += '<td>' + msg.cod + '</td><td>' + msg.nome + '</td><td>' + descricao + '</td><td>' + msg.nomebimestre + '</td>';
            html += '</tr>';
        });
        $(".tabela").empty();
        $(".tabela").append(html);
        $(".wallpaper").hide();
        addEventHandlersToList();
    }

    function addEventHandlersToList() {
        table.find('tr').click(function () {
            var tr = $(this).closest('tr');
            var tds = tr.find('td');
            var td_id = tds[0];
            var id = $(td_id).text();
            window.open('http://www.estudae.com.br/aulaonline.html?cod=' + id);
            return false;
        });
    }

    form.submit(function () {
        var select = $('#por_ano');
        recebe('por_ano', select.val(), '');
        return false;
    });

    $('#assunto').submit(function () {
        var input = $('#assunto_aula');
        recebe('por_assunto', '', input.val());
        return false;
    });


    

});
