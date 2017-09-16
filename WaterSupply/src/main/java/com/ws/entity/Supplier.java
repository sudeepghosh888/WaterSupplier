package com.ws.entity;

import java.io.File;
import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "SUPPLIER")
public class Supplier implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "SUPPLIER_ID", length = 20)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long supplierId;
	@Column(name = "USER_ID", length = 20)
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	@Column(name = "TIN_NUMBER", length = 15)
	private String tinNumber;
	@Column(name = "SHOP_NAME", length = 15)
	private String shopName;
	@Column(name = "SHOP_PHONE", length = 15)
	private String shopPhone;
	@Column(name = "LICENCE")
	private File licence;

	public long getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(long supplierId) {
		this.supplierId = supplierId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getTinNumber() {
		return tinNumber;
	}

	public void setTinNumber(String tinNumber) {
		this.tinNumber = tinNumber;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getShopPhone() {
		return shopPhone;
	}

	public void setShopPhone(String shopPhone) {
		this.shopPhone = shopPhone;
	}

	public File getLicence() {
		return licence;
	}

	public void setLicence(File licence) {
		this.licence = licence;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
