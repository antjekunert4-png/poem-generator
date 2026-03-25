function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a75f8bb18344f8at30c2o163eff475bb";
  let context =
    "You are a romantic poem expert and you love to write short poems. Your mission is to write a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions below. Sign the poem with 'SheCodes AI' in a <strong> element";
  let prompt = `User instructions: Generate a short poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Context: ${context}`);
  console.log(`Prompt: ${prompt}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
