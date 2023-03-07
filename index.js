const canvas  = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 512


console.log(c)

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = '/workspaces/Project-Pokimon/Chris Courses - Pokemon/Images/Pellet Town.png'
console.log(image)

//c.drawImage('/workspaces/Project-Pokimon/Chris Courses - Pokemon/Images/Pellet Town.png')