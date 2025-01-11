document.getElementById('showButton').addEventListener('click', function() {
    const userInput = document.getElementById('textInput').value;
    const textDisplay = document.getElementById('textDisplay');
    const fontSize = document.getElementById('fontSize').value;
    const fontSelect = document.getElementById('fontSelect').value;
    const isBold = document.getElementById('bold').checked;
    const isItalic = document.getElementById('italic').checked;
        const textColor = document.getElementById('textColor').value;
    const shadowColor = document.getElementById('shadowColor').value;
    const shadowOffsetX = document.getElementById('shadowOffsetX').value;
    const shadowOffsetY = document.getElementById('shadowOffsetY').value;
    const shadowBlur = document.getElementById('shadowBlur').value;

    textDisplay.textContent = userInput;
    textDisplay.style.fontSize = fontSize + 'px'; // Устанавливаем размер шрифта
    textDisplay.style.fontFamily = fontSelect; // Устанавливаем шрифт
    textDisplay.style.fontWeight = isBold ? 'bold' : 'normal'; // Устанавливаем жирность
    textDisplay.style.fontStyle = isItalic ? 'italic' : 'normal'; // Устанавливаем курсив
    textDisplay.style.color = textColor; // Устанавливаем цвет текста

    // Устанавливаем тень текста
    textDisplay.style.textShadow = `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}`;

    textDisplay.style.display = 'block';
});

document.getElementById('saveButton').addEventListener('click', function() {
    const textDisplay = document.getElementById('textDisplay');
    
    html2canvas(textDisplay).then(function(canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'text-image.png';
        link.click();
    });
});

    