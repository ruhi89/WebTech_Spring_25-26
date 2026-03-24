function analyzeText() {
    let text = document.getElementById("inputText").value.trim();
    let resultDiv = document.getElementById("result");

    if (text === "") {
        resultDiv.innerHTML = "Please enter some text.";
        return;
    }

    let charCount = text.length;
    let wordCount = text.split(" ").filter(word => word !== "").length;

    let reversedText = text.split("").reverse().join("");

    resultDiv.innerHTML =
        "Total Characters: " + charCount + "<br>" +
        "Total Words: " + wordCount + "<br>" +
        "Reversed Text: " + reversedText;
}