window.addEventListener('DOMContentLoaded', async(event) => {
    const gallery = document.getElementById('gallery');
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    let state = 2;

    leftButton.addEventListener('click', (event) => {
        if (state == 2) {
            gallery.style.transform = 'translate(calc(0px))';
            state--;
        } else if (state == 3) {
            gallery.style.transform = 'translate(calc(44.8vw - 935.5px))';
            state--;
        }
    });

    rightButton.addEventListener('click', (event) => {
        if (state == 2) {
            gallery.style.transform = 'translate(calc(89.6vw - 1871px))';
            state++;
        } else if (state == 1) {
            gallery.style.transform = 'translate(calc(44.8vw - 935.5px))';
            state++;
        }
    });
});