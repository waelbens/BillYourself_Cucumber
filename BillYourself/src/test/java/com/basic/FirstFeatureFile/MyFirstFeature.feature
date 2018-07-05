Feature: Login to BillYourself website, set data and download the bill
As a user you need to open BillYourself signin page, login and do the validations

Scenario: Login, validate fields and dowloand the bill

Given User need to be on BillYourself signin page
When User enters Email 
And User enters Password
Then User checks user Email is present 
And User checks user Password is present
And User login


When User enters Days
And User enters Daily Income
Then User checks user Days field is present 
And User checks user Daily Income field is present
And User submit
And Download the bill