/* Authored by Boaz James Otieno */
/* full screen image slider */

var arr=['https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfVNhvWyHbYEefefUMibWcRtxoxEPSiIMPIFeCMFV5ck88lpZM7BB2bK9ERc-dSJcehexVwkCJ60isieRr4O7JKwWit9nH2V7eTG3nkgngCeL2Kz6wJzqNtD4sfaanlxoUPlw-2xYdJBUInLoIcoIezvtDL75xqdYPAJBX6QR6NeNUXhdrpJXqA7HMkQ/s1600/slidejustherbs.jpg','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8NuYirHRttv6XlNlooq9SLaleRXgeNnaFYPhOpVZlej8RfpVbbLa-tTEXfmJnXD_A6kjtIjRi975pqDB3VdfjeEzwU2OhzFI2YqdV8PPSxngw4S70EDQpvtoXJUNvUbYMIIpqatNRu1Z60_fZ8TzoMu_dDW-_9yLIMcqiwFkUtg9pnHHPDwbZZ0xhzQ/s1600/slideorganicharverst.jpg','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXZv2xujTKjSndR19Hkq-owys_bPvoJdq0ATsAAOT3XxrRfyhOHK4QSW3971bQKvrREtCl_BHIbwQYkWgQR_k5CXhizVn690ZYS1fPTTLdAgIO3HXmFq_oMezKaZp_hQf7jTsZkhUiuj9g25Iynsoj0VMpbZd77IWVLd0rfYVsPftxLHSpqHTLOu3l-w/s1600/plumslide.jpg','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNn_Ukug-F08BDRMICo2sDhJZ4ZJ_n4MkYGDO8SnsNicQnth1s06-yiBu1ur21uw1c6VHm6lxcKbvRsh-nAi_yPg4gROrMb0DDZG9SAjqZ9Kj6QkeAvXE8idY1WlR6H-lXVMQZdt28CBTwHX-LhyLH83zc9noPvHvdTl2GuCrhDUIhqt_2YCUlHIvdLA/s1600/slideMama.jpg','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8a29kwBZBy679n0nmiqbp3MlQEVpwav_JUrHStHvJPslZStI_T2UwsIfV2hC1XioWQUFZiEBFufTvLsbagLeOL7eE3lr0VDr2GqgbOBDKaSWOkG_UnpNeUf9YUrUnUFbfqkfm0rETc_HTLIG8Y5RRqJ7axri1pbBzTacr483VJdvA3NSCU4Y_NZSx7g/s1600/Good_Vibes_Get_Gorgeous_Sale_df927de036.jpg']; //an array of image sources
var pos=0; //initializes image position in the array
$(document).ready(function () {
    var interval=5000; //interval for slide
    var loaderHtml='';
    arr.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });

    $('.load-images').html(loaderHtml);

    var htm='';
    /* initializes the small circles html*/
    for(var i=0;i<arr.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';

    }

    $('#circles').html(htm);//show small circles
    $('#slider').html('<img src="'+arr[0]+'" class="img-slide image-animated"">');//show first image
    $('#0').css({'background':'#fff', 'color':'#fff'});//sets the background of the first small circle to black


    /* Auto slides the images with the image sources array given as first argument and interval as second argument */
    function autoSlide(arr,interval){

        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr.length-1){
                pos=0;
            }

            $('#slider').html('<img src="'+arr[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr.length-1)).css({'background':'transparent', 'color':'transparent'});
            }

        },interval);
    }
    /* end of function autoSlide */

    autoSlide(arr,interval);//calls function autoSlide

    /* displays next image */
    function next(){
        if(pos>arr.length-2){
            pos=-1;
        }
        $('#slider').html('<img src="'+arr[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }
    /* end of function next  */

    /* displays previous image */
    function previous() {
        if(pos<1){
            pos=arr.length;
        }
        $('#slider').html('<img src="'+arr[pos-1]+'" class="img-slide image-animated">');
        pos--;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }
    /* end of function previous */

    /* onclick next */
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });
    /* end of onclick next */

    /* onclick previous */
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });
    /* end of onclick previous */

});

/* displays image represented by the small circle */
function circleClick(position) {
    if(position!=pos){
        $('#slider').html('<img src="'+arr[position]+'" class="img-slide image-animated">');//show image

        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white

        pos=position;
    }
    /* end of function circleClick */


}