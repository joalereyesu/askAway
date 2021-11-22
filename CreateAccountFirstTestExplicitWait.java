package systemTests.myFirstTestInSelenium;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import systemTesting.InitDriver;

public class CreateAccountFirstTestExplicitWait extends InitDriver {

    private String url = "http://localhost:3000/signup";

    @BeforeMethod
    public void goToUrl(){
        driver.get(url);
    }

    @Test
    public void createAccount() throws InterruptedException {
        Thread.sleep(5000);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username"))).sendKeys("marcemelgaar");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("mail"))).sendKeys("marcemelgar@gmail.com");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("password"))).sendKeys("canigetahiya");
        wait.until(ExpectedConditions.elementToBeClickable(By.id("signUp"))).click();
        String currentUrl  = driver.getCurrentUrl();
        if(!currentUrl.contains("signin")){
            Assert.fail("The page is not the correct one.");
        }
    }
}
