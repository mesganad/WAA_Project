package login;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import static org.hamcrest.CoreMatchers.*;

import static org.junit.Assert.assertThat;

public class ShowList {
    protected WebDriver driver;

    public ShowList(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(tagName = "h1")
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
