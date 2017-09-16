package com.ws.dao;

import java.util.List;

import com.ws.entity.Enquiry;


public interface EnquiryDao {
	public boolean saveOrUpdate(Enquiry user);
	public List<Enquiry> list();
	public boolean delete(Enquiry user);
	public  List<Enquiry> getByName(String colName, String colValue);
    public Enquiry getObject(long id);

}
