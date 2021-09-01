import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.parsing.Parser;
import webshop.service.ProductDTO;

import org.junit.BeforeClass;
import org.junit.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.CoreMatchers.*;

public class ProductsRESTTest {

    @BeforeClass
    public static void setup() {
        RestAssured.port = Integer.valueOf(8080);
        RestAssured.baseURI = "http://localhost";
        RestAssured.basePath = "";
    }

    @Test
    public void testGetOneProduct() {
       
    	 ProductDTO productDto = new ProductDTO("300","car", 2000, "good car",2);
        given()
                .contentType("application/json")
                .body(productDto)
                .when().post("/products").then()
                .statusCode(200);
        
        given()
                .when()
                .get("products/300")
                .then()
                .contentType(ContentType.JSON)
                .and()
                .body("productNumber",equalTo("300"))
                .body("name",equalTo("car"))
                .body("price",equalTo(2000f))
                .body("description",equalTo("good car"))
                .body("quantity",equalTo(2));
        
        given()
                .when()
                .delete("products/300");
    }
    
    @Test
    public void testDeleteProduct() {
        // add the product to be deleted
        ProductDTO productDTO = new ProductDTO("100","Book", 18.95, "Joe Smith",1);
        given()
                .contentType("application/json")
                .body(productDTO)
                .when().post("/products").then()
                .statusCode(200);

        given()
                .when()
                .delete("products/100");

        given()
                .when()
                .get("products/100")
                .then()
                .contentType(ContentType.JSON);
              
    
    }
    

    @Test
    public void testAddProducts() {
        // add the product
        ProductDTO productDto = new ProductDTO("300","car", 2000, "good car",2);
        given()
                .contentType("application/json")
                .body(productDto)
                .when().post("/products").then()
                .statusCode(200);
        
        given()
                .when()
                .get("products/300")
                .then()
                .contentType(ContentType.JSON)
                .and()
                .body("productNumber",equalTo("300"))
                .body("name",equalTo("car"))
                .body("price",equalTo(2000f))
                .body("description",equalTo("good car"))
                .body("quantity",equalTo(2));
                
        //cleanup
        given()
                .when()
                .delete("products/300");
    }

    @Test
    public void testUpdateProduct() {
        // add the product
        ProductDTO productDto = new ProductDTO("300","car", 2000, "good car",2);
        ProductDTO updateProductDto = new ProductDTO("300","laptop", 2000, "good laptop",2);
        given()
                .contentType("application/json")
                .body(productDto)
                .when().post("/products").then()
                .statusCode(200);
        //update product
        given()
                .contentType("application/json")
                .body(updateProductDto)
                .when().put("/products/"+updateProductDto.getProductNumber())
                .then()
                .statusCode(200);
        // get the product and verify
        given()
                .when()
                .get("products/300")
                .then()
                .statusCode(200)
                .and()
                .body("productNumber",equalTo("300"))
                .body("name",equalTo("laptop"))
                .body("price",equalTo(2000f))
                .body("description",equalTo("good laptop"))
                .body("quantity",equalTo(2));
        //cleanup
        given()
                .when()
                .delete("products/300");
    }

    @Test
    public void testGetAllProducts() {
        // add the products
    	ProductDTO productDto = new ProductDTO("300","car", 2000, "good car",2);
        ProductDTO bookDto2 = new ProductDTO("301","laptop", 3000, "good laptop",1);
        given()
                .contentType("application/json")
                .body(productDto)
                .when().post("/products").then()
                .statusCode(200);
        given()
                .contentType("application/json")
                .body(bookDto2)
                .when().post("/products").then()
                .statusCode(200);

        // get all products and verify
        given()
                .when()
                .get("products")
                .then()
                .statusCode(200)
                .and()
                .body("products.productNumber",hasItems("300", "301"))
                .body("products.name",hasItems("car", "laptop"))
                .body("products.price",hasItems(2000f, 3000f))
                .body("products.description",hasItems("good car", "good laptop"))
                .body("products.quantity",hasItems(2, 1));
        //cleanup
        given()
                .when()
                .delete("products/300");
        given()
                .when()
                .delete("products/301");
    }

   
}
