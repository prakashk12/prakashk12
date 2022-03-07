$(document).ready(
    function (){
        
        var url ="http://192.168.2.178/chinnar/get_categories.php";

        axios(
            {
                url: url,
            method :"get"
        }
        ).then(function(response){
            if(response.data == 'No Data Found'){
                document.getElementById('cat').innerHTML = 'No Data Found';
            }else {
                document.getElementById('cat').innerHTML = buildUI(response.data);
            }
        });

});

function buildUI(data) {

    var ui = '';

    for(var i=0 ; i<data.length; i++){
        ui = ui + `<div class="grid-item">

        <button onclick="openproducts(${data[i]['id']})">

            <img src="http://192.168.2.178/chinnar/uploads/${data[i]['cat_image']}" height="300" width="200"></button>

        <p class="txt">${data[i]['category_name']}</p>
    </div>`
    }
return ui;
}

function openproducts(id){
   sessionStorage.setItem("cat_id", id);
   location.href='productspage.html';
}