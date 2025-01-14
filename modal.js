const modal = document.getElementById('settingsModal');
const settingsButton = document.getElementById('settingsButton');
const closeModal = document.querySelector('.close');

// Открытие модального окна
settingsButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие при клике вне модального окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});