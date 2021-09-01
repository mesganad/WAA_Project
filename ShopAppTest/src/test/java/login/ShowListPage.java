package login;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShowListPage {
    protected WebDriver driver;

    public ShowListPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "showProductStore")
    private WebElement showProductBtn;


    public void open() {
        driver.get ("http://localhost:3000/welcome");
    }

    public void close() {
        driver.close();
    }

    public ShowList submit() {
        showProductBtn.click();
        return new ShowList(driver);
    }

}

