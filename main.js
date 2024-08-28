//  encriptar
function encrypText() {
  const inputText = document.getElementById("inputText").value;
  let encryptedText = '';

  for (let i = 0; i < inputText.length; i++) {
      encryptedText += String.fromCharCode(inputText.charCodeAt(i) + 3);
  }
  
  document.getElementById("outputText").value = encryptedText;
}

// desencriptar
function decryptText() {
  const inputText = document.getElementById("inputText").value;
  let decryptedText = '';

  for (let i = 0; i < inputText.length; i++) {
      decryptedText += String.fromCharCode(inputText.charCodeAt(i) - 3);
  }

  document.getElementById("outputText").value = decryptedText;
}

// copiar
function copyText() {
  const outputText = document.getElementById("outputText");
  outputText.select();
  document.execCommand("copy");

  alert("Texto copiado al portapapeles: " + outputText.value);
}
