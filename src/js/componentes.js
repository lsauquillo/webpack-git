export const saludar = (nombre) => {
  console.log('Creando una etiqueta h1 con el saludo...');
  const h1 = document.createElement('h1');
  h1.innerText = `Hola, soy ${nombre}`;
  document.body.append(h1)
}