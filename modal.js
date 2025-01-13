// Модальные окна
const modal = document.getElementById('settingsModal');
const settingsButton = document.getElementById('settingsButton');
const closeModal = document.querySelector('.close');

const bgSettingsModal = document.getElementById('bgSettingsModal');
const bgSettingsButton = document.getElementById('bgSettingsButton');
const closeBgModal = document.querySelector('.close-bg');

const textColorSettingsModal = document.getElementById('textColorSettingsModal');
const textColorSettingsButton = document.getElementById('textColorSettingsButton');
const closeTextColorModal = document.querySelector('.close-text-color');

// Открытие и закрытие модального окна для текста
settingsButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Открытие и закрытие модального окна для фона
bgSettingsButton.addEventListener('click', () => {
    bgSettingsModal.style.display = 'block';
});

closeBgModal.addEventListener('click', () => {
    bgSettingsModal.style.display = 'none';
});

// Открытие и закрытие модального окна для цвета текста
textColorSettingsButton.addEventListener('click', () => {
    textColorSettingsModal.style.display = 'block';
});

closeTextColorModal.addEventListener('click', () => {
    textColorSettingsModal.style.display = 'none';
});

// Закрытие модальных окон при клике вне области
window.addEventListener('click', (event) => {
    if (event.target === modal) modal.style.display = 'none';
    if (event.target === bgSettingsModal) bgSettingsModal.style.display = 'none';
    if (event.target === textColorSettingsModal) textColorSettingsModal.style.display = 'none';
});