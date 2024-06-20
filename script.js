function botaodaluz() {
  const html = document.documentElement
  //   if (html.classList.contains("Claro")) {
  //    html.classList.remove("Claro")
  //} else {
  //  html.classList.add("Claro")
  //  }
  html.classList.toggle(`Claro`)
  const img = document.querySelector(`#perfil img`)
  if (html.classList.contains("Claro")) {
    img.setAttribute("src", "./assets/Avatarclarinho.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
