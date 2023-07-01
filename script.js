// Add target="_blank" attribute to all links to open them in a new tab
const links = document.querySelectorAll('a');
links.forEach(link => link.setAttribute('target', '_blank'));

// Share page functionality
function sharePage() {
  const modal = document.getElementById('share-modal');
  modal.style.display = 'block';
  generateQRCode();
}

function closeModal() {
  const modal = document.getElementById('share-modal');
  modal.style.display = 'none';
}

// Generate QR Code and save it as a PNG image
function generateQRCode() {
  const qrCodeContainer = document.getElementById('qrcode');
  const bioLinkURL = 'https://chinmay-mahata-bio.my.canva.site/my-bio'; // Replace with your actual bio link URL

  // Create a new QRious instance
  const qr = new QRious({
    value: bioLinkURL,
    size: 128
  });

  // Convert the QR code to a Data URL
  const qrDataURL = qr.toDataURL();

  // Create an <img> element to display the QR code
  const qrImage = document.createElement('img');
  qrImage.src = qrDataURL;
  qrImage.alt = 'QR Code';

  // Append the QR code image to the container
  qrCodeContainer.innerHTML = '';
  qrCodeContainer.appendChild(qrImage);

  // Create a link and download the QR code image as a PNG file
  const downloadLink = document.createElement('a');
  downloadLink.href = qrDataURL;
  downloadLink.download = 'qr_code.png';
  downloadLink.style.display = 'none';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}


// Copy the bio link URL to the clipboard
function copyLink() {
  const bioLinkURL = 'https://chinmay-mahata-bio.my.canva.site/my-bio'; // Replace with your actual bio link URL

  navigator.clipboard.writeText(bioLinkURL)
    .then(() => {
      alert('Link copied to clipboard!');
    })
    .catch(err => {
      console.error('Error copying link:', err);
    });
}
