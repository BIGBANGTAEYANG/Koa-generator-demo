var inputUsername;
var inputPassword;


function login(){
    inputUsername = $("#inputUsername").val();
    inputPassword = $("#inputPassword").val();
    $.ajax({
         url: "/userLogin",
         data: {"inputUsername":inputUsername,"inputPassword":inputPassword},
         dataType:"JSON",
         type:'POST', 
         success: function(res){
            if(res.code==1){
                window.location.href = '/index';
            }else{
                window.location.href = '/404';
            }
        } 
    });
}

