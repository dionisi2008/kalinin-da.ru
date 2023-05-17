document.addEventListener("DOMContentLoaded", () => 
{
 var apizapros = new XMLHttpRequest();
 apizapros.open("POST", "https://kalinin-da.ru/api/");
 apizapros.send("sd");
 apizapros.onloadend = () =>
 {
    if (apizapros.status == 200)
    {

    }
    else
    {
        alert("Help!")
    }
 };
    alert("test");
});