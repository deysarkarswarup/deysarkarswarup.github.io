 $(document).ready(function () {
        //Disable full page
        $("body").on("contextmenu",function(e){
           /* alert("right click functionality is disabled for this page.");*/
            return false;
        });    
        $('body').bind('cut copy paste', function (e) {
            /*alert("cut copy paste functionalities are disabled for this page.");*/
            e.preventDefault();
        });   

           
    });
/*
window.onbeforeunload = function (e) {
    // Cancel the event
    e.preventDefault();

    // Chrome requires returnValue to be set
    e.returnValue = '';
};
*/
//Prevent Ctrl+S (and Ctrl+W for old browsers and Edge)
document.onkeydown = function (e) {
    e = e || window.event;//Get event

    if (!e.ctrlKey) return;

    var code = e.which || e.keyCode;//Get key code

    switch (code) {
        case 83://Block Ctrl+S
        case 87://Block Ctrl+W -- Not work in Chrome and new Firefox
            e.preventDefault();
            e.stopPropagation();
            break;
    }
};
