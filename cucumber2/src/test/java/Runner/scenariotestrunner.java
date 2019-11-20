package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="feature\\scenariooutlone(parameterisatio).feature",glue=("Stepdefinition"),plugin= {"html:target/cucumber2.html"})
public class scenariotestrunner {

}
