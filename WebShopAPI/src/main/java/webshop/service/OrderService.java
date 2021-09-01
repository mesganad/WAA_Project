package webshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.jaxb.OrderAdapter;
import webshop.data.OrderRepository;
import webshop.domain.Order;
import org.springframework.stereotype.Service;


import webshop.domain.OrderStatus;
import webshop.domain.Product;
import webshop.web.Orders;

import java.util.ArrayList;
import java.util.Collection;


@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public void add(Order orderDTO){
       
        orderRepository.save(orderDTO);
      
    }
    public void update(OrderDTO orderDTO){

        Order order= ProductAdaptor.getOrder(orderDTO);
        orderRepository.save(order);
    }

//    public void delete(String orderId){
//        Order order=orderRepository.findById(orderId).get();
//        orderRepository.delete(order);
//    }

    public Collection<Order> findByStatus(String orderStatus){
    
    	 Collection<Order> orders = orderRepository.findByOrderStatus(orderStatus);
         Collection<OrderDTO> orderDtos=new ArrayList<>();
         
         
         for(Order b:orders){
        	
             System.out.println(b.getCustomer().getName());
         }
         return orders;
     }
   }




