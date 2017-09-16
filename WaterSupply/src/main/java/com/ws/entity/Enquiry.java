package com.ws.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ENQUIRY")
public class Enquiry implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "ENQUIRY_ID", length = 20)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long enquiryId;
	@Column(name = "NAME", length = 40)
	private String name;
	@Column(name = "EMAIL", length = 20)
	private String email;
	@Column(name = "MOBILE", length = 12)
	private long mobile;
	@Column(name = "CITY", length = 40)
	private String city;
	@Column(name = "COMMENT", length = 50)
	private String comments;
	public long getEnquiryId() {
		return enquiryId;
	}
	public void setEnquiryId(long enquiryId) {
		this.enquiryId = enquiryId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
