(() => {
  // ------------------------------------------------------------------
  // Helper: wait until <body> exists (some sites create it later)
  // ------------------------------------------------------------------
  const waitForBody = (callback) => {
    if (document.body) return callback();
    const observer = new MutationObserver(() => {
      if (document.body) {
        observer.disconnect();
        callback();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  };

  // ------------------------------------------------------------------
  // Main injection – runs once per frame
  // ------------------------------------------------------------------
  const inject = () => {
    if (document.getElementById('deployment-40042b47-04dd-4395-a84f-2aae93e1406d')) return;

    const div = document.createElement('div');
    div.id = 'deployment-40042b47-04dd-4395-a84f-2aae93e1406d';
    div.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      z-index: 2147483647 !important;
      display: block !important;
      pointer-events: auto !important;
    `;

    // Append to body
    document.body.appendChild(div);

    // Load remote bundle inside the div
    const script = document.createElement('script');
    script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
    script.defer = true;
    div.appendChild(script);

    // ------------------------------------------------------------------
    // Toggle with Ctrl+A
    // ------------------------------------------------------------------
    let visible = true;
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();           // block native select-all
        e.stopPropagation();
        visible = !visible;
        div.style.display = visible ? 'block' : 'none';
      }
    }, true); // capture phase – works even if page later blocks it
  };

  // ------------------------------------------------------------------
  // Run when body is ready
  // ------------------------------------------------------------------
  waitForBody(inject);
})();
