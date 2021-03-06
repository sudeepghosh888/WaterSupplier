package com.ws.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.ws.entity.Enquiry;
import com.ws.entity.User;
import com.ws.services.EnquiryServices;
import com.ws.services.UserServices;

@Controller
public class HomeController {
	@Autowired
	UserServices userServices;
	@Autowired
	EnquiryServices enquiryServices;
	//@Autowired
    
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public ModelAndView getPage(HttpServletRequest request,	HttpServletResponse response){
		System.out.println("home contoller");
		List<User> users = userServices.list();
 		return new ModelAndView("index");
	}
	
	@RequestMapping(value="/enquiry", method = RequestMethod.POST)
	public ModelAndView enquiry(Enquiry enquiry, HttpServletRequest request,HttpServletResponse response){
		System.out.println("enquiry");
		enquiryServices.saveOrUpdate(enquiry);
 		return new ModelAndView("index");
 	 
	}

}
