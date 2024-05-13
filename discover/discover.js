function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
   // }
   // else {
   //     html.classList.add('light')
    //}
    const image = document.querySelector("#profile img")
    if(html.classList.contains("light")) {
        image.setAttribute("src","./assets/assets/25302586.jpg" )
    }
     else {
        image.setAttribute("src", "./assets/assets/johnny_black.jpg")
         }
}