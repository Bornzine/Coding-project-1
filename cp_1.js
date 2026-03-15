const form = document.getElementById("feedback-form");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const validationMsg = document.getElementById("validation-msg");
const display = document.getElementById("feedback-display");


// Character counter
comments.addEventListener("input", function () {
    charCount.textContent = comments.value.length + " / 200 characters";
});


// Event Delegation for tooltips
form.addEventListener("mouseover", function (event) {

    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {

        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = "Please fill out this field";

        event.target.after(tooltip);
    }
});

form.addEventListener("mouseout", function (event) {

    const tip = document.querySelector(".tooltip");
    if (tip) {
        tip.remove();
    }
});


// Form submission validation
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const text = comments.value.trim();

    if (!name || !email || !text) {
        validationMsg.textContent = "All fields are required.";
        return;
    }

    validationMsg.textContent = "";

    const entry = document.createElement("div");
    entry.className = "feedback-item";

    entry.innerHTML =
        "<strong>" + name + "</strong><br>" +
        email + "<br><p>" + text + "</p>";

    display.appendChild(entry);

    form.reset();
    charCount.textContent = "0 / 200 characters";
});


// Stop background click propagation
document.body.addEventListener("click", function () {
    console.log("Background clicked");
});

form.addEventListener("click", function (event) {
    event.stopPropagation();
});