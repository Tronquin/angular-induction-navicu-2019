package navicu.jacidi.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProductController {

    Product products[] = new Product[6];

    ProductController() {
        products[0] = new Product(0, "Bill Murray #1", 59.99, 4.3, "He Fired His Agents In Favor Of An 800 Number",
                "For what you pay this is a steal.", new String[] { "electronics", "hardware" });

        products[1] = new Product(1, "Bill Murray #2", 64.99, 3.5, "All Of His Lines In Caddyshack Were Improvised",
                "For what you pay this is a steal.", new String[] { "books" });

        products[2] = new Product(2, "Bill Murray #3", 74.99, 4.2, "He Really Did Make Those Three Strikes In Kingpin",
                "For what you pay this is a steal.", new String[] { "electronics" });
        products[3] = new Product(3, "Bill Murray #4", 84.99, 3.9, "He's Been Known To Crash Parties",
                "For what you pay this is a steal.", new String[] { "hardware" });
        products[4] = new Product(4, "Bill Murray #5", 94.99, 5, "He Is Worth $140 Million",
                "For what you pay this is a steal.", new String[] { "electronics", "hardware" });
        products[5] = new Product(5, "Bill Murray #6", 54.99, 4.6, "Hunter S. Thompson Almost Drowned Him",
                "For what you pay this is a steal.", new String[] { "books" });
    }

    @RequestMapping(value = "products/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Product getProductById(@PathVariable("id") String productId) {

        int prodId = Integer.parseInt(productId);

        for (Product prd : products) {
            if (prd.id == prodId) {
                return prd;
            }
        }

        return null;
    }

    @RequestMapping(value = "products", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Product[] getProducts() {

        return products;
    }
}