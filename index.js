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
    c.drawImage(image, -530, -580);
  }

playerImage.onload = () => {
    c.drawImage(playerImage, 
        canvas.width / 2 - playerImage.width / 2, 
        canvas.height / 2 - playerImage.height / 2);
  }


// Manejador de eventos para el caso de que una imagen no se cargue correctamente
image.onerror = () => {
    console.error("Error al cargar la imagen");
  };

console.log(playerImage)
console.log(playerImage.x)
console.log(playerImage.y)
