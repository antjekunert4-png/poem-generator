function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Give me a sign. I remember such a blue sky that gave me a sign.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
