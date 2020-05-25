function getData() {
    var name = $("#name").val();
    if(name==""){
        alert("Enter url first!")
        return false
    }

    if(name.includes("?")){

        name = name.substring(0, name.indexOf('?'));
    }

    //alert(name);

    let url = name+"media?size=l";
    $('.info').html("<img src='"+url+"'>")
    $(".extra").text("");
}

function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}

function clearField(){
    $("#name").val("");
}
