document.addEventListener("DOMContentLoaded", function() {
  // Get the list of div elements with class "partial"
  var partialNames = [
    'header',
    'hero',
    'about',
    'speacker',
    'schedule',
    'venue',
    'hotels',
    'buy-tickets',
    'mode',
    'subscribe',
    'organizers',
    'gallery',
    'faq',
    'contact',
    'footer'
];
  partialNames.forEach(function(div) {
      fetch('_partials/_' + div + '.php')
      .then(response => response.text())
      .then(data => {
        var container = document.getElementById(div);
          container.innerHTML = data;
          console.log("Included partial: " + div);
      })
      .catch(error => {
          console.error('Error fetching ' + div + ': ', error);
      });
  });
});
