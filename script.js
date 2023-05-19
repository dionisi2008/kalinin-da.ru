document.addEventListener("DOMContentLoaded", () => 
{
 var apizapros = new XMLHttpRequest();
 apizapros.open("POST", "http://127.0.0.1:9090/");
 apizapros.send("Запрос" + '\n' + "Настройки Сервера Базы" + '\n');
 apizapros.onloadend = () =>
 {
    if (apizapros.status == 200)
    {
        console.log(apizapros.response);
    }
    else
    {
        console.log(apizapros.status);
    }
 };
    
});