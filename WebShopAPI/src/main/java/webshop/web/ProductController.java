package webshop.web;


import webshop.service.ProductDTO;
import webshop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;
	
	@DeleteMapping("/products/{productNumber}")
    public ResponseEntity<?> deleteProduct(@PathVariable String productNumber) {
        ProductDTO productDto = productService.findProduct(productNumber);
        if(productDto==null) {
        	 return new ResponseEntity<CustomErrorType>(new CustomErrorType("Product with product number = " + productNumber + " is not available"),HttpStatus.NOT_FOUND);
        	 
        
        }
        else {
        	productService.delete(productNumber);
            return new ResponseEntity<>(HttpStatus.OK);
        }      
       
    }
	
	@PostMapping("/products")
    public ResponseEntity<?> addProduct(@RequestBody @Valid ProductDTO productDto) {
    	productService.add(productDto);
        return new ResponseEntity<ProductDTO> (productDto, HttpStatus.OK);
    }

	@PutMapping("/products/{productNumber}")
    public ResponseEntity<?> updateProduct(@PathVariable String productNumber, @RequestBody @Valid ProductDTO productDto) {
		productService.update(productDto);
		return new ResponseEntity<> (productDto, HttpStatus.OK);

    }

    @GetMapping("/products")
    public ResponseEntity<?> getlAlProducts() {
        Stock allproducts =new Stock();

            allproducts.setBooks(productService.findAllProducts());

        return new ResponseEntity<Stock> (allproducts, HttpStatus.OK);
    }
    
    @GetMapping("/products/{productNumber}")
    public ResponseEntity<?> getProduct(@PathVariable String productNumber) {
        ProductDTO productDto = productService.findProduct(productNumber);
        
        if (productDto==null) {
            return new ResponseEntity<CustomErrorType>(new CustomErrorType("Product with product number = " + productNumber + " is not available"),HttpStatus.NOT_FOUND);
        }
        
        return new ResponseEntity<ProductDTO> (productDto, HttpStatus.OK);
    }


}


