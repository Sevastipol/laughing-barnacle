(() => {
  // ------------------------------------------------------------------
  // RUN ONLY IN TOP-LEVEL DOCUMENT (not in iframes)
  // ------------------------------------------------------------------
  if (window !== window.top) return;

  // ------------------------------------------------------------------
  // Prevent double injection if script runs multiple times
  // ------------------------------------------------------------------
  if (window.__WEBSITE_AI_INJECTED__) return;
  window.__WEBSITE_AI_INJECTED__ = true;

  // ------------------------------------------------------------------
  // Helper: wait until <body> exists
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
  // Main injection
  // ------------------------------------------------------------------
  const inject = () => {
    // Double-check in case of race condition
    if (document.getElementById('deployment-40042b47-04dd-4395-a84f-2aae93e1406d')) return;

    const div = document.createElement('div');
    div.id = 'deployment-40042b47-04dd-4395-a84f-2aae93e1406d';

    document.body.appendChild(div);

    // Load the remote bundle
    const script = document.createElement('script');
    script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
    script.defer = true;
    div.appendChild(script);

    // ------------------------------------------------------------------
    // Toggle visibility with Ctrl+A (only one listener)
    // ------------------------------------------------------------------
    let visible = true;
    const toggle = (e) => {
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        e.stopPropagation();
        visible = !visible;
        div.style.display = visible ? 'block' : 'none';
      }
    };

    // Use capture phase to ensure it works even if page overrides
    document.addEventListener('keydown', toggle, true);
  };

  // ------------------------------------------------------------------
  // Start when body is ready
  // ------------------------------------------------------------------
  waitForBody(inject);
})();
