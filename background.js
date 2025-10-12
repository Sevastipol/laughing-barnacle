// background.js

let bool = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "ON",
  });
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-visibility") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          func: toggleVisibility,
        },
        (results) => {
          bool = !bool;
        }
      );
    });
  }
});

function toggleVisibility() {
  let div44 = document.createElement('div');
  div44.id = 'deployment-40042b47-04dd-4395-a84f-2aae93e1406d';
  div44.style.position = 'fixed';
  div44.style.top = '0';
  div44.style.left = '0';
  div44.style.zIndex = 2147483647;
  div44.style.display = bool ? 'block' : 'none';
  document.body.appendChild(div44);

  let script = document.createElement('script');
  script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
  script.defer = true;
  div44.appendChild(script);
}
