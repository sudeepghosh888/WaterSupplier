package com.ws.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ORDERS")
public class Orders implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "ORDER_ID", length = 20)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long orderId;
	@Column(name = "USER_ID", length = 20)
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private long userId;
	@Column(name = "SUPPLIER_ID", length = 20)
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private long supplierId;
	@Column(name = "CART_ID", length = 20)
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private long cartId;
	@Column(name = "DATE_TIME")
	private Date dateTime;
	@Column(name = "STATUS", length = 10)
	private String status;
	@Column(name = "ORDER_DETAIL_ID", length = 20)
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "ORDER_DETAIL_ID", nullable = false)
	private Set<OrderDetail> orderDetail;
	@Column(name = "AMOUNT", length = 10)
	private float amount;
	@Column(name = "COMMENT", length = 50)
	private String comment;

	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public long getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(long supplierId) {
		this.supplierId = supplierId;
	}

	public long getCartId() {
		return cartId;
	}

	public void setCartId(long cartId) {
		this.cartId = cartId;
	}

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Set<OrderDetail> getOrderDetail() {
		return orderDetail;
	}

	public void setOrderDetail(Set<OrderDetail> orderDetail) {
		this.orderDetail = orderDetail;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
