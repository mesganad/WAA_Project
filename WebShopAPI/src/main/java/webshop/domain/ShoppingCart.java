package webshop.domain;

import java.util.Collection;

public class ShoppingCart {
private Collection<Product> products;

public ShoppingCart() {}

    public ShoppingCart(Collection<Product> products) {
        this.products = products;
    }

    public Collection<Product> getProducts() {
        return products;
    }

    public void setProducts(Collection<Product> products) {
        this.products = products;
    }

}
