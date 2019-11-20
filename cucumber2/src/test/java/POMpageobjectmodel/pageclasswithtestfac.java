package POMpageobjectmodel;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

public class pageclasswithtestfac {
  @Test
  public void f() {
	  System.setProperty("webdriver.chrome.driver", "C:\\Users\\s.c.ramakrishnaiah\\Downloads\\chromedriver.exe");
	  WebDriver driver=new ChromeDriver();
	  driver.get("http://demowebshop.tricentis.com/");
	  driver.manage().window().maximize();
	  driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	  
	  pageclasswithpagefacotry locateElemets = PageFactory.initElements(driver, pageclasswithpagefacotry.class);
	  locateElemets.loginMethod("aravind.guggilla57@gmail.com","aravind");
	  
  }
}
