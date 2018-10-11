var inputUsername;
var inputPassword;


function login(){
    inputUsername = $("#inputUsername").val();
    inputPassword = $("#inputPassword").val();
    $.ajax({
         url: "/userLogin",
         data: {"username":inputUsername,"password":inputPassword},
         dataType:"JSON",
         type:'POST', 
         success: function(res){
            console.log(res);
        } 
    });
}

