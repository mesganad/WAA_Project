package login;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import static org.hamcrest.CoreMatchers.*;

import static org.junit.Assert.assertThat;

public class LoginPagee {
    protected WebDriver driver;

    public LoginPagee(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(tagName = "h2")
    private WebElement header;

    public String getHeader(){
        return header.getText();
    }


    public void verifyHeader(String header) {
        assertThat(getHeader(), is(header));
    }

    public void close() {
        driver.close();
    }

}
