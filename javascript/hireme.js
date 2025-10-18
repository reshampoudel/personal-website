function showMessage()
//     {
    {
   // var empt = document.forms["form1"]["text1"].value;
   var x = document.forms["form1"]["firstname"].value;
     var y= document.forms["form1"]["lastname"].value;
     var z= document.forms["form1"]["email"].value;
     var a= document.forms["form1"]["cname"].value;
   // if (empt == "")
   if (x == "" || x == null || y=="" || y==null  || z=="" || z==null || a==""  || a==null ) 
    {
    alert("Please input a Value");
    return false;
    }
    else 
    {
    alert('Thanks for requesting.I will get back to you as soon as possible');
    return true; 
    }
    }
