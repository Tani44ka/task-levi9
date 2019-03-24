const { Given, When, Then } = require('cucumber'),
  navigationHelper = require('../../utils/helpers/navigationHelper'),
  chai = require('chai');
  expect = chai.expect;

Given(/^I navigate to "([^"]*)" page$/, url => navigationHelper.open(url));

When("I filter by make {string} model {string}", function (make, model) {
  browser.execute(() => {
    let alertBox = document.querySelector('.optanon-alert-box-wrapper');
    alertBox.remove();
  });

  let brandDropdown = $('div[data-e2e-id=brandDropdown]');
  brandDropdown.waitForExist()
  brandDropdown.click();

  let makeElement = $('input[name=filter][value="'+make.toLowerCase()+'"]');
  makeElement.waitForExist();
  makeElement.$('..').click();

  let modelDropdown = $('div[data-e2e-id=modelDropdown]');
  modelDropdown.waitForExist()
  modelDropdown.click();

  let modelElement = $('input[name=filter][value="'+model.toLowerCase()+'"]');
  modelElement.waitForExist();
  modelElement.$('..').click();

  let searchBtn = $('button[data-e2e-id=searchButton]');
  searchBtn.waitForExist();
  searchBtn.click();
});

Then("I see items of make {string} model {string}", function (make, model) {
  for (let brandElement of $$('div[name=searchResults] span[data-e2e-id=cardCarBrand')) {
    expect(brandElement.getText()).to.eql(make);
  }

  for (let modelElement of $$('div[name=searchResults] span[data-e2e-id=cardCarModel')) {
    expect(modelElement.getText()).to.eql(model);
  }
});
