// Ввод и отображение
const headerInput = document.getElementById('headerInput');
const subtitleInput = document.getElementById('subtitleInput');
const mainTextInput = document.getElementById('mainTextInput');

const header = document.getElementById('header');
const subtitle = document.getElementById('subtitle');
const mainText = document.getElementById('mainText');
const textDisplay = document.getElementById('textDisplay');
const message = document.getElementById('message');

// Настройки для заголовка
const headerFontSize = document.getElementById('headerFontSize');
const headerColor = document.getElementById('headerColor');
const headerBold = document.getElementById('headerBold');
const headerItalic = document.getElementById('headerItalic');
const headerFont = document.getElementById('headerFontSelect');

// Настройки для подзаголовка
const subtitleFontSize = document.getElementById('subtitleFontSize');
const subtitleColor = document.getElementById('subtitleColor');
const subtitleBold = document.getElementById('subtitleBold');
const subtitleItalic = document.getElementById('subtitleItalic');
const subtitleFont = document.getElementById('subtitleFontSelect');

// Настройки для текста
const mainFontSize = document.getElementById('mainFontSize');
const mainColor = document.getElementById('mainColor');
const mainBold = document.getElementById('mainBold');
const mainItalic = document.getElementById('mainItalic');
const mainFont = document.getElementById('mainFontSelect');

// Общие
const backgroundColor = document.getElementById('backgroundColor');
const applySettings = document.getElementById('applySettings');
const showButton = document.getElementById('showButton');
const saveButton = document.getElementById('saveButton');
const saveTextButton = document.getElementById('saveTextButton');
const loadTextButton = document.getElementById('loadTextButton');
const fileInput = document.getElementById('fileInput');

// Показать текст
showButton.addEventListener('click', () => {
    header.textContent = headerInput.value.trim();
    subtitle.textContent = subtitleInput.value.trim();
    mainText.textContent = mainTextInput.value.trim();
    textDisplay.style.display = 'block';
    message.textContent = '';
});

// Применить стили
applySettings.addEventListener('click', () => {
    // Заголовок
    header.style.fontSize = `${headerFontSize.value}px`;
    header.style.color = headerColor.value;
    header.style.fontWeight = headerBold.checked ? 'bold' : 'normal';
    header.style.fontStyle = headerItalic.checked ? 'italic' : 'normal';
    header.style.fontFamily = headerFont.value;

    // Подзаголовок
    subtitle.style.fontSize = `${subtitleFontSize.value}px`;
    subtitle.style.color = subtitleColor.value;
    subtitle.style.fontWeight = subtitleBold.checked ? 'bold' : 'normal';
    subtitle.style.fontStyle = subtitleItalic.checked ? 'italic' : 'normal';
    subtitle.style.fontFamily = subtitleFont.value;

    // Текст
    mainText.style.fontSize = `${mainFontSize.value}px`;
    mainText.style.color = mainColor.value;
    mainText.style.fontWeight = mainBold.checked ? 'bold' : 'normal';
    mainText.style.fontStyle = mainItalic.checked ? 'italic' : 'normal';
    mainText.style.fontFamily = mainFont.value;

    // Фон
    textDisplay.style.backgroundColor = backgroundColor.value;

    message.textContent = 'Стили применены!';
});

// Выравнивание
document.getElementById('alignLeft').addEventListener('click', () => {
    header.style.textAlign = 'left';
    subtitle.style.textAlign = 'left';
    mainText.style.textAlign = 'left';
});
document.getElementById('alignCenter').addEventListener('click', () => {
    header.style.textAlign = 'center';
    subtitle.style.textAlign = 'center';
    mainText.style.textAlign = 'center';
});
document.getElementById('alignRight').addEventListener('click', () => {
    header.style.textAlign = 'right';
    subtitle.style.textAlign = 'right';
    mainText.style.textAlign = 'right';
});

// Сохранение текста
saveTextButton.addEventListener('click', () => {
    const data = {
        header: headerInput.value.trim(),
        subtitle: subtitleInput.value.trim(),
        text: mainTextInput.value.trim()
    };
    if (!data.header && !data.subtitle && !data.text) {
        message.textContent = 'Введите текст перед сохранением.';
        return;
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'textSticker.json';
    link.click();
    message.textContent = 'Текст успешно сохранён!';
});

// Загрузка текста
loadTextButton.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        try {
            const data = JSON.parse(reader.result);
            headerInput.value = data.header || '';
            subtitleInput.value = data.subtitle || '';
            mainTextInput.value = data.text || '';
            message.textContent = 'Текст успешно загружен!';
        } catch {
            message.textContent = 'Ошибка формата файла.';
        }
    };
    reader.readAsText(file);
});

// Экспорт в PNG
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