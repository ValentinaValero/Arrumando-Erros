  //Código do Menu lateral
  function openMenuLateral() {
    document.getElementById("menuLateral").style.width = "250px";
    document.getElementById("overlay").classList.add("show");
  }

  function closeMenuLateral() {
    document.getElementById("menuLateral").style.width = "0";
    document.getElementById("overlay").classList.remove("show");
  }