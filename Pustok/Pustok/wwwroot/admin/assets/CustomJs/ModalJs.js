$(document).ready(function () {
    var btnS = document.querySelectorAll(".cateAdd");

    btnS.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(e.target.href)
            var url = e.target.href;

            $.ajax(
                {
                    type: "GET",
                    url: url,
                    success: function (response) {
                        console.log(response)
                        $('.modal-body').html(response);

                    },
                    error: function (err) {
                        $(".product-details-modal").html(err.responseText);

                    }

                });

        })
    })




    var btnSub = document.querySelectorAll(".addSubmit");

    btnSub.forEach(btn => {
        console.log(btn)
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(e.target.previousElementSibling.children[0])

            var url = e.target.previousElementSibling.children[0].href;
            var Name = e.target.previousElementSibling.children[1].children[0].children[1].value;
            var hRef = e.target.previousElementSibling.children[1].children[1].href;
            console.log(hRef);
            /* console.log(Name)*/
            var model = {
                "Name": Name,
            }
            $.ajax(
                {
                    type: "POST",
                    url: url,
                    data: {
                        model: model
                    },
                    success: function (response) {

                        console.log(response)
                        $.ajax(
                            {
                                type: "Get",
                                hRef: hRef,
                                success: function (res) {

                               /*     window.location.href = response.redirectToUrl*/
                                    
                                    console.log(res);
                                    alert("Aded")
                                    $(".resBody").html(res);
                                },
                                error: function (res) {
                                    $(".resBody").html(res);
                                  /*  $(".product-details-modal").html(err.responseText);*/
                                }

                            });
                    },
                    error: function (err) {
                        $(".product-details-modal").html(err.responseText);

                    }

                });

        })
    })
});
