function carregar() {
   var data = new Date()
   var hora = data.getHours()
   var min = data.getMinutes()

   var msg = document.getElementById("msg")
   var img = document.getElementById("img")

   msg.innerText = `agora são ${hora} horas e ${min} minutos`

   if (hora >= 5 && hora <= 11) {
      img.src = "imgs/manha.png"
      document.querySelector("body").style.backgroundColor = "#fffad4"
   } else {
      if (hora >= 12 && hora <= 17) {
         img.src = "imgs/tarde.png"
         document.querySelector("body").style.backgroundColor = "#f1b964"
      } else {
         "imgs/noite.png"
         document.querySelector("body").style.backgroundColor = "#021a34"
      }
   }
}