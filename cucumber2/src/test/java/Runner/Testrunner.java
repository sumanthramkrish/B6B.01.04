package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="feature\\demo1.feature",glue=("Stepdefinition"),plugin= {"html:target/cucumber.html"})
public class Testrunner {

	
	
}
