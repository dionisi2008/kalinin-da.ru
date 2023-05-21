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
        document.getElementById("host").value = result[0];
        document.getElementById("port").value = result[1];
        document.getElementById("log").value = result[2];
        document.getElementById("DirectoryLog").value = result[3];
        document.getElementById("SizeTable").value = result[4];
    }
    else
    {
        console.log(apizapros.status);
    }
 };
    
});