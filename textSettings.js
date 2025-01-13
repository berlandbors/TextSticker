// Общие элементы
const textInput = document.getElementById('textInput');
const textDisplay = document.getElementById('textDisplay');
const message = document.getElementById('message');
const showButton = document.getElementById('showButton');
const saveButton = document.getElementById('saveButton');

// Модальные окна
const modal = document.getElementById('settingsModal');
const settingsButton = document.getElementById('settingsButton');
const closeModal = document.querySelector('.close');
const bgSettingsModal = document.getElementById('bgSettingsModal');
const bgSettingsButton = document.getElementById('bgSettingsButton');
const closeBgModal = document.querySelector('.close-bg');

// Открытие/закрытие модальных окон
settingsButton.addEventListener('click', () => modal.style.display = 'block');
closeModal.addEventListener('click', () => modal.style.display = 'none');
bgSettingsButton.addEventListener('click', () => bgSettingsModal.style.display = 'block');
closeBgModal.addEventListener('click', () => bgSettingsModal.style.display = 'none');
window.addEventListener('click', (event) => {
    if (event.target === modal) modal.style.display = 'none';
    if (event.target === bgSettingsModal) bgSettingsModal.style.display = 'none';
});

// Настройки текста
const fontSize = document.getElementById('fontSize');
const fontSizeValue = document.getElementById('fontSizeValue');
const textColor = document.getElementById('textColor');
const textColorPreview = document.getElementById('textColorPreview');
const shadowColor = document.getElementById('shadowColor');
const shadowColorPreview = document.getElementById('shadowColorPreview');
const shadowOffsetX = document.getElementById('shadowOffsetX');
const shadowOffsetXValue = document.getElementById('shadowOffsetXValue');
const shadowOffsetY = document.getElementById('shadowOffsetY');
const shadowOffsetYValue = document.getElementById('shadowOffsetYValue');
const shadowBlur = document.getElementById('shadowBlur');
const shadowBlurValue = document.getElementById('shadowBlurValue');
const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const applyTextSettings = document.getElementById('applyTextSettings');

// Обновление текста
fontSize.addEventListener('input', () => fontSizeValue.textContent = fontSize.value);
textColor.addEventListener('input', () => textColorPreview.style.backgroundColor = textColor.value);
shadowColor.addEventListener('input', () => shadowColorPreview.style.backgroundColor = shadowColor.value);
shadowOffsetX.addEventListener('input', () => shadowOffsetXValue.textContent = shadowOffsetX.value);
shadowOffsetY.addEventListener('input', () => shadowOffsetYValue.textContent = shadowOffsetY.value);
shadowBlur.addEventListener('input', () => shadowBlurValue.textContent = shadowBlur.value);

// Применение текста
applyTextSettings.addEventListener('click', () => {
    textDisplay.style.fontSize = `${fontSize.value}px`;
    textDisplay.style.fontFamily = document.getElementById('fontSelect').value;
    textDisplay.style.color = textColor.value;
    textDisplay.style.textShadow = `${shadowOffsetX.value}px ${shadowOffsetY.value}px ${shadowBlur.value}px ${shadowColor.value}`;
    textDisplay.style.fontWeight = bold.checked ? 'bold' : 'normal';
    textDisplay.style.fontStyle = italic.checked ? 'italic' : 'normal';
    modal.style.display = 'none';
});

// Настройки фона
const bgColor1 = document.getElementById('bgColor1');
const bgColor1Preview = document.getElementById('bgColor1Preview');
const bgColor2 = document.getElementById('bgColor2');
const bgColor2Preview = document.getElementById('bgColor2Preview');
const bgGradientDirection = document.getElementById('bgGradientDirection');
const applyBgSettings = document.getElementById('applyBgSettings');

// Обновление фона
bgColor1.addEventListener('input', () => bgColor1Preview.style.backgroundColor = bgColor1.value);
bgColor2.addEventListener('input', () => bgColor2Preview.style.backgroundColor = bgColor2.value);

// Применение фона
applyBgSettings.addEventListener('click', () => {
    textDisplay.style.backgroundImage = `linear-gradient(${bgGradientDirection.value}, ${bgColor1.value}, ${bgColor2.value})`;
    bgSettingsModal.style.display = 'none';
});

// Показ текста
showButton.addEventListener('click', () => {
    const userInput = textInput.value.trim();
    if (!userInput) {
        message.textContent = 'Пожалуйста, введите текст.';
        return;
    }
    textDisplay.textContent = userInput;
    
    textDisplay.style.display = 'block';
    message.textContent = '';
});

// Сохранение текста как изображения
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