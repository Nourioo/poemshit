function generatePoem(event) {
    event.preventDefault();
    new Typewriter('#poem', {
        strings: ["La tombe dit à la rose"],
        autoStart: true,
        delay: 50,
        cursor: "",
    });
}

document.querySelector("#poem-generator-form").addEventListener("submit", generatePoem);
