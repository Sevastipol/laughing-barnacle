chrome.runtime.onInstalled.addListener(() => {
  // Remove this line to avoid the error
  // chrome.action.setBadgeText({
  //   text: "ON",
  // });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
  }
});
