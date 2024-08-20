chrome.storage.sync.get('isExtensionOn', (data) => {
    const isExtensionOn = data.isExtensionOn ?? true; // default to true if undefined

    if (isExtensionOn) {
        modifyText();
    }
});

function modifyText() {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th');

    elements.forEach(element => {
        // Font size adjustments
        const tag = element.tagName.toLowerCase();
        if (tag.startsWith('h')) {
            element.style.fontSize = '20% larger than body text';
        } else {
            element.style.fontSize = '16px'; // or adjust as necessary
        }

        // Spacing adjustments
        element.style.letterSpacing = '0.35em';
        element.style.wordSpacing = '0.56em';
        element.style.lineHeight = '1.5';

        // Formatting adjustments
        element.style.fontStyle = 'normal'; // no italics
        element.style.textDecoration = 'none'; // no underlining

        // Use bold for emphasis
        if (element.tagName.toLowerCase() === 'strong') {
            element.style.fontWeight = 'bold';
        }

        // Background adjustment
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#000';
    });
}
