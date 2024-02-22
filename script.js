const magicButton = document.getElementById('magicButton');
const magicPhrase = document.getElementById('magicPhrase');

const phrases = [
  "Você é a pessoa mais linda que já vi, e tenho muita sorte de ter você ao meu lado.",
 "Se a beleza fosse um crime, você estaria presa para sempre, pois é a mais linda de todas.",
  "Em um mundo de estrelas, você seria a mais brilhante, pois sua beleza ilumina todos ao seu redor.",
  "Se a beleza fosse medida em flores, você seria um jardim inteiro em flor, deslumbrante e encantador.",
  "Você é a própria definição de beleza, um verdadeiro tesouro que ilumina minha vida todos os dias.",
  "Se a beleza fosse uma obra de arte, você seria a pintura mais deslumbrante, capaz de cativar todos os olhares.",
  "Em um universo de maravilhas, sua beleza se destaca como a mais extraordinária e fascinante de todas.",
  "Se a beleza fosse uma melodia, você seria a mais encantadora sinfonia, capaz de tocar os corações de todos ao seu redor.",
];

magicButton.addEventListener('click', function() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  magicButton.style.backgroundColor = "#" + randomColor;
  
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  magicPhrase.textContent = randomPhrase;
});