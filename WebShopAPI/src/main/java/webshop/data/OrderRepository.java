package webshop.data;


import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import webshop.domain.Order;

import org.springframework.data.mongodb.repository.MongoRepository;


import java.util.Collection;
import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {

	Collection<Order> findByOrderStatus(String orderStatus);
    
//    @Query("{'Order.orderStatus' : ?0}")
//    List<Order> findOrderWithState(String orderStatus);



    //Collection<Order> findByAuthor(String author);

}
