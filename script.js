document.addEventListener("DOMContentLoaded", () => 
{
 var apizapros = new XMLHttpRequest();
 apizapros.open("POST", "https://kalinin-da.ru/api");
 apizapros.send("Запрос" + '\n' + "Настройки Сервера Базы" + '\n');
 apizapros.onloadend = () =>
 {
    if (apizapros.status == 200)
    {
        var result = apizapros.responseText.split('\n');
        console.log(apizapros.response);
    }
    else
    {
        console.log(apizapros.status);
    }
 };
    
});