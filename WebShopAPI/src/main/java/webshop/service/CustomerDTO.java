package webshop.service;

import webshop.domain.Account;
import webshop.domain.ShoppingCart;
import java.util.Collection;

public class CustomerDTO extends PersonDTO {
    private String customerId;
    private Collection<AccountDTO> account;
    private ShoppingCart shoppingCart;

    public CustomerDTO(){

    }
    public CustomerDTO(String customerId, Collection<AccountDTO> account, ShoppingCart shoppingCart) {
       super();
        this.customerId = customerId;
        
        for(AccountDTO a: account) {
        	AccountDTO accountDTO=new AccountDTO(a.getCardType(),a.getAccountNumber(),a.getExpDate(),a.getCodeValidation());
            account.add(accountDTO);
            
        }
        this.shoppingCart=new ShoppingCart(shoppingCart.getProducts());
    }


    public String getCustomerId() {
        return customerId;
    }

    public Collection<AccountDTO> getAccount() {
        return account;
    }

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public void setAccount(Collection<AccountDTO> account) {
        this.account = account;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
}
