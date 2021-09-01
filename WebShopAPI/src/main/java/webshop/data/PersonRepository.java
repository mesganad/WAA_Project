package webshop.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import webshop.domain.Person;
import webshop.domain.Product;

@Repository
public interface PersonRepository extends MongoRepository<Person,String> {
	 Person findByName(String name);
}
