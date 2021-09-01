package webshop.domain;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Order {
	@Id
    private String orderId;
    private Customer customer;
    private String orderStatus;
    

    
    public Order( String orderId, Customer customer,String orderStatus) {
        this.customer = customer;
        this.orderId = orderId;
        this.orderStatus=orderStatus;
        
    }

    public Order(){

    }

    public Customer getCustomer() {
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

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }
    

}
