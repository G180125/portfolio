const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbarLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

function deleteText(textElement, speed) {
    return new Promise(resolve => {
      const intervalId = setInterval(() => {
        if (textElement.innerHTML.length === 0) {
          clearInterval(intervalId);
          resolve();
        } else {
          textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        }
      }, speed);
    });
  }
  
  function typeAndDeleteText(textElement, text1, text2, typingSpeed, deletingSpeed, delay) {
    setTimeout(async () => {
        var flag = true;
        while (flag) {
            for (let i = 0; i < text1.length; i++) {
            textElement.innerHTML += text1[i];
            await new Promise(resolve => setTimeout(resolve, typingSpeed));
            }
    
            await deleteText(textElement, deletingSpeed);
    
            await new Promise(resolve => setTimeout(resolve, delay));

            for (let i = 0; i < text2.length; i++) {
                textElement.innerHTML += text2[i];
                await new Promise(resolve => setTimeout(resolve, typingSpeed));
            }
            flag = false;
        }
        }, delay);
}
  
const textElement = document.getElementById('text-animation');
const text1 = "I'm Long";
const text2 = "I'm a Coder";
const typingSpeed = 200;
const deletingSpeed = 100;
const delay = 1000;

typeAndDeleteText(textElement, text1, text2, typingSpeed, deletingSpeed, delay);

const downloadButton = document.getElementById('download-button');

downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'https://nguyenviphilong.s3.ap-southeast-1.amazonaws.com/pORTFOLIO/CV.pdf';
    link.download = 'cv.pdf';
    link.target = '_blank'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});









