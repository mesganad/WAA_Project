package webshop.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import webshop.domain.Person;
import webshop.service.PersonDTO;
import webshop.service.PersonService;

import javax.validation.Valid;

@CrossOrigin
@RestController
public class PersonController {
    @Autowired
    PersonService personService;

    @GetMapping("/persons/{name}")
    public ResponseEntity<?> getPerson(@PathVariable String name) {
        Person person=personService.findPerson(name);
        return new ResponseEntity<> (person, HttpStatus.OK);
    }
    @PostMapping("/persons")
    public ResponseEntity<?> addPerson(@RequestBody @Valid PersonDTO personDto) {
        personService.add(personDto);
        return new ResponseEntity<PersonDTO> (personDto, HttpStatus.OK);
    }

    @PutMapping("/persons/{name}")
    public ResponseEntity<?> updatePerson(@PathVariable String name, @RequestBody @Valid PersonDTO personDto) {

        personService.update(personDto);
        return new ResponseEntity<> (personDto, HttpStatus.OK);
    }
   

}
