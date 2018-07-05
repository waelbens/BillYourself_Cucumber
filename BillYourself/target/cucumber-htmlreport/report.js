$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/basic/FirstFeatureFile/MyFirstFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login to BillYourself website, set data and download the bill",
  "description": "As a user you need to open BillYourself signin page, login and do the validations",
  "id": "login-to-billyourself-website,-set-data-and-download-the-bill",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login, validate fields and dowloand the bill",
  "description": "",
  "id": "login-to-billyourself-website,-set-data-and-download-the-bill;login,-validate-fields-and-dowloand-the-bill",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User need to be on BillYourself signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters Email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User checks user Email is present",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User checks user Password is present",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters Days",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters Daily Income",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User checks user Days field is present",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User checks user Daily Income field is present",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User submit",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Download the bill",
  "keyword": "And "
});
formatter.match({
  "location": "FirstFeatureStepTest.User_need_to_be_on_BillYourself_signin_page()"
});
formatter.result({
  "duration": 6813456152,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.User_enters_Email()"
});
formatter.result({
  "duration": 244032051,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.User_enters_Password()"
});
formatter.result({
  "duration": 79751129,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.User_checks_user_Email_is_present()"
});
formatter.result({
  "duration": 22509108,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.User_checks_user_Password_is_present()"
});
formatter.result({
  "duration": 15891247,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.User_login()"
});
formatter.result({
  "duration": 1235046380,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.User_enters_Days()"
});
formatter.result({
  "duration": 71148325,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.User_enters_Daily_Income()"
});
formatter.result({
  "duration": 82838608,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.User_checks_user_Days_field_is_present()"
});
formatter.result({
  "duration": 26787478,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.User_checks_user_Daily_Income_field_is_present()"
});
formatter.result({
  "duration": 18719328,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.User_submit()"
});
formatter.result({
  "duration": 3056195744,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureStepTest.Download_the_bill()"
});
formatter.result({
  "duration": 1170409815,
  "status": "passed"
});
});