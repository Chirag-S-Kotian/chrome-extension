document.getElementById('save-url').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      const response = await fetch('http://localhost:3000/api/save-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: tab.url })
      });
      if (response.ok) {
        alert('URL saved successfully!');
      } else {
        alert('Failed to save URL');
      }
    }
  });
  
  document.getElementById('view-urls').addEventListener('click', () => {
    chrome.tabs.create({ url: 'http://localhost:3000/view-urls' });
  });
  