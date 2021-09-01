package webshop.service;

public class ProductDTO {

    private String productNumber;
    private String name;
    private double price;
    private String description;
    private int quantity;

    public ProductDTO() {

    }

    public ProductDTO(String productNumber, String name, double price, String description, int quantity) {
        this.productNumber = productNumber;
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }

    public String getProductNumber() {
        return productNumber;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setProductNumber(String productNumber) {
        this.productNumber = productNumber;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
