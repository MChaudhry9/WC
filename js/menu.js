let flag=getCookie("flag");
if(flag =="true") 
      document.writeln("<a href='logoff.html'><span class='button'>Logoff</span></a>");
else 
    document.writeln("<a href='login.html'><span class='button'>Login</span></a>");	

document.writeln("<a href='about.html'><span class='button'>About Us</span></a>");  
document.writeln("<a href='products.html'><span class='button'>Inventory</span></a>");	
document.writeln("<a href='contact.html'><span class='button'>Contact</span></a>");
document.writeln("<a href='social.html'><span class='button'>Social Media</span></a>");
