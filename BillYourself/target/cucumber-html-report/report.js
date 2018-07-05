$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/basic/SigninFeatureFile/Signin.feature");
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
  "location": "SigninStep.User_need_to_be_on_BillYourself_signin_page()"
});
formatter.result({
  "duration": 7990281445,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.User_enters_Email()"
});
formatter.result({
  "duration": 199223391,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.User_enters_Password()"
});
formatter.result({
  "duration": 89679241,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.User_checks_user_Email_is_present()"
});
formatter.result({
  "duration": 20652921,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.User_checks_user_Password_is_present()"
});
formatter.result({
  "duration": 19412567,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.User_login()"
});
formatter.result({
  "duration": 1297022510,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.User_enters_Days()"
});
formatter.result({
  "duration": 575843733,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.User_enters_Daily_Income()"
});
formatter.result({
  "duration": 55406223,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.User_checks_user_Days_field_is_present()"
});
formatter.result({
  "duration": 16714752,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.User_checks_user_Daily_Income_field_is_present()"
});
formatter.result({
  "duration": 20194537,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.User_submit()"
});
formatter.result({
  "duration": 3084287385,
  "status": "passed"
});
formatter.match({
  "location": "SigninStep.Download_the_bill()"
});
formatter.result({
  "duration": 1188302619,
  "status": "passed"
});
});