$("#cp1").hide();
$("#cp2").hide();
function enco(){
    //console.log("Encode message");
    var input = document.getElementById("input").value;
    var pass = document.getElementById("pass").value;
    if(input=="" || pass==""){alert("Message and Passord Both are required"); return false;}    
    console.log(input+" length is "+input.length);
    console.log(pass+" length is "+pass.length);
    var i = 0;
    var c = -1;
    var re = "";
    var alpha = "~1234567890`-=_+qwertyu!@#$%^&*()iop[]\\QWERTY UIOP{}|asdfghjkl;ASDFGHJKL:\"\'zxcvbnm,./ZXCVBNM<>?";
    console.log(alpha);
    while(i<input.length){
        c+=1;
        if(c>=pass.length)c-=pass.length;
        var ch = alpha.indexOf(input.charAt(i))+alpha.indexOf(pass.charAt(c));
        if(ch>=alpha.length)
            ch-=alpha.length;
        re+=alpha.charAt(ch);
        console.log(re);
        i++;
    }
    document.getElementById("emess").innerHTML=re;
    document.getElementById("input").value="";
    document.getElementById("pass").value="";
    $("#cp1").show();   
}

function deco(){
    var input = document.getElementById("result").value;
    var pass = document.getElementById("pass1").value;
    if(input=="" || pass==""){alert("Message and Passord Both are required"); return false;}
    var alpha = "~1234567890`-=_+qwertyu!@#$%^&*()iop[]\\QWERTY UIOP{}|asdfghjkl;ASDFGHJKL:\"\'zxcvbnm,./ZXCVBNM<>?";
    var c = -1;
    var i = 0;
    var pr = "";
    while(i<input.length){
        c+=1;
        if(c>=pass.length)c-=pass.length;
        var ch = alpha.indexOf(input.charAt(i))-alpha.indexOf(pass.charAt(c));
        if(ch<0)
            ch+=alpha.length;
        pr+=alpha.charAt(ch);
        console.log(pr);
        i++;
    }
    document.getElementById("dmess").innerHTML=pr;
    document.getElementById("result").value="";
    document.getElementById("pass1").value="";
    $("#cp2").show();
}


// toggle class scroll 
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

//copy to clipboard function
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
