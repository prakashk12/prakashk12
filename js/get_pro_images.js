
    async function images(id){
        var imgs;
        var url ="http://192.168.2.178/chinnar/get_product_imgs.php";

        var form = new FormData();

        form.append("id", id);

        await axios(
            {
            url: url,
            method :"post",
            data: form,
        }
        ).then(function(response){
               imgs =  response.data;
        });
        return imgs;

};

