package com.basic.FirstFeatureFile;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FirstFeatureStepTest {
	
	WebDriver driver;
	
	
	@Given("^User need to be on BillYourself signin page$")
	public void User_need_to_be_on_BillYourself_signin_page() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\wbensalah\\Desktop\\Cucumber\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://bill-yourself.oofreelance.com/");
	}
	
	
	@When("^User enters Email$")
	public void User_enters_Email() {
		driver.findElement(By.xpath("//input[@id=\"username\"]")).sendKeys("wael.bensalah@supcom.tn");
	}
	
	
	@And("^User enters Password$")
	public void User_enters_Password() {
		driver.findElement(By.xpath("//input[@id=\"password\"]")).sendKeys("wael1308");
	}
	
	
	@Then("^User checks user Email is present$")
	public void User_checks_user_Email_is_present() {
			String userEmailActual = driver.findElement(By.xpath("//input[@id=\"username\"]")).getAttribute("value");
			Assert.assertEquals("wael.bensalah@supcom.tn", userEmailActual);
	}
	
	
	@And("^User checks user Password is present$")
	public void User_checks_user_Password_is_present() {
		String userPasswordActual = driver.findElement(By.xpath("//input[@id=\"password\"]")).getAttribute("value");
		Assert.assertEquals("wael1308", userPasswordActual);
	}
	
	@And("^User login$")
	public void User_login() throws InterruptedException {
		driver.findElement(By.id("login_btn")).click();
		Thread.sleep(1000);
	}
	
	
	@When("^User enters Days$")
	public void User_enters_Days() {
		driver.findElement(By.xpath("//input[@id=\"days\"]")).sendKeys("60");
	}
	
	
	@And("^User enters Daily Income$")
	public void User_enters_Daily_Income() {
		driver.findElement(By.xpath("//input[@id=\"income\"]")).sendKeys("30");
	}
	
	
	@Then("^User checks user Days field is present$")
	public void User_checks_user_Days_field_is_present() {
			String userEmailActual = driver.findElement(By.xpath("//input[@id=\"days\"]")).getAttribute("value");
			Assert.assertEquals("60", userEmailActual);
	}
	
	
	@And("^User checks user Daily Income field is present$")
	public void User_checks_user_Daily_Income_field_is_present() {
		String userPasswordActual = driver.findElement(By.xpath("//input[@id=\"income\"]")).getAttribute("value");
		Assert.assertEquals("30", userPasswordActual);
	}
	
	@And("^User submit$")
	public void User_submit() throws InterruptedException {
		driver.findElement(By.id("submit_btn")).click();
		Thread.sleep(3000);
	}
	
	@And("^Download the bill$")
	public void Download_the_bill() throws InterruptedException {
		driver.findElement(By.id("download_bill")).click();
		Thread.sleep(1000);
	}
	
}
