chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'view-urls') {
      chrome.tabs.create({ url: 'http://localhost:3000/view-urls' }); // Open "View URLs" page
    }
  });
  