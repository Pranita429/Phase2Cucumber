package stepdefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome=true,
        features = {"src/test/java/features"},
        glue = {"stepdefs"},
        		plugin = {"pretty" ,"html:target/html-cucumber","json:target/cucumber.json"})

 
	public class Runner {

	}

