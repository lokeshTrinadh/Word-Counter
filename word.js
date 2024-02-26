const inputArea = document.getElementById('inputArea');
const wordCountDisplay = document.getElementById('wordCount');

// Function to count words accurately, handling edge cases
function countWords(text) {
    // Remove leading/trailing whitespace
    text = text.trim();

    // Replace multiple spaces with single spaces
    text = text.replace(/\s+/g, ' ');

    // Split into words, filtering out empty strings
    const words = text.split(' ').filter(word => word.length > 0);

    return words.length;
}

// Calculate and display word count on every keystroke
inputArea.addEventListener('keyup', () => {
    const text = inputArea.value;
    const wordCount = countWords(text);
    wordCountDisplay.textContent = `${wordCount} `;
});
