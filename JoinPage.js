window.onload = function () {
    const defaultWidth = 1440px;
    const scale = window.screen.width / defaultWidth;
    if (scale !== 1) {
        document.body.style.transform = 'scale(' + scale + ')';
    }
}