package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="feature",glue={"smokesanity.feature"},plugin=("html:target/cucumber3.html"),tags=("@Sanitytest"))
public class smokesanity {

}
