const createBtn = document.getElementById('create');
const downloadBtn = document.getElementById('download');
const input = document.getElementById('link');
const code = document.getElementById('code');
const qrImg = document.querySelector('.qr-img');

createBtn.addEventListener('click', function (event) {
    event.preventDefault();
    createBtn.classList.add('active-create');
    let value = input.value;
    if(value.length > 0 && typeof value != 'number') {
        let src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + value;
        setTimeout(function(e) {
            code.firstElementChild.src = src;
            createBtn.classList.remove('active-create');
        }, 500);
    }
});

downloadBtn.addEventListener('click', async function (event) {
    const response = await fetch(code.firstElementChild.src);
    const blob = await response.blob();
    downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'qr-code.png';
    downloadLink.click();
});