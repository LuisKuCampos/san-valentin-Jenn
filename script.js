onload = () => {
  document.body.classList.remove("container");
};


// --- LÓGICA DE LA PROPUESTA ---

let noButtonClickCount = 0;
let noButtonState = 0;

// Configuración inicial
document.getElementById('gifContainer').style.display = 'block';

// ACIIÓN BOTÓN SÍ
document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar tristes y mostrar felices
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar botones y pregunta
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar mensaje
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Sabía que dirías que sí! Te amo ❤️';

    // Secuencia de GIFs felices
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 2000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 4000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 6000);
});

// ACCIÓN BOTÓN NO (La lógica original para que huya/crezca)
document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';
            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Estás segura?';
            document.getElementById('siBtn').style.fontSize = '1.5rem';
            document.getElementById('siBtn').style.padding = '20px 40px';
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            document.getElementById('noBtn').innerHTML = '¡¿Realmente estás segura?!';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            document.getElementById('siBtn').style.fontSize = '2rem';
            document.getElementById('siBtn').style.padding = '30px 50px';
            noButtonState++;
            break;

        case 2:
            document.getElementById('noBtn').innerHTML = 'Estás segura de verdad, ¿eh?';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';
            document.getElementById('siBtn').style.fontSize = '2.5rem';
            document.getElementById('siBtn').style.padding = '40px 60px';
            noButtonState++;
            break;
        
        case 3:
            document.getElementById('noBtn').innerHTML = '¿De veritas?';
            document.getElementById('siBtn').style.fontSize = '3rem';
            document.getElementById('siBtn').style.padding = '50px 70px';
            noButtonState++;
            break;
        
        case 4:
            document.getElementById('noBtn').innerHTML = '¡Por favor di que sí!';
            document.getElementById('siBtn').style.fontSize = '3.5rem';
            document.getElementById('siBtn').style.padding = '60px 80px';
            noButtonState++;
            break;

        case 5:
            document.getElementById('noBtn').innerHTML = 'Me pondré muy triste...';
            document.getElementById('siBtn').style.fontSize = '4rem';
            document.getElementById('siBtn').style.padding = '70px 90px';
            noButtonState++;
            break;

        case 6:
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy triste';
            document.getElementById('siBtn').style.fontSize = '5rem';
            document.getElementById('siBtn').style.padding = '80px 100px';
            noButtonState++;
            break;

        case 7:
             // Reinicio o estado final
            document.getElementById('noBtn').innerHTML = 'Bueno, ya... por favor ❤️';
            document.getElementById('siBtn').style.fontSize = '6rem';
            document.getElementById('siBtn').style.padding = '100px 140px';
            noButtonState = 0; // O puedes dejar que siga creciendo
            break;
            
        default:
            break;
    }
});