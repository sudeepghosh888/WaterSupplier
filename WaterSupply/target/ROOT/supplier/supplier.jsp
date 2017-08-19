<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
     

    <title>Gentallela Alela! | </title>
     <%@ include file="header.jsp" %>

  </head>

  <body class="login">
 
      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
            <form id="supplierlogin" method="POST" action="/supplier/login">
              <h1>Supplier Login</h1>
              <div>
                <input type="email" class="form-control" placeholder="Username" required="required" name="emailId"/>
              </div>
              <div>
                <input type="password" class="form-control" placeholder="Password" required="required" name="password" />
              </div>
              <div>
                <button href="index.html" type="submit" class="btn btn-success col-sm-12">Log in</button>
               </div>

              <div class="clearfix"></div>

            </form>
          </section>
        </div>

     </div>
         <script src="/supplier/vendors/jquery/dist/jquery.min.js"></script>
     
         <script src="/supplier/vendors/sweetalert2/sweetalert2.min.js"></script>
     
         <script src="/supplier/js/notify.min.js"></script>

	<script type="text/javascript">
		var frm = $('#supplierlogin');
		frm.submit(function(e) {
			$.ajax({
				type : frm.attr('method'),
				url : frm.attr('action'),
				data : frm.serialize(), // serializes the form's elements.
				success : function(data) {
					if (data.status === 'success') {
						swal('Good job!', data.message, 'success')
						location.href = "/mydashboard";
					} else if (data.status === 'fail') {
						$("#supplierlogin").notify(data.message, {
							position : "top center"
						});
					} else {
						swal('Oops...', 'Something went wrong!', 'error')
					}
				}
			});
			e.preventDefault(); // avoid to execute the actual submit of the form.
		});
	</script>
</body>
</html>