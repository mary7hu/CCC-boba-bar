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
            if (window.screen.width > 1024) {
                gallery.style.transform = 'translate(calc(44.8vw - 935.5px))';
            } else {
                gallery.style.transform = 'translate(calc(50vw - 766px))';
            }
            state--;
        }
    });

    rightButton.addEventListener('click', (event) => {
        if (state == 2) {
            if (window.screen.width > 1024) {
                gallery.style.transform = 'translate(calc(89.6vw - 1871px))';
            } else {
                gallery.style.transform = 'translate(calc(100vw - 1532px))';
            }
            state++;
        } else if (state == 1) {
            if (window.screen.width > 1024) {
                gallery.style.transform = 'translate(calc(44.8vw - 935.5px))';
            } else {
                gallery.style.transform = 'translate(calc(50vw - 766px))';
            }
            state++;
        }
    });
});