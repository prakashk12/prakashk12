$(document).ready(
    function (){
        
        var url ="http://192.168.2.178/chinnar/get_products.php";

        var form = new FormData();

        form.append("id", sessionStorage.getItem('cat_id'));

        axios(
            {
                url: url,
            method :"post",
            data: form,
        }
        ).then(function(response){
            if(response.data == 'No Data Found'){
                document.getElementById('product').innerHTML = 'No Data Found';
            }else {
                document.getElementById('product').innerHTML = buildUX(response.data);
            }
        });

});

async function buildUX(data) {

    var ui = '';

    for(var i=0 ; i<data.length; i++){

        var img = await images(data[i]['id']);

        var proimg;
        
        img != 'No Data Found' ? img[0]['image'] : "";

        ui = ui + `<div class="grid-item">

        <button onclick="openproducts(${data[i]['id']})">

            <img src="http://192.168.2.178/chinnar/uploads/${proimg}" height="300" width="200"></button>

        <p class="txt">${data[i]['product_name']}</p>
    </div>`
    }
return ui;
}

function openproducts(id){
   sessionStorage.setItem("product_id", id);
   location.href='productimages.html';
}