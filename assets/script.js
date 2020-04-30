    // function myFunction() {
    //     var x = document.getElementById("MyForm");
    //     var text = "";
    //     var i;
    //     for (i = 0; i < x.length ;i++) {
    //       text += x.elements[i].value + "<br>";
    //     }
    //     console.log(text);
    //     // document.getElementById("demo").innerHTML = text;
    //   }

    //   var nameValue = document.getElementById("uniqueID").value;
    //   console.log(nameValue);
// function myFunction(params) {
//     let inputVal = document.getElementById("myInput");
//     for (let i = 0; i < inputVal.length; i++) {
//       let  text = inputVal.elements[i].value 
        
//       alert(
//             "nama =" + text
//         )
//     }

//     // alert(text);
// }

function myFunction(){
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var telp = document.getElementById("telp").value;
    var fashion = document.getElementById("fashion").value;

    alert(nama+""+alamat+""+telp+""+fashion);
}
   