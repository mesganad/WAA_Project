package webshop.service;

import webshop.data.ProductRepository;
import webshop.domain.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public void add(ProductDTO productDTO){
        Product product= ProductAdaptor.getProduct(productDTO);
        productRepository.save(product);
    }
    public void update(ProductDTO productDTO){
        Product product= ProductAdaptor.getProduct(productDTO);
        productRepository.save(product);
    }

    public void delete(String productNumber){
       // Product product=productRepository.findById(productNumber).get();
        productRepository.deleteById(productNumber);
    }

    public Collection<ProductDTO> findAllProducts(){
        Collection<Product> products = productRepository.findAll();
        Collection<ProductDTO> productDTOS=new ArrayList<>();
        for(Product b:products){
            productDTOS.add(ProductAdaptor.getProductDTO(b));
        }
        return productDTOS;
    }


        public ProductDTO findProduct(String productNumber){
       Product product= productRepository.findById(productNumber).orElse(null);
       if(product==null) {
    	   return null;
       }       
       return ProductAdaptor.getProductDTO(product);
    }


}
