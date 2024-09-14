document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const edad = document.getElementById('edad').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    const imc = peso / (altura ** 2);
    const enForma = (imc >= 18.5 && imc <= 24.9);
    const sobrepeso = (imc >= 25);

    const resultado = document.getElementById('resultado');
    const imagenResultado = document.getElementById('imagenResultado');

    if (sobrepeso) {
        imagenResultado.src = 'https://i.postimg.cc/6Qch5S9X/images.jpg';
    } else {
        imagenResultado.src = 'https://i.postimg.cc/XJvkZ8Jy/1478873.png';
    }

    imagenResultado.style.display = 'block';
});

