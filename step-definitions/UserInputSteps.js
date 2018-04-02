const expect = require('chai').expect;
const cucumber = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
let driver = new Builder()
    .forBrowser('firefox')
    .build();

const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;
//const defineSupportCode = require('cucumber').defineSupportCode;

//defineSupportCode(function({ Give, When, Then }) {
  Given('I want to log my bowling score', function() {
    driver.get('http://localhost:3000/')
  });

  When('I enter "5" and "3" into the input boxes', function() {
    input_roll1 = driver.findElement(By.id('roll1'));
    input_roll2 = driver.findElement(By.id('roll2'));
    submit = driver.findElement(By.id('submit_rolls'));
    input_roll1.sendKeys("5");
    input_roll2.sendKeys("3");
    submit.click();
  });

  Then('I should see "5" and "3" in the scorecard', function() {
    result1 = driver.findElement(By.id('row_roll1_1'));
    result2 = driver.findElement(By.id('row_roll1_2'));
    console.log(result1.getText());
    expect(result1.getText()).to.eql("5");
    expect(result2.getText()).to.eql("3");
  });
//});
