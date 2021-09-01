package login;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	protected WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "username")
	private WebElement username;
	@FindBy(id = "password")
	private WebElement password;

	@FindBy(id = "role")
	private WebElement role;

	@FindBy(id = "loginBtn")
	private WebElement loginBtn;





	public void open() {
		driver.get ("http://localhost:3000/");
	}

	public void close() {
		driver.close();
	}

	public void enterAccount(String username, String password, String role) {
		this.username.clear();
		this.username.sendKeys(username);

		this.password.clear();
		this.password.sendKeys(password);

		this.role.clear();
		this.role.sendKeys(role);
	}


	/*public void enterAddress(String address, String zipCode) {
		this.address.clear();
		this.address.sendKeys(address);

		this.zipCode.clear();
		this.zipCode.sendKeys(zipCode);
	}*/

	public WelcomePage submit() {
		loginBtn.click();
		return new WelcomePage(driver);
	}

}

