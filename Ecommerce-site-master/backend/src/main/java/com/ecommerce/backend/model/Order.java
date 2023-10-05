package com.ecommerce.backend.model;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")

public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;

	@ManyToOne
	@JoinColumn(name = "productId")
	private Product product;

	@CreationTimestamp
	private Timestamp orderDate;
	@Column
	private Long quantity;
	@Column
	private String shipAdd;
	@Column
	private String billAdd;
	

	public Timestamp getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Timestamp orderDate) {
		this.orderDate = orderDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public String getShipAdd() {
		return shipAdd;
	}

	public void setShipAdd(String shipAdd) {
		this.shipAdd = shipAdd;
	}

	public String getBillAdd() {
		return billAdd;
	}

	public void setBillAdd(String billAdd) {
		this.billAdd = billAdd;
	}

	public Order(Long id, User user, Product product,Long quantity,String shipAdd,String billAdd) {
		super();
		this.id = id;
		this.user = user;
		this.product = product;
		this.quantity = quantity;
		this.shipAdd=shipAdd;
		this.billAdd=billAdd;
	}

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", user=" + user + ", product=" + product + ", orderDate=" + orderDate
				+ ", quantity=" + quantity + ", shipAdd=" + shipAdd + ", billAdd=" + billAdd + "]";
	}

	

}
