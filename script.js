function createTable()
{
rn = 10;
cn = 10;
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);

     y.innerHTML="<center style ='color:green;'>"+c+""+r+"<br><input type='text' size=7>"+"</center>"; 
     // y.innerHTML="Row-"+c+" Column-"+r; 
    }
   }
}

createTable();