package com.ecommerce.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.model.Order;
import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.model.User;
import com.ecommerce.backend.repository.OrderRepository;
import com.ecommerce.backend.repository.ProductRepository;
import com.ecommerce.backend.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrderById(Long orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new EntityNotFoundException("Order not found with id: " + orderId));
    }

    @Override
    public ResponseEntity<String> createOrder(List<Order> order){
    	
    	
    	System.out.println("order");
    	System.out.println(order	);
    	for(Order o : order) {
    		
	    	// Check if user is not null and has a valid ID
	       // if (o.getUser() == null || o.getUser().getId() == null) {
	        //    return ResponseEntity.badRequest().body("User is required");
	        //}

	        // Check if product is not null and has a valid ID
	        //if (o.getProduct() == null || o.getProduct().getProductId() == null) {
	         //   return ResponseEntity.badRequest().body("Product is required");
	        //}
	        
	        orderRepository.save(o);
	        
    	}
		/*
		 * User user = userRepository.findById(order.getUser().getId()).orElseThrow();
		 * Product product =
		 * productRepository.findById(order.getProduct().getProductId()).orElseThrow();
		 */

//        Order newOrder = new Order();
//        newOrder.setUser(user);
//        newOrder.setProduct(product);
        return ResponseEntity.ok("Order created successfully");
    }

    @Override
    public List<Order> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }
}
