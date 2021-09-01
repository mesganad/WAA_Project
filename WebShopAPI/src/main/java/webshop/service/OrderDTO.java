package webshop.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import webshop.domain.Customer;


@Document
public class OrderDTO {
	@Id
    private String orderId;
    private CustomerDTO customer;
    private String orderStatus;
   

   
    public OrderDTO( String orderId, CustomerDTO customer,String orderStatus) {
       
        this.orderId = orderId;
        this.orderStatus=orderStatus;
        CustomerDTO customer2 = new CustomerDTO(customer.getCustomerId(),customer.getAccount(),customer.getShoppingCart());
        this.customer = customer2;
    }

    public OrderDTO(){

    }

    public CustomerDTO getCustomer() {
        return customer;
    }

    public String getOrderId() {
        return orderId;
    }
    public String getOrderStatus() {
        return orderStatus;
    }
    
    

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public void setCustomer(CustomerDTO customer) {
        this.customer = customer;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }
   
}
