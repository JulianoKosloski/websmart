const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        image = document.getElementsById('sic-logo');
        image.src = "images/sic2.png";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        image = document.getElementsById('sic-logo');
        image.src = "images/sic1.png";
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
