const menu = document.getElementById("menu");

function abrir_e_fechar_menu(clique) {
    if(clique.isTrusted) {
        clique.preventDefault();
        menu.classList.toggle("menu");
    }
}

menu.addEventListener("click", abrir_e_fechar_menu(event));

//menu.addEventListener("touchstart", abrir_e_fechar_menu(event));
