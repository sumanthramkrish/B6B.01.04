package Stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class scenariooutlineparameter {
	WebDriver driver=null;
	@Given("user is open the application")
	public void user_is_open_the_application() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\s.c.ramakrishnaiah\\Downloads\\chromedriver.exe");
		driver= new ChromeDriver();
		String url="http://demowebshop.tricentis.com/";
		driver.get(url);
	//	driver.findElement(By.linkText("Log in")).click();
		
		
	}

	@When("user click on to login link")
	public void user_click_on_to_login_link() {
		driver.findElement(By.linkText("Log in")).click();
		System.out.println("the titile of the page is"+driver.getTitle());
	
	}

	@When("user click enters {string} and {string}")
	public void user_click_enters_and(String username, String password) {
		driver.findElement(By.id("Email")).sendKeys(username);
		driver.findElement(By.id("Password")).sendKeys(password);
		driver.findElement(By.xpath("//input[@value=('Log in')]")).click();
		driver.findElement(By.xpath("/html/body/div[4]/div[1]/div[1]/div[2]/div[1]/ul/li[2]/a")).click();
		driver.close();
		
		
		
	  
	}

	@Then("message displayed login successfully")
	public void message_displayed_login_successfully() {
	    System.out.println("login successful");
	}


}
