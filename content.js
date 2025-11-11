(() => {
  // ------------------------------------------------------------------
  // 1. Create the container div (only once per frame)
  // ------------------------------------------------------------------
  if (document.getElementById('deployment-40042b47-04dd-4395-a84f-2aae93e1406d')) {
    return; // already injected in this frame
  }

  const div44 = document.createElement('div');
  let visible = true;

  div44.id = 'deployment-40042b47-04dd-4395-a84f-2aae93e1406d';
  div44.style.position = 'fixed';
  div44.style.top = '0';
  div44.style.left = '0';
  div44.style.zIndex = '2147483647';
  div44.style.display = 'block';

  document.body.appendChild(div44);

  // ------------------------------------------------------------------
  // 2. Load the remote bundle inside the div
  // ------------------------------------------------------------------
  const script = document.createElement('script');
  script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
  script.defer = true;
  div44.appendChild(script);

  // ------------------------------------------------------------------
  // 3. Ctrl+A → toggle visibility
  // ------------------------------------------------------------------
  document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.key === 'a') {
      event.preventDefault();               // stop native select-all
      visible = !visible;
      div44.style.display = visible ? 'block' : 'none';
    }
  });
})();
