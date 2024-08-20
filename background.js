chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.storage.sync.get('isExtensionOn', (data) => {
            const isExtensionOn = data.isExtensionOn ?? true; // default to true if undefined

            if (isExtensionOn) {
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    files: ['content.js']
                });
            }
        });
    }
});
