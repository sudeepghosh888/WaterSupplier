<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html class="no-js">
<head>
        <title>Admin</title>
        <!-- Bootstrap -->
        
     <link href="<%=request.getContextPath() %>/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
      <link href="<%=request.getContextPath() %>/bootstrap/css/bootstrap-select.css" rel="stylesheet" media="screen">
        <link href="<%=request.getContextPath() %>/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
        <link href="<%=request.getContextPath() %>/vendors/easypiechart/jquery.easy-pie-chart.css" rel="stylesheet" media="screen">
        <link href="<%=request.getContextPath() %>/assets/styles.css" rel="stylesheet" media="screen">
           <link href="<%=request.getContextPath() %>/assets/DT_bootstrap.css" rel="stylesheet" media="screen">
           
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script src="<%=request.getContextPath() %>/js/login_validate.js"></script>
      <script src="<%=request.getContextPath() %>/vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
  
    
    </head>
    <style>
	.table_container{
		width:100%;
		float:left;
		overflow: auto;
	   }
  </style>
    </head>
    
    <body>
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                    </a>
                    <a class="brand" href="#"><img src="<%=request.getContextPath() %>/img/main_logo.png" height="100px" width="120px"></a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-user"></i> Defodeals <i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">Profile</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a tabindex="-1" href="<%=request.getContextPath() %>/admin_login.html">Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav">
                            <li class="active">
                                <a href="<%=request.getContextPath() %>/admin_index.jsp">Dashboard</a>
                            </li>
                            <li class="dropdown">
                                <a href="bannerList" data-toggle="dropdown" class="dropdown-toggle">Add<b class="caret"></b>

                                </a>
                                 <ul class="dropdown-menu">   
                                    <!-- <li>
                                        <a tabindex="-1" href="bannerList">Banner List</a>
                                    </li> -->
                                    <li><a href="<%=request.getContextPath() %>/admin/category">Add Category</a></li>
									<li><a href="<%=request.getContextPath() %>/admin/subCategory">Add SubCategory</a></li>
									<li><a href="<%=request.getContextPath() %>/admin/productCategory">Add ProductCategory</a></li>
									<li><a href="<%=request.getContextPath() %>/admin/filterCategory">Add Filter Category</a></li>
										<li><a href="<%=request.getContextPath() %>/admin/listFilterSize">Add Filter Size</a></li>
                                   </ul> 
                            </li>
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">Products/Catalog <i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                 <li><a href="<%=request.getContextPath() %>/Product.do?action=listVendor&amp;action2=prod&amp;action3=add">Add Product</a></li>
                                 <li><a href="<%=request.getContextPath() %>/Product.do?action=productList&amp;action2=prod&amp;action3=view">View Product</a></li>
                                 <li><a href="<%=request.getContextPath() %>/Group.do?action=productList&action2=group">Add Product in Group</a></li>
                           
                                </ul>
                            </li>
                              <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">Upload<i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                 <li><a href="<%=request.getContextPath() %>/Upload.do?action=uploadHomePage">Upload Home Page Image</a></li>
                             
                           
                                </ul>
                            </li>
                            <li class="dropdown" > <a href="<%=request.getContextPath() %>/Order.do?action=listOrder"   role="button" class="dropdown-toggle" data-toggle="dropdown">Orders <i class="caret"></i></a> 
                            
                             <ul class="dropdown-menu">
                               
                                 <li><a href="<%=request.getContextPath() %>/Product.do?action=productList&action2=offline">Offline Orders</a></li>                            
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">Users <i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="<%=request.getContextPath() %>/Admin.do?action=getAllUser&amp;action3=view">User List</a></li>
                                    <li><a href="<%=request.getContextPath() %>/Admin.do?action=getAllReview&amp;action3=view">Review List</a></li>
                                
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span3" id="sidebar">
                    <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                        <li class="active">
                            <a href=""><i class="icon-chevron-right"></i> Dashboard</a>
                        </li>
                       
                       
                        <li>
                            <a href="<%=request.getContextPath() %>/Order.do?action=listOrder" ><span class="badge badge-success pull-right">731</span> Orders</a>
                        </li>
                        <li>
                            <a href="<%=request.getContextPath() %>/Admin.do?action=getAllUser&amp;action3=view" ><span class="badge badge-info pull-right">1,234</span> Users</a>
                        </li>
                         <li>
                            <a href="<%=request.getContextPath() %>/Vendor.do?action=listVendor&amp;action3=add" ><span class="badge badge-info pull-right">1,234</span> Clients</a>
                        </li>
                        
                        <li>
                            <a  href="<%=request.getContextPath() %>/Admin.do?action=getAllReview&amp;action3=view"  ><span class="badge badge-info pull-right" >731</span> Review List</a>
                        </li>
                        <li>
                            <a href="#"><span class="badge badge-info pull-right">2,221</span> Contact Us</a>
                        </li>
                          <li>
                            <a href="<%=request.getContextPath() %>/Admin.do?action=pinCodeList"><span class="badge badge-info pull-right">2,221</span> PinCode List</a>
                        </li>
                     
                    </ul>
                </div>