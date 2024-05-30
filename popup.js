document.getElementById('save-url').addEventListener('click', async () => {
  const button = document.getElementById('save-url'); // Get the button element
  button.disabled = true; // Disable button while saving

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      const response = await fetch('http://localhost:3000/api/save-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: tab.url })
      });

      if (response.ok) {
        alert('URL saved successfully!');
      } else {
        throw new Error('Failed to save URL: ' + response.statusText);
      }
    }
  } catch (error) {
    console.error('Error saving URL:', error);
    alert('Failed to save URL: ' + error.message);
  } finally {
    button.disabled = false; // Re-enable button after save attempt
  }
});
