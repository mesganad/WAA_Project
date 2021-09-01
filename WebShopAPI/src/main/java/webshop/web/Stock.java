package webshop.web;

import webshop.service.ProductDTO;

import java.util.ArrayList;
import java.util.Collection;

public class Stock {
    private Collection<ProductDTO> products = new ArrayList<ProductDTO>();

    public Collection<ProductDTO> getProducts() {
        return products;
    }

    public void setBooks(Collection<ProductDTO> products) {
        this.products = products;
    }
}
