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
        document.getElementById("host").innerText = result[0];
        document.getElementById("port").innerText = result[1];
        document.getElementById("log").innerText = result[2];
        document.getElementById("DirectoryLog").innerText = result[3];
        document.getElementById("SizeTable").innerText = result[4];
    }
    else
    {
        console.log(apizapros.status);
    }
 };
    
});