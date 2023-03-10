const canvas  = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 512


console.log(c)

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = 'ChrisCourses_Pokemon/Images/Pellet_Town_Big.png'

const playerImage = new Image()
playerImage.src = 'ChrisCourses_Pokemon/Images/playerDown.png'

image.onload = () => {
    c.drawImage(image, -525, -500);
  }

playerImage.onload = () => {
    c.drawImage(playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height, 
        canvas.width / 2 - playerImage.width / 4 / 2, 
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height) 
  }

  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'a':
        console.log("se presiono la letra a")
        break
      case 'w':
        console.log("se presiono la letra w")
        break
      case 's':
        console.log("se presiono la letra s")
        break
      case 'd':
        console.log("se presiono la letra d")
        break
    }
  })


// Manejador de eventos para el caso de que una imagen no se cargue correctamente
image.onerror = () => {
    console.error("Error al cargar la imagen");
  };

console.log(playerImage)
console.log(playerImage.x)
console.log(playerImage.y)
