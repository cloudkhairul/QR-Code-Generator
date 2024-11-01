let qrData = document.querySelector('#qrData')
let imgContainer = document.querySelector('#imgContainer')
let qrImage = document.querySelector('#qrImage')
let button = document.querySelector('#button')
let download = document.querySelector('#download')
function generate() {
  if (qrData.value === '') {
    pass
  } else {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrData.value;
    qrImage.style.display = 'inline-block';
  }
}
download.addEventListener('click', async () => {
  const response = await fetch(qrImage.src);
  const blob = await response.blob();
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'qrcode';
  downloadLink.click();
})
