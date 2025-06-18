// Элементы для ввода текста
const headerInput = document.getElementById('headerInput');
const subtitleInput = document.getElementById('subtitleInput');
const mainTextInput = document.getElementById('mainTextInput');

// Элементы вывода
const header = document.getElementById('header');
const subtitle = document.getElementById('subtitle');
const mainText = document.getElementById('mainText');
const textDisplay = document.getElementById('textDisplay');
const message = document.getElementById('message');

// --- Настройки заголовка
const headerFontSize = document.getElementById('headerFontSize');
const headerFontSizeValue = document.getElementById('headerFontSizeValue');
const headerColor = document.getElementById('headerColor');
const headerColorValue = document.getElementById('headerColorValue');
const headerBold = document.getElementById('headerBold');
const headerItalic = document.getElementById('headerItalic');

// --- Настройки подзаголовка
const subtitleFontSize = document.getElementById('subtitleFontSize');
const subtitleFontSizeValue = document.getElementById('subtitleFontSizeValue');
const subtitleColor = document.getElementById('subtitleColor');
const subtitleColorValue = document.getElementById('subtitleColorValue');
const subtitleBold = document.getElementById('subtitleBold');
const subtitleItalic = document.getElementById('subtitleItalic');

// --- Настройки основного текста
const mainFontSize = document.getElementById('mainFontSize');
const mainFontSizeValue = document.getElementById('mainFontSizeValue');
const mainColor = document.getElementById('mainColor');
const mainColorValue = document.getElementById('mainColorValue');
const mainBold = document.getElementById('mainBold');
const mainItalic = document.getElementById('mainItalic');

// --- Общие элементы
const backgroundColor = document.getElementById('backgroundColor');
const applySettings = document.getElementById('applySettings');
const showButton = document.getElementById('showButton');
const saveButton = document.getElementById('saveButton');
const saveTextButton = document.getElementById('saveTextButton');
const loadTextButton = document.getElementById('loadTextButton');
const fileInput = document.getElementById('fileInput');

// --- Синхронизация отображения значений слайдеров и цветов
headerFontSize.addEventListener('input', () => headerFontSizeValue.textContent = headerFontSize.value);
headerColor.addEventListener('input', () => headerColorValue.textContent = headerColor.value);
subtitleFontSize.addEventListener('input', () => subtitleFontSizeValue.textContent = subtitleFontSize.value);
subtitleColor.addEventListener('input', () => subtitleColorValue.textContent = subtitleColor.value);
mainFontSize.addEventListener('input', () => mainFontSizeValue.textContent = mainFontSize.value);
mainColor.addEventListener('input', () => mainColorValue.textContent = mainColor.value);
backgroundColor.addEventListener('input', () => {
    textDisplay.style.backgroundColor = backgroundColor.value;
});

// --- Показать текст
showButton.addEventListener('click', () => {
    if (!headerInput.value.trim() && !subtitleInput.value.trim() && !mainTextInput.value.trim()) {
        message.textContent = 'Пожалуйста, введите хотя бы один блок текста.';
        return;
    }
    header.textContent = headerInput.value.trim();
    subtitle.textContent = subtitleInput.value.trim();
    mainText.textContent = mainTextInput.value.trim();
    textDisplay.style.display = 'block';
    message.textContent = '';
});

// --- Применить стили
applySettings.addEventListener('click', () => {
    // Заголовок
    header.style.fontSize = `${headerFontSize.value}px`;
    header.style.color = headerColor.value;
    header.style.fontWeight = headerBold.checked ? 'bold' : 'normal';
    header.style.fontStyle = headerItalic.checked ? 'italic' : 'normal';

    // Подзаголовок
    subtitle.style.fontSize = `${subtitleFontSize.value}px`;
    subtitle.style.color = subtitleColor.value;
    subtitle.style.fontWeight = subtitleBold.checked ? 'bold' : 'normal';
    subtitle.style.fontStyle = subtitleItalic.checked ? 'italic' : 'normal';

    // Основной текст
    mainText.style.fontSize = `${mainFontSize.value}px`;
    mainText.style.color = mainColor.value;
    mainText.style.fontWeight = mainBold.checked ? 'bold' : 'normal';
    mainText.style.fontStyle = mainItalic.checked ? 'italic' : 'normal';

    // Фон
    textDisplay.style.backgroundColor = backgroundColor.value;

    message.textContent = 'Стили применены!';
});

// --- Выравнивание
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

// --- Сохранение текста как txt
saveTextButton.addEventListener('click', () => {
    const data = {
        header: headerInput.value.trim(),
        subtitle: subtitleInput.value.trim(),
        text: mainTextInput.value.trim()
    };
    if (!data.header && !data.subtitle && !data.text) {
        message.textContent = 'Пожалуйста, введите текст перед сохранением.';
        return;
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'textSticker.json';
    link.click();
    message.textContent = 'Текст успешно сохранён!';
});

// --- Загрузка текста из файла
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
        } catch (e) {
            message.textContent = 'Ошибка формата файла.';
        }
    };
    reader.readAsText(file);
});

// --- Сохранение как изображение (требует html2canvas)
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