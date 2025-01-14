const fontSize = document.getElementById('fontSize');
const fontSizeValue = document.getElementById('fontSizeValue');
const textColor = document.getElementById('textColor');
const textColorValue = document.getElementById('textColorValue');
const shadowColor = document.getElementById('shadowColor');
const shadowColorValue = document.getElementById('shadowColorValue');
const shadowOffsetX = document.getElementById('shadowOffsetX');
const shadowOffsetXValue = document.getElementById('shadowOffsetXValue');
const shadowOffsetY = document.getElementById('shadowOffsetY');
const shadowOffsetYValue = document.getElementById('shadowOffsetYValue');
const shadowBlur = document.getElementById('shadowBlur');
const shadowBlurValue = document.getElementById('shadowBlurValue');
const applySettings = document.getElementById('applySettings');
const showButton = document.getElementById('showButton');
const saveButton = document.getElementById('saveButton');
const textDisplay = document.getElementById('textDisplay');
const message = document.getElementById('message');

// Обновление значений
fontSize.addEventListener('input', () => fontSizeValue.textContent = fontSize.value);
textColor.addEventListener('input', () => textColorValue.textContent = textColor.value);
shadowColor.addEventListener('input', () => shadowColorValue.textContent = shadowColor.value);
shadowOffsetX.addEventListener('input', () => shadowOffsetXValue.textContent = shadowOffsetX.value);
shadowOffsetY.addEventListener('input', () => shadowOffsetYValue.textContent = shadowOffsetY.value);
shadowBlur.addEventListener('input', () => shadowBlurValue.textContent = shadowBlur.value);
const backgroundColor = document.getElementById('backgroundColor');
backgroundColor.addEventListener('input', () => {
    textDisplay.style.backgroundColor = backgroundColor.value;
});

// Применение настроек
applySettings.addEventListener('click', () => {
    textDisplay.style.fontSize = `${fontSize.value}px`;
    textDisplay.style.fontFamily = document.getElementById('fontSelect').value;
    textDisplay.style.color = textColor.value;
    textDisplay.style.textShadow = `${shadowOffsetX.value}px ${shadowOffsetY.value}px ${shadowBlur.value}px ${shadowColor.value}`;
    textDisplay.style.fontWeight = document.getElementById('bold').checked ? 'bold' : 'normal';
    textDisplay.style.fontStyle = document.getElementById('italic').checked ? 'italic' : 'normal';
    modal.style.display = 'none';
});

// Выравнивание текста
document.getElementById('alignLeft').addEventListener('click', () => textDisplay.style.textAlign = 'left');
document.getElementById('alignCenter').addEventListener('click', () => textDisplay.style.textAlign = 'center');
document.getElementById('alignRight').addEventListener('click', () => textDisplay.style.textAlign = 'right');

// Показ текста
showButton.addEventListener('click', () => {
    const userInput = document.getElementById('textInput').value.trim();
    if (!userInput) {
        message.textContent = 'Пожалуйста, введите текст.';
        return;
    }
    textDisplay.textContent = userInput;
    textDisplay.style.display = 'block';
    message.textContent = '';
});

// Сохранение как изображение
saveButton.addEventListener('click', () => {
    html2canvas(textDisplay).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'TextSticker.png';
        link.click();
        message.textContent = 'Картинка успешно сохранена!';
    }).catch(() => {
        message.textContent = 'Ошибка при сохранении изображения.';
    });
});