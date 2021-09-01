package login;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShowCartPage {
    protected WebDriver driver;

    public ShowCartPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "showcart")
    private WebElement showcartBtn;


    public void open() {
        driver.get ("http://localhost:3000/products");
    }

    public void close() {
        driver.close();
    }

    public ShowCart submit() {
        showcartBtn.click();
        return new ShowCart(driver);
    }

}

