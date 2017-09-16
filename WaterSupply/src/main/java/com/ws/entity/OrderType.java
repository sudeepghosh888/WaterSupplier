package com.ws.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ORDERTYPE")
public class OrderType implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "ORDER_TYPE_ID", length = 20)
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long orderTypeId;
	@Column(name = "ORDER_TYPE", length = 10)
	private String orderType;

	public long getOrderTypeId() {
		return orderTypeId;
	}

	public void setOrderTypeId(long orderTypeId) {
		this.orderTypeId = orderTypeId;
	}

	public String getOrderType() {
		return orderType;
	}

	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
