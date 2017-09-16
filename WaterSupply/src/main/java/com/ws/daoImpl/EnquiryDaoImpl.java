package com.ws.daoImpl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ws.dao.EnquiryDao;
import com.ws.entity.Enquiry;

@Transactional
@Repository
public class EnquiryDaoImpl implements EnquiryDao{
	@Autowired
	SessionFactory session;
	public boolean saveOrUpdate(Enquiry user) {
		session.getCurrentSession().saveOrUpdate(user);
		return true;
	}

	public List<Enquiry> list() {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean delete(Enquiry user) {
		// TODO Auto-generated method stub
		return false;
	}

	public List<Enquiry> getByName(String colName, String colValue) {
		// TODO Auto-generated method stub
		return null;
	}

	public Enquiry getObject(long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
