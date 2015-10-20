
    $(document).ready(function () {
   

        $(".btn").click(function () {

            var optionSelected = $(".list").find("option:selected");
            if ($("input[type='checkbox']:checked").length > 0)
            {
                $.cookie("country", optionSelected.val(), { expires: 7 });
            }
            
            window.location.href = "https://en.wikipedia.org/wiki/" + optionSelected.text();
        });

        $("body").on("change", ".list", function () {

            
            $(".imgc").remove();

            var v = $(this).val();

            
            

            $("<img class='imgc' src='images/" + v + ".png'/>").appendTo("body");

            $(".imgc").error(function () {
                $(".imgc").remove();
            });

        });

        var url = "https://gist.githubusercontent.com/salmasamiei/483ac2b3033207c846fb/raw/35e095ca2079473b4879fb8a03a4642a046d2cfb/countries.json";
        
        // var url = "countries.json";

        $.getJSON(url, function (data) {            
            $(".list option").remove();
            for (var i = 0; i < data.length; i++) {
                $("<option value='" + data[i].code + "'>" + data[i].name + "</option>").appendTo(".list");
            }
            var v = $.cookie("country");
            if(v!=null)
            {
                $(".list").val(v);
                $(".list").trigger("change");
            }
        });

        
    });
