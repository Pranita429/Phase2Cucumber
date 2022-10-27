package stepdefs;

	import org.junit.Assert;
	import org.openqa.selenium.By;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import io.cucumber.java.en.Then;
	import io.cucumber.java.en.When;


	public class HomePageStepdef {
		
		WebDriver driver=Hooks.driver;
		
		@When("I enter the username {string} and passowrd {string}")
		public void i_enter_the_username_and_passowrd(String string, String string2) {
		    // Write code here that turns the phrase above into concrete actions
			WebElement UserName= driver.findElement(By.id("user-name"));
			UserName.sendKeys("standard_user");
			
			WebElement Password =driver.findElement(By.id("password"));
			Password.sendKeys("secret_sauce");

		}

		@When("I click on Add to Cart on product {string}")
		public void i_click_on_Add_to_Cart_on_product(String string) {
		    // Write code here that turns the phrase above into concrete actions
			String Xpath = "//div[text()='Sauce Labs Backpack']//following::button[1]";
			WebElement Item =driver.findElement(By.xpath(Xpath));
		    Item.click();
		}

		@Then("Basket item number should be {int}")
		public void basket_item_number_should_be(Integer int1) {
		    // Write code here that turns the phrase above into concrete actions
			WebElement CartItem =driver.findElement(By.xpath("//div/a/span[@class=\"shopping_cart_badge\"]"));
			String items=CartItem.getText();
			Assert.assertEquals(items, "1");
		}

		

			
		}




