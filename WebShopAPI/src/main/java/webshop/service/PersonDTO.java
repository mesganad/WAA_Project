package webshop.service;

public class PersonDTO {

    private String personId;
    private String name;
    private String email;
    private String phone;
    private String street;
    private String city;
    private String zip;
    private String role;
    private String password;

    public PersonDTO(){

    }
    public PersonDTO(String personId,String name, String email, String phone, String street, String city,
    		String zip,String role, String password) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.role = role;
        this.password=password;
        this.personId=personId;

    }

    public String getPersonId() {
        return personId;
    }
    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getStreet() {
        return street;
    }

    public String getCity() {
        return city;
    }

    public String getZip() {
        return zip;
    }

    public String getRole() {
        return role;
    }

    public String getPassword() {
        return password;
    }

    public void setPersonId(String personId) {
        this.personId = personId;
    }
    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
