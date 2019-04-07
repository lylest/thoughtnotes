$(document).ready(()=>{


  //follow button starts here

  $(".ufollow").click((e)=>{


    $("#follow").text("2K");
    $(".ufollow").css("width","30px");
  });


  //search


  $("#search").keyup((e)=>{

     $("#results").show(300);
  })


  //make text input editable

  $(".textarea").each(function(){
  this.contentEditable = true;
  });


  ///show notifications

  $(".profile").click((e)=>{

    $("#noti-bar").show(200);

  });


  $(".showv").click((e)=>{

    $("#noti-bar").show(200);

  });

  //close notifications

  $("#btnx").click((e)=>{

        $("#noti-bar").hide(200);

  });



  //show sider menu



  $("#sider").click((e)=>{
    $("#sider").css("width","160px");
    $("#sider").css("height","150px");

    //position image in a new position
    $("#lsi").css("float","right");
    $("#lsi").css("marginTop","60px").attr("id","closexyz").css("transform","rotate(-180deg)")
             .css("transition","1s ease-in-out");
             $("#lsi").css("display","none");

  //show ul li contents

      $("#unli").show(200).css("transition","1s ease-in-out");



  });

   //close button to reverse  everthing

   $(".closexyz").dblclick((e)=>{

     $("#lsi").css("margin","2px").css("transform","rotate(360deg)")
              .css("transition","1s ease-in-out");

     $("#unli").hide(200).css("transition","1s ease-in-out");


     $("#sider").css("width","30px");
     $("#sider").css("height","40px");

     //position image in a new position
     //$("#lsi").css("float","none");



   }); // end of close



  // end of sider show js
}); //end of js file
