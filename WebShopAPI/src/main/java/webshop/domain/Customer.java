package webshop.domain;

import java.util.ArrayList;
import java.util.Collection;

public class Customer extends Person {
    private String customerId;
    private Collection<Account> account;
    private ShoppingCart shoppingCart;


    public Customer(){
        super();

    }

    public Customer( Collection<Account> account, ShoppingCart shoppingCart) {
        super();
        this.account = account;
        this.shoppingCart = shoppingCart;
        this.customerId=super.getPersonId();
    }

    public void setCustomerId(String customerId){
        this.customerId=customerId;
    }
    public String getCustomerId(){
        return customerId;
    }

    public Collection<Account> getAccount() {
        return account;
    }

    public void setAccount(Collection<Account> account) {
        this.account = account;
    }

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
}
