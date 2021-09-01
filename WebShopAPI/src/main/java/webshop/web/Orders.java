package webshop.web;

import webshop.domain.Order;
import webshop.service.OrderDTO;
import webshop.service.ProductDTO;

import java.util.ArrayList;
import java.util.Collection;

public class Orders {
    private Collection<Order> orders = new ArrayList<Order>();

    public Collection<Order> getOrders() {
        return orders;
    }

    public void setOrders(Collection<Order> orders) {
        this.orders = orders;
    }
}
