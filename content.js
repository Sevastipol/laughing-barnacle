(function() {
  let div44 = document.createElement('div');
  let bool = true;
  div44.id = 'deployment-40042b47-04dd-4395-a84f-2aae93e1406d';
  div44.style.position = 'fixed';
  div44.style.top = '0'; // For example, fixed to the top
  div44.style.left = '0'; // For example, fixed to the right
  div44.style.zIndex = 2147483647;
  div44.style.display = 'block';
  document.body.appendChild(div44);

  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'a') {
      event.preventDefault(); // prevent open file
      if (bool === false) {
          div44.style.display = 'block';
          bool = true;
      } else {
          div44.style.display = 'none';
          bool = false;
      }
    }
  });

  let script = document.createElement('script');
  script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
  script.defer = true;
  div44.appendChild(script);
})();
