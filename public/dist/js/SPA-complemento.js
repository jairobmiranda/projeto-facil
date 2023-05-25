
function btnCarregando(operacao, btn, nome) {
    if (operacao == true) {
        btn.disabled = true;
        btn.innerHTML = '●●●';
    } else if(operacao == false) {
        btn.disabled = false;
        btn.innerHTML = nome;
    }
}