function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var element = document.getElementsByClassName('main-content');
    element.classList.toggle("dark-mode");
    var element = document.getElementsByClassName('page-title');
    element.classList.toggle("dark-mode");
    var element = document.getElementsByClassName('nav-list');
    element.classList.toggle("dark-mode");
    var element = document.getElementsByTagName('h1');
    element.classList.toggle("dark-mode");
    var element = document.getElementsByTagName('h2');
    element.classList.toggle("dark-mode");
    var element = document.getElementsByTagName('p');
    element.classList.toggle("dark-mode");  
 }