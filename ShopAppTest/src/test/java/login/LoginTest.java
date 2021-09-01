package login;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class LoginTest {

    private static LoginPage loginPage;
    private static CreatePage createPage;
    private static WelcomePage welcomePage;
    private static LoginPagee logiPnagee;
    private static ShowListPage showListPage;
    private static ShowList showList;
    private static ShowCartPage showCartPage;
    private static ShowCart showCart;

    @BeforeClass
    public static void openTheBrowser() {
        System.setProperty("webdriver.chrome.driver", "D:\\WAA\\ChromeDriver\\chromedriver.exe");
        // create chrome instance
        WebDriver driver = new ChromeDriver();


        createPage = new CreatePage(driver);

        loginPage = new LoginPage(driver);
        showList = new ShowList(driver);
        showListPage= new ShowListPage(driver);

        showCart = new ShowCart(driver);
        showCartPage= new ShowCartPage(driver);




    }

    @AfterClass
    public static void closeTheBrowser() {

        createPage.close();
        if (logiPnagee != null)
            logiPnagee.close();

    }
    @Test
    public void signUp() {
        createPage.open();
        createPage.createAccount("1234", "username1", "user@gmail.com","12345678","4th Street",
                "Fairfield","52557","password1");


        LoginPagee loginPagee = createPage.submit();
        loginPagee.verifyHeader("Create Account");
    }

    @Test
    public void loginpageTest() {

        loginPage.enterAccount("username1", "password1","customer");


        WelcomePage welcomePage = loginPage.submit();
        welcomePage.verifyHeader("Welcome");
    }

    @Test
    public void showListpageTest() {
        showListPage.open();

        ShowList showList = showListPage.submit();
        showList.verifyHeader("Product List");
    }

    @Test
    public void showCartpageTest() {
        showCartPage.open();

        ShowCart showcart = showCartPage.submit();
        showcart.verifyHeader("Cart List");
    }



}