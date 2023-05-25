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

const themeStyle = document.getElementById('theme-style');
const socialMediaSection = document.querySelector('.social-media');

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') {
    themeStyle.setAttribute('href', 'lightModeStyle.css');
    socialMediaSection.innerHTML = `
        <a href="https://www.facebook.com/viphilongnguyen/" target="_blank">
            <box-icon type='logo' name='facebook-square' color='#121212' size='40px'></box-icon>
        </a>
        <a href="https://www.instagram.com/nguyen.vi.phi.long/" target="_blank">
            <box-icon type='logo' name='instagram-alt' color='#121212' size='40px'></box-icon>
        </a>
        <a href="https://www.youtube.com/channel/UCPQfxJxgKEmkSaLMDvzAQbw" target="_blank">
            <box-icon type='logo' name='youtube' color='#121212' size='40px'></box-icon>
        </a>
        <div class="separator"></div>
        <div class="mode">
            <box-icon name='moon' type='solid' color='#868686' background-color='#868686' size='40px' onclick="toggleTheme()"></box-icon>
            <box-icon name='sun' type='solid' color='#121212' background-color='#121212' size='40px'></box-icon>
        </div>
    `;
} else {
    themeStyle.setAttribute('href', 'darkModeStyle.css');
    socialMediaSection.innerHTML = `
        <a href="https://www.facebook.com/viphilongnguyen/" target="_blank">
            <box-icon type='logo' name='facebook-square' color='#FFF' size='40px'></box-icon>
        </a>
        <a href="https://www.instagram.com/nguyen.vi.phi.long/" target="_blank">
            <box-icon type='logo' name='instagram-alt' color='#FFF' size='40px'></box-icon>
        </a>
        <a href="https://www.youtube.com/channel/UCPQfxJxgKEmkSaLMDvzAQbw" target="_blank">
            <box-icon type='logo' name='youtube' color='#FFF' size='40px'></box-icon>
        </a>
        <div class="separator"></div>
        <div class="mode">
            <box-icon name='moon' type='solid' color='#FFF' background-color='#FFF' size='40px'></box-icon>
            <box-icon name='sun' type='solid' color='#868686' background-color='#868686' size='40px' onclick="toggleTheme()"></box-icon>
        </div>
    `;
}

function toggleTheme() {
    if (themeStyle.getAttribute('href') === 'lightModeStyle.css') {
        themeStyle.setAttribute('href', 'darkModeStyle.css');
        socialMediaSection.innerHTML = `
            <a href="https://www.facebook.com/viphilongnguyen/" target="_blank">
                <box-icon type='logo' name='facebook-square' color='#FFF' size='40px'></box-icon>
            </a>
            <a href="https://www.instagram.com/nguyen.vi.phi.long/" target="_blank">
                <box-icon type='logo' name='instagram-alt' color='#FFF' size='40px'></box-icon>
            </a>
            <a href="https://www.youtube.com/channel/UCPQfxJxgKEmkSaLMDvzAQbw" target="_blank">
                <box-icon type='logo' name='youtube' color='#FFF' size='40px'></box-icon>
            </a>
            <div class="separator"></div>
            <div class="mode">
                <box-icon name='moon' type='solid' color='#FFF' background-color='#FFF' size='40px'></box-icon>
                <box-icon name='sun' type='solid' color='#868686' background-color='#868686' size='40px' onclick="toggleTheme()"></box-icon>
            </div>
        `;
        localStorage.setItem('theme', 'dark');
    } else {
        themeStyle.setAttribute('href', 'lightModeStyle.css');
        socialMediaSection.innerHTML = `
            <a href="https://www.facebook.com/viphilongnguyen/" target="_blank">
                <box-icon type='logo' name='facebook-square' color='#121212' size='40px'></box-icon>
            </a>
            <a href="https://www.instagram.com/nguyen.vi.phi.long/" target="_blank">
                <box-icon type='logo' name='instagram-alt' color='#121212' size='40px'></box-icon>
            </a>
            <a href="https://www.youtube.com/channel/UCPQfxJxgKEmkSaLMDvzAQbw" target="_blank">
                <box-icon type='logo' name='youtube' color='#121212' size='40px'></box-icon>
            </a>
            <div class="separator"></div>
            <div class="mode">
                <box-icon name='moon' type='solid' color='#868686' background-color='#868686' size='40px' onclick="toggleTheme()"></box-icon>
                <box-icon name='sun' type='solid' color='#121212' background-color='#121212' size='40px'></box-icon>
            </div>
        `;
        localStorage.setItem('theme', 'light');
    }
}








