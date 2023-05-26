//Bloqueia botão e coloca em estado de espera e vice-versa
function btnCarregando(operacao, btn, nome) {
    if (operacao == true) {
        btn.disabled = true;
        btn.innerHTML = '●●●';
    } else if (operacao == false) {
        btn.disabled = false;
        btn.innerHTML = nome;
    }
}

//Inserir mensagem no corpo da página
function inserirMsg(elementGet, tipo, msgTitulo, msg) {
    switch (tipo) {
        case 'danger':
            icon = 'fa-exclamation-triangle';
            break;
        case 'success':
            icon = 'fa-check';
            break;
        default:
            icon = '';
            break;
    }


    if (elementGet.querySelector('.msgJs')) {
        elementGet = elementGet.querySelector('.msgJs');
    } else {
        msgHTML = '<div class="msgJs"></div>';
        elementGet.insertAdjacentHTML('afterbegin', msgHTML);
        elementGet = elementGet.querySelector('.msgJs');
    }
    msgHTML = '<div class="alert alert-'
        + tipo
        + ' alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><h5><i class="icon fas '
        + icon
        + '"></i> '
        + msgTitulo
        + '</h5>'
        + msg
        + '</div>';
    elementGet.innerHTML = msgHTML;
}