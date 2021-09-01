package webshop.data;

import org.springframework.stereotype.Repository;
import webshop.domain.Product;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Collection;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {


    Product findByProductNumber(String productNumber);


}
