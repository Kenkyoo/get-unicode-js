function handleGetUnicode() {
    const input = document.getElementById('charInput').value;
    const output = document.getElementById('output');

    if (!input) {
        output.textContent = "Please enter a character.";
        return;
    }

    output.textContent = `The Unicode value of "${input}" is: ${input.codePointAt(0)}`;
}

document.getElementById('getUnicode').addEventListener('click', handleGetUnicode);
