package com.ws.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "PRICE")
public class Price implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "PRICE_ID", length = 20)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long priceId;
	@Column(name = "PRODUCT_ID", length = 20)
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Product product;
	@Column(name = "SUPPLIER_ID", length = 20)
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Supplier supplier;
	@Column(name = "PRICE", length = 10)
	private float price;
	@Column(name = "ORDER_TYPE_ID", length = 20)
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private OrderType orderType;

	public long getPriceId() {
		return priceId;
	}

	public void setPriceId(long priceId) {
		this.priceId = priceId;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public OrderType getOrderType() {
		return orderType;
	}

	public void setOrderType(OrderType orderType) {
		this.orderType = orderType;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
