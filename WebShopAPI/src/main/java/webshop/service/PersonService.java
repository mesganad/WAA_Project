package webshop.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import webshop.data.PersonRepository;
import webshop.domain.Person;
import webshop.domain.Product;

@Service
public class PersonService {
    @Autowired
    PersonRepository personRepository;

    public PersonDTO add(PersonDTO personDTO){
        Person person= ProductAdaptor.getPerson(personDTO);
        personRepository.save(person);
        return personDTO;
    }
    public void update(PersonDTO personDTO){

        Person person= ProductAdaptor.getPerson(personDTO);
        personRepository.save(person);
    }
    public Person findPerson(String name){
    	Person person=personRepository.findByName(name);
        return person;
    }
   
}
