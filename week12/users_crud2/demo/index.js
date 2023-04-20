//create empty row for no records present
let emptyRow =
  "<tr><td colspan='5' class='text-center'> No Records Available</td></tr>";

//make sure all code hasloaded before making any DOM changes
$(document).ready(function () {
  $("#tblData tbody").append(emptyRow); // add the empty row once the page loads

  $("#btnAdd").click(function () {
    //get value of each form input
    let name = $("#txtName").val().trim();
    let city = $("#txtCity").val().trim();
    let mobile = $("#txtMobile").val().trim();

    // console.log({ name, city, mobile });

    const mobileValidation =
      new RegExp(/^[\d]*$/gi).test(mobile) && mobile.length === 10; //make sure only numbers are in the mobile input and there are 7 numbers
    // console.log({
    //   mobile,
    //   isNumber: new RegExp(/^[\d]*$/gi).test(mobile),
    //   mobileLength: mobile.length === 10,
    //   mobileValidation,
    // });

    if (name === "" || city === "" || mobile === "") {
      alert("Please provide values"); //alert user of missing values
      return; // exit function
    } else if (!mobileValidation) {
      alert("Please enter a valid phone number with only 10 digits"); //alert user of missing values
      return; // exit function
    } else {
      if ($("#tblData tbody").children().children().length == 1) {
        $("#tblData tbody").html("");
      }

      //format our 10-digit number to format 123-456-7890
      let formattedNumber = function (num) {
        let beginning = mobile.slice(0, 3);
        let middle = mobile.slice(3, 6);
        let end = mobile.slice(6);

        return `${beginning}-${middle}-${end}`;
      };

      // console.log(formattedNumber(mobile));

      //get number of table rows in order to increase the row id by 1
      let srNo = $("#tblData tbody").children().length + 1;

      // creating dynamic html string to append to table
      let dynamicTr = `
         <tr>
           <td>${srNo}</td>
           <td>${name}</td>
           <td>${city}</td>
           <td>${formattedNumber(mobile)}</td>
           <td><button class='btn btn-danger btn-sm'>delete</button> </td>
         </tr>
         `;

      $("#tblData tbody").append(dynamicTr); // appending dynamic string to table tbody

      //reset inputs to empty strings
      $("#txtName").val("");
      $("#txtCity").val("");
      $("#txtMobile").val("");

      //add delete functionality to each row
      $(".btn-sm").click(function () {
        // registering function for delete button
        $(this).parent().parent().remove();
        if ($("#tblData tbody").children().children().length == 0) {
          $("#tblData tbody").append(emptyRow);
        }
      });
    }
  });
});
