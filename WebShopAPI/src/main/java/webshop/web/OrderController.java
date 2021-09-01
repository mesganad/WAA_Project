package webshop.web;

import com.mongodb.client.model.Collation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import webshop.domain.Customer;
import webshop.domain.Order;
import webshop.domain.Person;
import webshop.domain.Product;
import webshop.domain.ShoppingCart;
import webshop.service.CustomerDTO;
import webshop.service.OrderDTO;
import webshop.service.OrderService;
import webshop.service.ProductDTO;
import webshop.service.ProductService;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@CrossOrigin
@RestController
public class OrderController {
    @Autowired
    OrderService orderService;
    @Autowired
    ProductService productService;

    @PostMapping("/orders")
    public ResponseEntity<?> addOrder(@RequestBody @Valid Order orderDto) {
    	Collection<Product> products=orderDto.getCustomer().getShoppingCart().getProducts();
    	int newQuantity=0;
    	
    	for(Product p: products) {
    		ProductDTO storePro=productService.findProduct(p.getProductNumber());
    		if(storePro!=null) {
    	    newQuantity=storePro.getQuantity()-p.getQuantity();
    	    
    	    if(newQuantity==0) {
    	    	productService.delete(p.getProductNumber());
    	    }
    	    else {
    	    storePro.setQuantity(newQuantity);
    	    productService.update(storePro);
    	    }
    		}
    		
    		
   	}   	
    	Customer cust=orderDto.getCustomer();
    	cust.setPersonId(orderDto.getCustomer().getPersonId());
		cust.setCustomerId(orderDto.getCustomer().getPersonId());
		cust.setName(orderDto.getCustomer().getName());
		cust.setEmail(orderDto.getCustomer().getEmail());
		cust.setPhone(orderDto.getCustomer().getPhone());
		cust.setStreet(orderDto.getCustomer().getStreet());
		cust.setCity(orderDto.getCustomer().getCity());
		cust.setZip(orderDto.getCustomer().getZip());
		cust.setRole(orderDto.getCustomer().getRole());
		cust.setPassword(orderDto.getCustomer().getPassword());
		
		orderDto.setCustomer(cust);
        orderService.add(orderDto);
        return new ResponseEntity<Order> (orderDto, HttpStatus.OK);
    }

    @PutMapping("/orders/{orderId}")
    public ResponseEntity<?> updateOrder(@PathVariable String orderId, @RequestBody @Valid Order orderDto) {
        //orderService.update(Order);
       Customer cust=orderDto.getCustomer();
    	cust.setPersonId(orderDto.getCustomer().getPersonId());
		cust.setCustomerId(orderDto.getCustomer().getPersonId());
		cust.setName(orderDto.getCustomer().getName());
		cust.setEmail(orderDto.getCustomer().getEmail());
		cust.setPhone(orderDto.getCustomer().getPhone());
		cust.setStreet(orderDto.getCustomer().getStreet());
		cust.setCity(orderDto.getCustomer().getCity());
		cust.setZip(orderDto.getCustomer().getZip());
		cust.setRole(orderDto.getCustomer().getRole());
		cust.setPassword(orderDto.getCustomer().getPassword());
		
		orderDto.setCustomer(cust);
        orderService.add(orderDto);
        
        return new ResponseEntity<> (orderDto, HttpStatus.OK);
    }
    @GetMapping("/orders/{orderStatus}")
    public ResponseEntity<?> getlAllOrders(@PathVariable("orderStatus") String orderStatus) {
        Orders allorders =new Orders();
        
        
        allorders.setOrders(orderService.findByStatus(orderStatus));

        return new ResponseEntity<Orders>(allorders, HttpStatus.OK);
    }

}
