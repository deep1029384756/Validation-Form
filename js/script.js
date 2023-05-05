//jquery form
$(document).ready(function(){
    // jQuery Method
    const formFunction={
        validateText : (e)=>{
            let val = e.target.value;
            if(val === ""){
                $(e.target.nextElementSibling).addClass("nrequired")
            }else{
                $(e.target.nextElementSibling).removeClass("nrequired")
            }

            //check for email
            if(e.target.className === "email" && val !== ""){
                formFunction.checkEmail(e);
            }

            //check for phone number
            if(e.target.className === "phone"&& val !== ""){
                formFunction.checkPhone(e);
            }
            formFunction.checkSubmit();
        },
        checkSubmit : ()=>{
            let check = false;
            let i = 0;
            $("input").each(()=>{
               if($("input")[i++].value == ""){
                check = true;
               }
            })
            i= 0;
            //check for phone number and email
            $(".required").each((e)=>{
               if ($('.nrequired')[0]){
                check = true;
               }
            })
            if(!check){
            $(".submit").addClass("active");
            }else{
            $(".submit").removeClass("active");
            }
        },
        checkEmail :(e)=>{
            let val = e.target.value;
            let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            if(!regex.test(val) && val !== ""){
                e.target.nextElementSibling.textContent = "Invalid format";
                $(e.target.nextElementSibling).addClass("nrequired")
            }else{
                e.target.nextElementSibling.textContent = "This is required field";
                $(e.target.nextElementSibling).removeClass("nrequired")
            }

        },
        checkPhone : (e)=>{
            let val = e.target.value;
            //limit the number
            //check validity
            var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
            if (!filter.test(val) && val !== "" || val.length < 10) {
                e.target.nextElementSibling.textContent = "Invalid format";
                $(e.target.nextElementSibling).addClass("nrequired")
            }
            else{
                e.target.nextElementSibling.textContent = "This is required field";
                $(e.target.nextElementSibling).removeClass("nrequired")
            }
        }
    }
    //event listeners
    $(".submit").mouseenter(()=>{
        formFunction.checkSubmit();
    })
    $("input").on("blur",function(e){
        formFunction.validateText(e)
    })
    $('input[type="number"]').on('input',(e)=>{
        let val =e.target.value;
        if(val.length > e.target.maxLength){
            e.target.value = val.slice(0,e.target.maxLength)
        }
    })
  });
