// Dark mode switch --------------------------------------------------------------------------------

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Full page tabs --------------------------------------------------------------------------------

function openPageTab(pageId) {

    // Hide all content by default
    var i, tab;
    tab = document.getElementsByClassName("tab-content");
    for (i = 0; i < tab.length; i++) {
      tab[i].style.display = "none";
    }

    // Display the current tab
    document.getElementById(pageId).style.display = "block";
}

// Keep Home open by default 
document.getElementById("defaultOpen").click(); 

// Vertical info tabs --------------------------------------------------------------------------------