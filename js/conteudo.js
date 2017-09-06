$(document).ready(function () {

    
    
    
/******************************************************


display block - menu
flaticon.com/search/download
flatuicolors.com
colorpicker.com
css-tricks.com/snippets/css/media-queries-for-standard-devices
https://www.xml-sitemaps.com/

https://www.dreamhost.com/



"revisor" : "diego previero",
"revisado" : "true",
"publicado" : "true",

"comentarios" : "{
		
		"id",
		"data",
		"nome",
		"email",
		"comentario",
		"foto",
	}"
    
    
******************************************************/
    
    
    
    
    
    
    function slugify(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
        var to = "aaaaaeeeeeiiiiooooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    };

    var artigos = [
        {
            "cod": "1",
            "titulo": "Peça gratuitamente os livros do Itaú Criança coleção 2016",
            "imagem1": "itau.jpg",
            "imagemAlt1": "itau",
            "imagem2": "leia.jpg",
            "imagemAlt2": "itau",
            "artigo": "<p>Outubro chegou e com ele chega também a coleção 2016 de livros gratuitos da campanha Leia para uma criança, do banco Itaú.</p><p>O banco Itaú e a Fundação Itaú Social convidam, todos os anos no mês de outubro, os adultos para lerem para as crianças e como incentivo realiza a distribuição gratuita de livros infantis para todo o território nacional. O projeto tem como objetivo estimular, através da leitura, o relacionamento afetivo entre a família, aumentar o repertório de histórias da criança e promover à adultos e crianças momentos de lazer. Além disso estimular o desenvolvimento intelectual, emocional e social de adultos e crianças.</p><p>Nesta edição os dois títulos que participarão são: Poeminhas da terra da autora Marcia Leite e Selou e Maya de Lara Meana.</p><p>Os livros são selecionados por um time de especialistas visando atender critérios como foco na faixa etária de zero a cinco anos, renovação de autores anualmente, autores de nacionalidade brasileira, conteúdo cultural e educativo que desperte interesse na criança e estimule também o adulto que irá ler para a criança.</p><p>Para solicitar a sua coleção <strong> não </strong> é preciso ser cliente do banco Itaú, qualquer pessoa pode se cadastrar, desde que resida no Brasil, é só fazer o cadastro e aguardar a entrega gratuita pelos correios.</p><p>O Itaú Criança é um programa da Fundação Itaú Social e desde 2010 já distribuiu mas de 45 milhões de livros infantis gratuitamente.</p>",
            "keywords": "",
            "metadescription": "",
            "data": "",
            "autor": "Diego Previero",
            "video": "",
            "destaque": "false"
                    },
        {
            cod: 2,
            titulo: 'LabManager: Um sistema de controle remoto de uma rede local para suporte às aulas de informática na rede municipal de ensino fundamental de Vera Cruz - SP',
            imagem1: 'labmanager.png',
            imagemAlt1: 'LabManager',
            imagem2: '',
            imagemAlt2: '',
            artigo: '<p ><strong>Este é um fragmento do meu trabalho de conclusão de curso onde apresento um aplicativo que desenvolvi para auxiliar-me na realização da administração de um laboratório de informática.</strong></p>                    <p>                        <br/>                    </p>                    <p>Recentemente tem havido um forte incentivo por parte do governo em adotar nas escolas públicas o uso de computadores onde milhares de laboratórios de informática têm sido montados e milhares de profissionais têm sido contratados para exercer as funções de professor de informática ou instrutor de informática, porém, sem que seja cobrado desses profissionais conhecimentos mais profundos na área de redes de computadores. Uma enorme gama de softwares de rede está presente hoje no mercado, desde softwares de gerenciamento a sistemas operacionais servidores, que dispõem de uma série de ferramentas para gerenciamento e manutenção de redes, mas para poder utilizá-los é necessária a implantação de um ambiente complexo de rede, exigindo do profissional utilizador um profundo conhecimento de cada uma das ferramentas escolhidas para compor o parque tecnológico onde serão utilizadas.</p>                    <p>Pelo fato de haver uma lacuna no mercado de software de manutenção de redes e controle remoto sob demanda, o presente projeto pretende elaborar uma aplicação que tem por objetivo reunir em uma só aplicação uma coleção das principais funcionalidades apresentadas pelos sistemas citados acima tornando sua instalação e a execução de suas funções o mais transparente possível ao usuário de forma a não exigir dele conhecimentos de cunho técnico da área de redes de computadores e possibilitando o seu uso em ambientes menos complexos.                    </p>                    <p>Com o objetivo de ser de fácil utilização e compreensão por um usuário leigo a aparência do software tem seu foco na usabilidade, visa apresentar todas as suas funcionalidades de forma intuitiva, separadas em categorias e dispostas em abas para uma maior organização.                    </p>                    <p>Outro objetivo importante é a ergonomia onde visa solucionar situações que exijam a execução de ações em demanda, evitando que o professor tenha que realizar ações repetitivas uma máquina de cada vez, se deslocando fisicamente pelo laboratório, poupando tempo e privando o usuário de lesões por esforço repetitivo.</p>                    <p>Todas as funcionalidades disponíveis podem ser executadas em uma única estação ou em todas de uma só vez, conforme a necessidade do ambiente de trabalho.</p>                    <p>                        <br/>                    </p>                    <p><b>ASPECTOS RELEVANTES SOBRE REDES DE COMPUTADORES</b></p>                    <p>As necessidades de acesso e controle remotos surgiram antes mesmo do nascimento das redes de computadores, pois devido aos altos custos dos mesmos estes deveriam atender um número bem grande de usuários, centralizando o processamento e armazenamento de dados em um determinado setor da instituição. Atualmente a necessidade de acesso remoto se dá a fim de evitar a necessidade de se efetuar a chamada de comandos localmente, pois nem sempre o utilizador está presente no local onde o computador se encontra. No caso específico tratado como tema deste trabalho, a necessidade de controle remoto está direcionada a manipulação de vários computadores ao mesmo tempo a fim de realizarem todos uma tarefa específica.</p>                    <p>Como capítulo inicial aqui fundamentaremos a pesquisa descrevendo os principais aspectos que determinaram a evolução dos computadores e seu uso.</p>                    <p>                        <br/>                    </p>                    <p><b>LABMANAGER:UM SOFTWARE DE CONTROLE REMOTO</b></p>                    <p>Este capítulo pretende abordar o contexto histórico que envolve o surgimento da necessidade de uma ferramenta de controle remoto para os laboratórios de informática das escolas de ensino fundamental do município de Vera Cruz-SP.</p>                    <p>Como visto a história nos mostrou que a necessidade de executar comandos remotamente surgiu antes mesmo da própria rede, não sendo um conceito recente. Com base nas diversas pesquisas realizadas a procura de softwares que pudessem servir de solução para os requisitos apresentados constatou-se que nenhuma das ferramentas estudadas apresentou de maneira satisfatória as características esperadas. Portanto a implementação de uma ferramenta moldada às necessidades pareceu ser a alternativa mais acertada.</p>                    <p>                        <br/>                    </p>                    <p><b>HISTÓRIA</b></p>                    <p>Em fevereiro de 2008 assumi o cargo de professor de informática junto à Prefeitura Municipal de Vera Cruz, vindo a trabalhar em uma escola municipal de ensino fundamental (EMEF). No exercício de minhas funções me deparei com várias situações que exigiam de mim conhecimentos específicos da área de redes de computadores, pois meu ambiente de trabalho era um laboratório de informática com dezoito computadores.</p>                    <p>A maior parte das atividades que compunham meu dia de trabalho era sob demanda, ou seja, havia a necessidade de ser executada nos dezoito computadores que formavam minha rede.</p>                    <p>Algumas dessas atividades eram: identificar estações ativas na rede, para que a realização das tarefas fosse possível permitindo enviar os comandos para um determinado computador era preciso saber se ele se encontra ativo na rede e quais os computadores estão disponíveis para receber os comandos; realizar transferência de diretórios entre computadores, existem diretórios com arquivos que precisam estar disponíveis localmente, por isso é preciso fazer uma cópia desses diretórios em cada computador da rede; efetuar desligamento e reinicialização, ao final de cada expediente de trabalho e durante manutenções é necessário que sejam efetuadas ações de desligamento e reinicialização dos computadores da rede do laboratório; ativação de recursos de teclado: crianças que estão em fase de alfabetização não são capazes de identificar letras minúsculas, o processo de aprendizagem se inicia pelo reconhecimento das letras apresentadas em maiúsculo, portanto há a necessidade de manter recursos do teclado como caixa alta ativos, tal qual o recurso de teclado numérico (Num Lock), pois por não saberem ler não são capazes de aprender como ativar e desativar a função; chamada de URL através do navegador padrão, muitas aulas acontecem em ambiente Web exigindo a abertura de um determinado site. Nesta situação percebesse uma grande dificuldade enfrentada pelas crianças em digitar o endereço completo dos sites utilizados em aula, o que leva a uma considerável perda de tempo útil de aula que normalmente é de cinqüenta minutos; abertura e fechamento da bandeja do drive de CD/DVD, durante as constantes manutenções realizadas nos computadores do laboratório foi notada a necessidade de freqüente verificação dos drives de CD/DVD a fim de identificar possível esquecimento de mídias no interior dos dispositivos, o que poderia causar ônus a entidade ou ao professor em caso de furto das mesmas.</p>                    <p>A automatização do processo de abertura e fechamento dos dispositivos de CD/DVD proporcionam maior agilidade ao processo e ganho considerável no que tange a ergonomia, pois evita que o profissional tenha que realizar a tarefa repetidas vezes se deslocando pelo laboratório; abertura de diretório através do gerenciador de arquivos padrão: a manutenção em ambientes educacionais onde todos os computadores devem possuir uma mesma estrutura geralmente é realizada sob demanda. Todos os computadores são atualizados e recebem a instalação de novos aplicativos durante a mesma sessão de manutenção. Para isso muitas vezes é necessário que se navegue na estrutura de diretórios a fim de abrir o diretório onde reside os instaladores dos aplicativos a serem instalados.</p>                    <p>Considerando que a estrutura de diretórios de todos os computadores nesse ambiente é padrão, realizar a abertura do diretório de instaladores através de um comando sob demanda promove um ganho considerável de tempo e evita a necessidade de fazê-lo manualmente repetidas vezes; realizar todas as tarefas citadas anteriormente sob demanda, o tempo que o profissional tem para realizar as manutenções e o tempo de aula dos alunos é extremamente curto, portanto a automatização das tarefas principais nos momentos de aula e manutenção são de grande valia, já que o tempo ganho pode ser aplicado a outras atividades que beneficiem o aprendizado dos alunos; simplicidade de instalação e uso: nem sempre o profissional que está no comando de um ambiente de rede possui conhecimentos sobre administração de redes. O tempo como já foi citado tem um valor muito alto dentro de um ambiente educacional, o que torna inviável uma longa e complicada instalação e configuração do ambiente de trabalho, além da aprendizagem da ferramenta; ser gratuito: por ser uma iniciativa particular e não da instituição de ensino a solução deveria ter custo zero, as tecnologias correlatas que poderiam atender às necessidades citadas acima não contemplavam todos os requisitos, portanto optou-se pela implementação da solução.</p>                    <p>O laboratório era composto por computadores cuja configuração era: processadores AMD Sempron 2600, memória RAM de 512mb e sistema operacional Windows XP, sem nenhum software de rede, o que deixava bastante trabalhosa a realização das atividades que no inicio eram todas realizadas individualmente através da rede ou localmente de forma mecânica como no caso do desligamento e reinicialização dos computadores.                    </p>                    <p>A realização das tarefas era bastante trabalhosa não só pelo fato de terem de ser executadas uma a uma repetidas vezes, mas também pelo fato de que por um longo período eu tive sérios problemas de saúde que afetaram drasticamente minha visão.</p>  <p>A falta da minha visão dificultava ainda mais o meu desempenho no trabalho por não conseguir realizar atividades como ativar caixa alta nos teclados ou ajudar os alunos a digitar os endereços dos sites utilizados em aula.</p>                    <p>                        <br/>                    </p>                    <p><b>EVOLUÇÃO</b></p>                    <p>Como forma de solucionar os problemas foi iniciada a implementação da solução. De posse dos requisitos de sistema o próximo passo era definir a tecnologia a ser utilizada.</p>                    <p>A linguagem de programação escolhida foi o Java, pois é uma linguagem confiável e que está em ascensão no mercado, é orientada a objetos o que favorece a reusabilidade de código.</p>                    <p>Outro ponto importante é a portabilidade, pois devido a uma grande aderência do governo ao uso de softwares livres, como o sistema operacional Linux, faz-se necessário o desenvolvimento de ferramentas que sejam independentes de plataforma. A Integrated Development Environment (IDE) Eclipse foi utilizada como ambiente de desenvolvimento por ser uma ferramenta robusta e muito reconhecida no mercado.                    </p>                    <p>A versão 1.0 do LabManager contemplava os seguintes requisitos:                    </p>                    <ul>                        <li/>                        <p>                            realizar transferência de diretórios entre computadores;</p>                        <li/>                        <p>                            efetuar desligamento e reinicialização;</p>                        <li/>                        <p>                            realizar as tarefas sob demanda;</p>                        <li/>                        <p>                            alternar o servidor entre redes, tarefa necessária na ocasião da implementação da primeira versão, pois o computador que rodava o aplicativo exigia a reconfiguração da rede para alternar entre os links de Internet existentes no laboratório;</p>                        <li/>                        <p>                            desligar o servidor, realizar o desligamento da maquina local.</p>                        <p></p>                    </ul>                    <p>Uma tela foi desenvolvida com o recurso de desktop onde outras telas podem ser abertas dentro dela. Estas telas são chamadas através do menu Arquivo presente na tela principal.</p>                    <p>As funcionalidades foram divididas em duas janelas internas chamadas de Internal Frames de modo que o recurso de transferência de diretórios ficasse em uma janela separada dos controles de rede.</p>                    <p>Na versão 1.0 o LabManager não identificava quantas ou quais maquinas estavam disponíveis na rede, na implementação do aplicativo foi definido que o escopo da rede seria contemplado por dezesseis computadores e os endereços IP de cada computador foram inseridos no código do programa.</p>                    <p>Quando uma ação de reinicialização ou desligamento era executada o programa executava um loop e enviava um comando de Shell do Windows através da rede para as maquinas selecionadas na interface do aplicativo.                    </p>                    <p>Para que comandos de desligamento e reinicialização remoto funcionem através de redes Windows é preciso efetuar configurações de políticas de segurança na máquina que receberá os comandos através da rede, atribuindo direitos ao usuário de forçar o desligamento a partir de um sistema remoto.</p>                    <p>Essa necessidade de realizar configuração de políticas de segurança em todas as estações do laboratório serviu de motivo para uma atualização crítica na versão 2.0 da aplicação, que foi a implementação de sockets.                    </p>                    <p>O botão de desligamento do servidor faz uma chamada ao método Runtime.exec() do Java que é responsável por executar comandos de Shell em ambientes Windows, atribuindo como parâmetro o comando shutdown.                    </p>                    <p>O recurso de troca de redes também utiliza a chamada ao método Runtime.exec() recebendo como parâmetro um script escrito em um arquivo de lote com extensão de arquivos batch (.bat) contendo comandos para a reconfiguração da rede.</p>                    <p>No recurso de transferência de diretórios não era possível determinar pela interface quais máquinas da rede receberiam a transferência, esta era enviada para todas as dezesseis estações, estando elas ativas ou não.</p>                    <p>No momento da execução era realizado um looping determinado pelo número de estações informado no código do programa, a cada chamada do algoritmo de transferência dentro do looping a aplicação associa o endereço IP da máquina ao endereço de destino (que deve respeitar a estrutura de diretórios) e o nome do diretório que deve ser enviado.</p>                    <p>Para a realização da cópia de diretórios foram utilizadas as bibliotecas FileInputStream e FileOutputStream pertencentes ao pacote Java.io.                    </p>                    <p>A cópia acontece armazenando um vetor de bytes do diretório de origem em um buffer e replicando esse vetor na pasta destino criando arquivos e diretórios idênticos no destino.</p>                    <p>A transferência dos diretórios acontecia em sequência, assim que o primeiro computador terminava o recebimento do conteúdo era dado inicio a transferência para o segundo computador. Todo o processo de envio de um diretório com cinqüenta megabytes para as dezesseis máquinas demorava em média vinte minutos, pelo fato de um envio depender do termino do outro. Essa demora para a conclusão da transferência foi motivo para outra atualização crítica do LabManager que foi implementada à partir da versão 3.0 que é o uso de threads.</p>                    <p>                        <br/>                    </p>                    <p><b>CONCLUSÃO</b></p>                    <p>Com o avanço da tecnologia, o desenvolvimento de sistemas de gestão e automação de processos vem crescendo exponencialmente de forma que inúmeras opções encontram-se disponíveis no mercado. Cabe ao utilizador de tais recursos efetuar uma busca cuidadosa a fim de encontrar uma solução que mais se adéqüe às suas necessidades de modo a não se tornar escravo de uma tecnologia ultrapassada ou que constitui padrões engessados de utilização.</p>                    <p>Pudemos notar que foi possível suprir as necessidades expostas pelos requisitos do projeto através de mecanismos gratuitos como a tecnologia Java que permitiram a implementação do sistema de forma flexível e escalar. O uso da linguagem Java para o desenvolvimento do software de controle remoto não só supriu a carência de uma solução mais completa como possibilitou que essa nova tecnologia fosse portável, ou seja, independente de plataforma. Apesar da linguagem não oferecer todos os mecanismos necessários para o completo desenvolvimento do sistema, tendo sido necessária a adoção de técnicas como scripting para a realização de determinadas tarefas, ainda assim o Java se mostrou uma opção acertada por sua robustez e interoperabilidade.</p>                    <p>O LabManager versão 3.7.1 encontra-se hoje em funcionamento em duas escolas municipais atendendo a 960 alunos por semana e sendo controlado por dois professores da área de tecnologia, seu funcionamento tem sido monitorado e atualizações e correções de erros são disponibilizadas com frequência.</p>                    <p>Comparado às outras soluções pesquisadas podemos perceber que o software LabManager preenche uma lacuna no mercado de soluções de acesso remoto, pois apresenta recursos executáveis sob demanda através de uma interface intuitiva e de fácil configuração sem depender de complexos ambientes compostos por ferramentas muitas vezes pagas e cheias de políticas de configuração.</p>                    <p>O software desenvolvido no presente projeto ainda apresenta falhas, algumas das quais não representam prejuízo ao seu uso, mas sim más práticas de programação. Próximas implementações objetivam a correção dessas falhas e aplicação de padrões de projeto para seu desenvolvimento, no intuito de aumentar ainda mais sua escalabilidade. Por fim, atividades futuras preveem a implementação de controle de mouse e teclado de todos os computadores ao mesmo tempo a fim de solucionar problemas ocasionais que fogem do escopo do projeto do LabManager, também será implementado um recurso de análise e detecção de eventos do sistema no módulo cliente, a fim de solucionar possíveis problemas de forma transparente ao usuário.</p>',
            keywords: '',
            metadescription: '',
            data: '',
            autor: '',
            video: '',
            destaque: false
                    },
        {
            cod: 3,
            titulo: 'Cientista dará palestra gratuita sobre astronomia<br> em Marília neste domingo.',
            imagem1: 'astronomy.jpg',
            imagemAlt1: 'astronomia',
            imagem2: 'DrIvan.jpg',
            imagemAlt2: 'Dr. Ivan',
            artigo: '<p>Marília cediará um evento de astronomia que será realizado no domingo, dia 25 de setembro, com a presença do Dr. Ivan Glaucio Paulino Lima, cientista da Associação Universitária de Pesquisas Espaciais, parceira do Centro Ames de Pesquisas da NASA. O Dr. Ivan fará uma palestra gratuita aberta ao público no Espaço Cultural, na Avenida Sampaio Vidal s/n, em frente ao Senai, das 19:00 às 20:30. Logo após a palestra os astrônomos e o público presente se deslocarão para as adjacências do Espaço Cultural numa área ampla defronte ao laboratório de análises clínicas Biolabor.</p><p>No local serão montados telescópios que serão disponibilizados ao público para observação do céu das 20:30 às 23:00. Quem tiver equipamentos em casa, tais como binóculos, lunetas e telescópios poderá trazer ao evento, onde receberão instruções de como utilizá-los, mas não é preciso ter nenhum equipamento. Também não há necessidade de nenhum conhecimento prévio de astronomia, qualquer interessado de qualquer idade pode participar. Não é necessário comparecer à palestra para participar da observação astronômica.</p><p>O evento contará com a colaboração do Grupo de Estudo e Divulgação de Astronomia de Londrina - GEDAL (http://gedal.blogspot.com.br/) e com a presença de uma equipe de segurança. Em caso de céu nublado ou chuva, a palestra deverá ocorrer normalmente, apenas a observação astronômica será cancelada.</p>',
            keywords: '',
            metadescription: '',
            data: '',
            autor: '',
            video: '',
            destaque: false
                    }
                ];


    function add(id) {

        $.each(artigos, function (key, value) {

            var art = value;

            if (art.cod == id) {
                var titulomateria = art.titulo;
                var url = '<p>www.estudae.com.br/' + slugify(titulomateria) + '/</p>';
                var materia = art.artigo;
                var imagem1 = art.imagem1;
                var imagemAlt1 = art.imagemAlt1;
                var imagem2 = art.imagem2;
                var imagemAlt2 = art.imagemAlt2;
                var html = '<h1 class="titArtigo">' + titulomateria + '</h1>';

                html += '<article class="col80">';
                html += '<div class="destaque clearfix" ><img src="images/' + imagem1 + '" alt="' + imagemAlt1 + '"></div>'
                if (imagem2 != '') html += '<img class="cap" src="images/' + imagem2 + '" alt="' + imagemAlt2 + '">';
                html += '<div id="materia">' + materia + '</div>';
                html += '<br></article>';

                $('.esquerda').html(html);

            }

        });

    };

    /******* GET *******/
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });
    /*******************/

    add(data.cod);

});
