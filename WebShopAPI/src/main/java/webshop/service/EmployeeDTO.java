package webshop.service;

import webshop.domain.Person;
import webshop.web.Stock;

public class EmployeeDTO extends PersonDTO {
    private String empId;
    private Stock stock;

   public EmployeeDTO(){

    }
    public EmployeeDTO(String empId) {
        this.empId = empId;
    }



    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String empId) {
        this.empId = empId;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }
}
