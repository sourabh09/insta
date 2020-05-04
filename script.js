function getData() {
    var name = $("#name").val();
    if(name==""){
        alert("Enter url first!")
        return false
    }
    let url = name+"media?size=l";
    $('.info').html("<img src='"+url+"'>")
    $(".extra").text("");
    $(".clearfield").css("display","block");
}

function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}

function clearField(){
    $("#name").val("");
}
