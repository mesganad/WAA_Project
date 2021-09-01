package webshop.domain;

import webshop.web.Stock;

public class Employee extends Person{
    private String empId;
    private Stock stock;

    public Employee(){

    }
    public Employee(String empId) {
        this.empId = super.getPersonId();
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
