import FetchWrapper from "./fetch-wrapper.js";

const API = new FetchWrapper(
  "https://firestore.googleapis.com/v1/projects/jsdemo-3f387/databases/(default)/documents"
);

const form = document.querySelector("#create-form");
const name = document.querySelector("#create-name");
const carbs = document.querySelector("#create-carbs");
const protein = document.querySelector("#create-protein");
const fat = document.querySelector("#create-fat");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  API.post("/", {
    fields: {
      name: { stringValue: name.value },
      carbs: { integerValue: carbs.value },
      protein: { integerValue: protein.value },
      fat: { integerValue: fat.value },
    },
  }).then((data) => {
    if (data.error) {
      return;
    }
    name.value = "";
    carbs.value = "";
    protein.value = "";
    fat.value = "";
  });
});
