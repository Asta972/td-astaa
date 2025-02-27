document.getElementById('reverseButton').addEventListener('click', function() {
    let text = document.getElementById('inputText').value;
    let reversedText = text.split('').reverse().join('');
    document.getElementById('outputText').textContent = reversedText;
});
