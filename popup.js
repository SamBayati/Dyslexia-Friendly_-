document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');

    // Get the current state from storage and update the button text
    chrome.storage.sync.get('isExtensionOn', (data) => {
        const isExtensionOn = data.isExtensionOn ?? true; // default to true if undefined
        toggleButton.textContent = isExtensionOn ? 'Turn Off' : 'Turn On';
    });

    toggleButton.addEventListener('click', () => {
        chrome.storage.sync.get('isExtensionOn', (data) => {
            const isExtensionOn = data.isExtensionOn ?? true;
            const newState = !isExtensionOn;

            // Save the new state in storage
            chrome.storage.sync.set({ isExtensionOn: newState }, () => {
                toggleButton.textContent = newState ? 'Turn Off' : 'Turn On';
                
                // Reload the current tab to apply or remove the content script
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    chrome.tabs.reload(tabs[0].id);
                });
            });
        });
    });
});
