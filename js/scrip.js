function cifrar() {
    const mensaje = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;
    const resultado = vigenereCipher(mensaje, clave);
    document.getElementById('resultado').value = resultado;
}

function descifrar() {
    const mensaje = document.getElementById('resultado').value;
    const clave = document.getElementById('clave').value;
    const resultado = vigenereCipher(mensaje, clave, true);
    document.getElementById('resultado').value = resultado;
}

function vigenereCipher(text, key, decrypt = false) {
    const keyLength = key.length;
    const keyChars = key.toUpperCase();
    const result = [];

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const keyChar = keyChars[i % keyLength].toUpperCase();
        const keyCode = keyChar.charCodeAt(0) - 'A'.charCodeAt(0);

        let newCharCode;

        if (isLetter(char)) {
            const base = isUpperCase(char) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            newCharCode = (char.charCodeAt(0) - base + (decrypt ? -keyCode : keyCode) + 26) % 26 + base;
        } else if (isDigit(char)) {
            newCharCode = (char.charCodeAt(0) - '0'.charCodeAt(0) + (decrypt ? -keyCode : keyCode) + 10) % 10 + '0'.charCodeAt(0);
        } else {
            // Para caracteres especiales, solo desplazamos su código Unicode
            newCharCode = char.charCodeAt(0) + (decrypt ? -keyCode : keyCode);
        }

        result.push(String.fromCharCode(newCharCode));
    }

    return result.join('');
}

function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}

function isDigit(char) {
    return /[0-9]/.test(char);
}

function isUpperCase(char) {
    return char === char.toUpperCase();
}

// Función para copiar el contenido del textarea al portapapeles
function copiarAlPortapapeles() {
    const textarea = document.getElementById('resultado');
    textarea.select(); // Seleccionar el texto en el textarea
    document.execCommand('copy'); // Ejecutar el comando de copiar
    alert('Texto copiado al portapapeles!');
}

// Función para pegar el contenido del portapapeles en el campo de mensaje
function pegarDelPortapapeles() {
    navigator.clipboard.readText()
        .then(text => {
            document.getElementById('mensaje').value = text;
        })
        .catch(err => {
            console.error('No se pudo acceder al portapapeles: ', err);
        });
}