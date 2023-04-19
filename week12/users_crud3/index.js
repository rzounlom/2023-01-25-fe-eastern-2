var emptyRow =
  "<tr><td colspan='5' class='text-center'> No Records Available</td></tr>";

$(document).ready(function () {
  debugger;
  $("#tblData tbody").append(emptyRow); // adding empty row on page load

  $("#btnAdd").click(function () {
    var name = $("#txtName").val().trim();
    var city = $("#txtCity").val().trim();
    var mobile = $("#txtMobile").val().trim();

    if (name != "" && city != "" && mobile != "") {
      // validation

      if ($("#tblData tbody").children().children().length == 1) {
        $("#tblData tbody").html("");
      }
      var srNo = $("#tblData tbody").children().length + 1;
      // creating dynamic html string
      var dynamicTr =
        "<tr><td>" +
        srNo +
        "</td><td>" +
        name +
        "</td><td>" +
        city +
        "</td><td>" +
        mobile +
        "</td><td> <button class='btn btn-danger btn-sm' > delete </button> </td></tr>";

      $("#tblData tbody").append(dynamicTr); // appending dynamic string to table tbody
      $("#txtName").val("");
      $("#txtCity").val("");
      $("#txtMobile").val("");
      $(".btn-sm").click(function () {
        // registering function for delete button

        $(this).parent().parent().remove();
        if ($("#tblData tbody").children().children().length == 0) {
          $("#tblData tbody").append(emptyRow);
        }
      });
    } else {
      alert("Please provide values");
    }
  });
});
