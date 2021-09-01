package webshop.service;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.time.LocalDate;


import webshop.domain.*;

public class ProductAdaptor {

    public static Product getProduct(ProductDTO productDto){
        Product product = new Product();
        if (productDto != null) {
            product = new Product(productDto.getProductNumber(),productDto.getName(),
                    productDto.getPrice(),productDto.getDescription(),productDto.getQuantity());
        }
        return product;
    }

    public static ProductDTO getProductDTO(Product product){
       ProductDTO productDto = new ProductDTO();
        if (product != null) {
            productDto = new ProductDTO(product.getProductNumber(),
                    product.getName(),
                    product.getPrice(),
                    product.getDescription(),
                    product.getQuantity());
        }
        return productDto;
    }
//account transformation
    public static Collection<Account> getAccount(Collection<AccountDTO> accountDto){
        Collection<Account> account = new ArrayList<Account>();
        if  (accountDto != null) {
        	for(AccountDTO a: accountDto) {
        		account.add(new Account(a.getCardType(),a.getAccountNumber(),a.getExpDate(),a.getCodeValidation()));
        		
        	}
                     }
        return account;
    }

    public static Collection<AccountDTO> getAccountDTO(Collection<Account> account){
        Collection<AccountDTO> accountDto = new ArrayList<AccountDTO>();
        if  (account != null) {
        	for(Account a: account) {
        		
        			accountDto.add(new AccountDTO(a.getCardType(),a.getAccountNumber(),a.getExpDate(),a.getCodeValidation()));
        		
        }
        }
        return accountDto;
    }

    public static Customer getCustomer(CustomerDTO customerDTO){
        Customer customer = new Customer();
        if (customerDTO != null) {
            customer = new Customer(getAccount(customerDTO.getAccount()),
                    customerDTO.getShoppingCart());
        }
        return customer;
    }

    public static CustomerDTO getCustomerDTO(Customer customer){
        CustomerDTO customerDto = new CustomerDTO();
        if (customer != null) {
            customerDto = new CustomerDTO(customer.getCustomerId(),
            		getAccountDTO(customer.getAccount()),
                    customer.getShoppingCart());
        }
        return customerDto;
    }

    public static Order getOrder(OrderDTO orderDto){
    	//DateTimeFormatter formatter=DateTimeFormatter.ofPattern("d/MM/yyyy");
    	
        Order order = new Order();
        
        if (orderDto != null) {
        	
        	
        	
        	
            order = new Order(orderDto.getOrderId(),getCustomer(orderDto.getCustomer()),orderDto.getOrderStatus());
        }
        return order;
    }

    
    public static OrderDTO getOrderDTO(Order order){
    	
        OrderDTO orderDto = new OrderDTO();
        if (order != null) {
        	Collection<AccountDTO> acctDtos=new ArrayList<>();
        	Collection<Account> accts=order.getCustomer().getAccount();
        	for(Account a: accts) {
        		acctDtos.add(new AccountDTO(a.getCardType(),a.getAccountNumber(),a.getExpDate(),a.getCodeValidation()));
        	}
        	
        	
        	CustomerDTO cust = new CustomerDTO(order.getCustomer().getCustomerId(),acctDtos,order.getCustomer().getShoppingCart());
            orderDto = new OrderDTO(order.getOrderId(),cust,order.getOrderStatus());
            
        }
        return orderDto;
    }

    public static Employee getEmployee(EmployeeDTO empDto){
        Employee emp = new Employee();
        if (empDto != null) {
            emp = new Employee(empDto.getEmpId());
        }
        return emp;
    }

    public static EmployeeDTO getEmployeeDto(Employee emp){
        EmployeeDTO empDto = new EmployeeDTO();
        if (emp != null) {
            empDto = new EmployeeDTO(emp.getEmpId());
        }
        return empDto;
    }

    public static Person getPerson(PersonDTO personDto){
        Person person = new Person();
        if (personDto != null) {
            person = new Person(personDto.getPersonId(),personDto.getName(),personDto.getEmail(),
            		personDto.getPhone(),personDto.getStreet(),person.getCity(),personDto.getZip(),
            		personDto.getRole(),personDto.getPassword());
        }
        return person;
    }

    public static PersonDTO getPersonDTO(Person person){
        PersonDTO personDto = new PersonDTO();
        if (person != null) {
            personDto = new PersonDTO(person.getPersonId(),person.getName(),person.getEmail(),
                    person.getPhone(),person.getStreet(),person.getCity(),person.getZip(),
                    person.getRole(),person.getPassword());
        }
        return personDto;
    }

}
