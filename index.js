buttontNode.addEventListener('click', function () {
    const inputValue = inputNode.value;

    if (!inputValue) {
        return
    };

    const answer = Number(inputNode.value);
    let output = CORRECT_ANSWER;

    if (answer != CURRENT_YEAR) {
        output = ERROR_ANSWER;
    };

    outputNode.innerHTML = output;
});