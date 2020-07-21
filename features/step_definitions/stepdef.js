const assert = require("assert");
const { Given, When, Then } = require("cucumber");

function isItFriday(today) {
  // We'll leave the implementation blank for now
  if (today === "Friday") {
    return "TGIF";
  }

  return "Nope";
}

Given("today is Sunday", function () {
  // Providing fixture
  this.today = "Sunday";
});

When("I ask whether it's Friday yet", function () {
  // Act
  this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
  // assert
  assert.equal(this.actualAnswer, expectedAnswer);
});

Given("today is Friday", function () {
  // Providing another fixture
  this.today = "Friday";
});
