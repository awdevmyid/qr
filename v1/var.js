var url = "https://wahyu9kdl.github.io/DEVOLOPER/tools/QR/create.html";
    var delay = "5000";
    window.onload = function ()
    {
        setTimeout(GoToURL, delay);
    }
    function GoToURL()
    {
        if(typeof IE_fix != "undefined") // IE8 and lower fix to pass the http referer
        {
            var referLink = document.createElement("a");
            referLink.href = url;
            document.body.appendChild(referLink);
            referLink.click();
        }
        else { window.location.replace(url); } // All other browsers
    }
