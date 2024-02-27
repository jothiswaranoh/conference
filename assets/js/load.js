document.addEventListener("DOMContentLoaded", function () {
  var partialNames = [
    "header",
    "hero",
    "about",
    "speacker",
    "schedule",
    "venue",
    "hotels",
    "buy-tickets",
    "mode",
    "subscribe",
    "organizers",
    "gallery",
    "faq",
    "contact",
    "footer",
  ];

  function loadDataIfNotLoaded(div) {
    var container = document.getElementById(div);
    if (container.getAttribute("data-loaded") == "false") {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          container.innerHTML = this.responseText;
          container.setAttribute("data-loaded", true);
        }
      };
      xhttp.onerror = function () {
        console.error("Error fetching " + div + ": ", this.statusText);
      };
      xhttp.open("GET", "_partials/_" + div + ".php", true);
      xhttp.send();
    }
  }

  var currentPageIndex = 0;
  var halfPageHeight = window.innerHeight / 2;
  var initialLoadComplete = false;
  loadInitialData();
  // Function to load initial data
  function loadInitialData() {
    for (var i = 0; i < 4; i++) {
      loadDataIfNotLoaded(partialNames[currentPageIndex]);
      currentPageIndex++;
    }
    initialLoadComplete = true;
  }
  window.addEventListener("scroll", function () {
    if (!initialLoadComplete) {
      loadInitialData();
    }

    var scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition >= document.body.offsetHeight / 2) {
      loadDataIfNotLoaded(partialNames[currentPageIndex]);
      currentPageIndex++;
      if (currentPageIndex >= partialNames.length) {
        currentPageIndex = 0;
      }
    }
  });
});
