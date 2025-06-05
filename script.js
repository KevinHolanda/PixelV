//Busca um elemento no HTML que salva em numa variavel
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

//Função que vai abrir e fechar menu
function abreFechamenu(){


//Se o menu está fechado
if(menu.classList.contains("menu-fechado")){
   //Abrir menu
   menu.classList.remove("menu-fechado")

   //Mostrar icone X
   iconeX.style.display = "inline"

   //Esconder o icone barras
   iconeBarras.style.display = "none"
}
//Senão
else{
   //Fechar o menu
   menu.classList.add("menu-fechado")

   //Esconder o icone x
   iconeX.style.display = "none"

   //Mostrar icone barras
   iconeBarras.style.display = "inline"
 }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    //Mostrar icone X
    iconeX.style.display = "inline"

    //Esconder icone barras
    iconeBarras.style.display = "none"
}