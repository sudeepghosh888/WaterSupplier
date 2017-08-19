<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
         <footer>
                <p>&copy; Defodeals 2014</p>
            </footer>
       
        <!--/.fluid-container-->
        <script src="<%=request.getContextPath() %>/vendors/jquery-1.9.1.min.js"></script>
        <script src="<%=request.getContextPath() %>/bootstrap/js/bootstrap.min.js"></script>
          <script src="<%=request.getContextPath() %>/bootstrap/js/bootstrap-select.js"></script>
         <script src="<%=request.getContextPath() %>/vendors/datatables/js/jquery.dataTables.min.js"></script>
         <script src="<%=request.getContextPath() %>/assets/scripts.js"></script>
        <script src="<%=request.getContextPath() %>/assets/DT_bootstrap.js"></script>
        <script src="<%=request.getContextPath() %>/vendors/easypiechart/jquery.easy-pie-chart.js"></script>
      
        <script>
        $(function() {
            // Easy pie charts
            $('.chart').easyPieChart({animate: 1000});
        });
        </script>