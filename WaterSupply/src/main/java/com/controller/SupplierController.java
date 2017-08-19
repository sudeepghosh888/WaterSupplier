package com.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.entity.User;

@Controller
@RequestMapping(value="/supplier")
public class SupplierController {
	@RequestMapping(value="/", method = RequestMethod.GET)
	public ModelAndView getPage(HttpServletRequest request,
			HttpServletResponse response){
		System.out.println("supplier contoller");
 		return new ModelAndView("/SupplierDashboard/supplierView/index");
 	 
	}

	@RequestMapping(value="/register-form", method = RequestMethod.GET)
	public ModelAndView registerFrom(HttpServletRequest request,
			HttpServletResponse response){
 		return new ModelAndView("/SupplierDashboard/supplierView/register-from");
 	 
	}

}
