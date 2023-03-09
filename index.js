const canvas  = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 512


console.log(c)

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = 'ChrisCourses_Pokemon/Images/Pellet_Town_Big.png'
console.log(image)

image.onload = () => {
    c.drawImage(image, -700, -500)
}

image.onerror = () => {
    console.error("Error al cargar la imagen");
  };