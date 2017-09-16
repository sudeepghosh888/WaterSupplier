package com.ws.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "CART")
public class Cart implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "CART_ID", length = 20)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long cartId;
	@Column(name = "USER_ID", length = 20)
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private User user;
	@Column(name = "SUPPLIER_ID", length = 20)
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Supplier> supplier;
	@Column(name = "PRODUCT_ID", length = 20)
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Product> product;
	@Column(name = "QUANTITY", length = 10)
	private int quantity;
	@Column(name = "PRICE_ID", length = 20)
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Price> price;
	@Column(name = "ORDER_TYPE_ID", length = 20)
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<OrderType> orderType;
	@Column(name = "TOTAL", length = 20)
	private float total;

	public long getCartId() {
		return cartId;
	}

	public void setCartId(long cartId) {
		this.cartId = cartId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Set<Supplier> getSupplier() {
		return supplier;
	}

	public void setSupplier(Set<Supplier> supplier) {
		this.supplier = supplier;
	}

	public Set<Product> getProduct() {
		return product;
	}

	public void setProduct(Set<Product> product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Set<Price> getPrice() {
		return price;
	}

	public void setPrice(Set<Price> price) {
		this.price = price;
	}

	public Set<OrderType> getOrderType() {
		return orderType;
	}

	public void setOrderType(Set<OrderType> orderType) {
		this.orderType = orderType;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
