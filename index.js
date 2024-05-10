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
            } else if (window.screen.width > 720) {
                gallery.style.transform = 'translate(calc(50vw - 766px))';
            } else {
                gallery.style.transform = 'translate(calc(-100vw))';
            }
            state--;
        } else if (state == 1) {
            if (window.screen.width <= 720) {
                state = 3;
                gallery.style.transform = 'translate(calc(-200vw))';
            }
        }
    });

    rightButton.addEventListener('click', (event) => {
        if (state == 2) {
            if (window.screen.width > 1024) {
                gallery.style.transform = 'translate(calc(89.6vw - 1871px))';
            } else if (window.screen.width > 720) {
                gallery.style.transform = 'translate(calc(100vw - 1532px))';
            } else {
                gallery.style.transform = 'translate(calc(-200vw))';
            }
            state++;
        } else if (state == 1) {
            if (window.screen.width > 1024) {
                gallery.style.transform = 'translate(calc(44.8vw - 935.5px))';
            } else if (window.screen.width > 720) {
                gallery.style.transform = 'translate(calc(50vw - 766px))';
            } else {
                gallery.style.transform = 'translate(calc(-100vw))';
            }
            state++;
        } else if (state == 3) {
            if (window.screen.width <= 720) {
                state = 1;
                gallery.style.transform = 'translate(calc(0px))';
            }
        }
    });
});