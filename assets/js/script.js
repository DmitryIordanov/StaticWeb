const image = document.querySelector('.image');

function getRandomSize() {
    return Math.floor(Math.random() * 200) + 150;
}

image.addEventListener('click', () => {
    image.style.width = `${getRandomSize()}px`;
    image.style.height = `${getRandomSize()}px`;
});