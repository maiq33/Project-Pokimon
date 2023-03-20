const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 512;

console.log(c);

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = 'ChrisCourses_Pokemon/Images/Pellet_Town_Big.png';

const playerImage = new Image();
playerImage.src = 'ChrisCourses_Pokemon/Images/playerDown.png';

// Función para inicializar el juego
function init() {
  // Dibuja la imagen de fondo
  c.drawImage(image, -525, -500);

  // Dibuja la imagen del jugador
  c.drawImage(playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height);
}

// Manejador de eventos para el caso de que una imagen no se cargue correctamente
image.onerror = () => {
  console.error("Error al cargar la imagen");
};

// Manejador de eventos para cuando todas las imágenes se hayan cargado
let numImagesLoaded = 0;
const totalImages = 2; // Actualizar si se agregan o eliminan imágenes
const onImageLoaded = () => {
  numImagesLoaded++;
  if (numImagesLoaded === totalImages) {
    init();
    animate();
  }
};
image.onload = onImageLoaded;
playerImage.onload = onImageLoaded;

console.log(playerImage);
console.log(playerImage.x);
console.log(playerImage.y);

function animate() {
  window.requestAnimationFrame(animate);
  console.log('animate');
  // Aquí puedes agregar cualquier código de animación adicional que necesites
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
});
