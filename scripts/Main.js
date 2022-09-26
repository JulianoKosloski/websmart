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

    // Get all elements with class="tab-info-content" and hide them
    info = document.getElementsByClassName("tab-info-content");
    for (i = 0; i < info.length; i++) {
      info[i].style.display = "none";
    }

    // Display the current tab
    document.getElementById(pageId).style.display = "block";

    //Display the default content for that tab
    document.getElementById("default-auto").style.display = "block";
    document.getElementById("default-dev").style.display = "block";
    document.getElementById("default-info").style.display = "block";
    document.getElementById("default-dev-info").style.display = "block";
}

// Keep Home open by default 
document.getElementById("defaultOpen").click(); 

// Vertical info tabs --------------------------------------------------------------------------------

function openTabInfo(event, infoId) {
    // Declare all variables
    var i, info, sidetabs;
  
    // Get all elements with class="tab-info-content" and hide them
    info = document.getElementsByClassName("tab-info-content");
    for (i = 0; i < info.length; i++) {
      info[i].style.display = "none";
    }
  
    // Get all elements with class="tab-info" and remove the class "active"
    sidetabs = document.getElementsByClassName("tab-info");
    for (i = 0; i < sidetabs.length; i++) {
      sidetabs[i].className = sidetabs[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(infoId).style.display = "block";
    event.currentTarget.className += " active";
  } 

  // VSide nav toggle --------------------------------------------------------------------------------