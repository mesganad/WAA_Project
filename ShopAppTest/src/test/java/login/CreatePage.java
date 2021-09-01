package login;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreatePage {
    protected WebDriver driver;

    public CreatePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "username")
    private WebElement username;
    @FindBy(id = "password")
    private WebElement password;
    @FindBy(id = "role")
    private WebElement role;
    @FindBy(id = "personId")
    private WebElement personId;
    @FindBy(id = "email")
    private WebElement email;
    @FindBy(id = "phone")
    private WebElement phone;
    @FindBy(id = "street")
    private WebElement street;
    @FindBy(id = "city")
    private WebElement city;
    @FindBy(id = "zip")
    private WebElement zip;
    @FindBy(id = "addBtn")
    private WebElement addBtn;


    public void open() {
        driver.get ("http://localhost:3000/createAccount");
    }

    public void close() {
        driver.close();
    }
/*
    public void enterAccount(String username, String password, String role) {
        this.username.clear();
        this.username.sendKeys(username);

        this.password.clear();
        this.password.sendKeys(password);

        this.role.clear();
        this.role.sendKeys(role);
    }*/

    public void createAccount(String personId, String username, String email,String phone,String street,
                              String city,String zip,String password) {
        this.personId.clear();
        this.personId.sendKeys(personId);

        this.username.clear();
        this.username.sendKeys(username);

        this.email.clear();
        this.email.sendKeys(email);

        this.phone.clear();
        this.phone.sendKeys(phone);

        this.street.clear();
        this.street.sendKeys(street);

        this.city.clear();
        this.city.sendKeys(city);
        this.zip.clear();
        this.zip.sendKeys(zip);


        this.role.click();

        this.password.clear();
        this.password.sendKeys(password);
    }

	/*public void enterAddress(String address, String zipCode) {
		this.address.clear();
		this.address.sendKeys(address);

		this.zipCode.clear();
		this.zipCode.sendKeys(zipCode);
	}*/

    /*public WelcomePage submit() {
        loginBtn.click();
        return new WelcomePage(driver);
    }*/
    public LoginPagee submit() {
        addBtn.click();
        return new LoginPagee(driver);
    }
}

