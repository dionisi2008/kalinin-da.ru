var ClientServer = new XMLHttpRequest();
ClientServer.responseType = "text"; // устанавливаем тип ответа как текст
ClientServer.overrideMimeType("text/plain; charset=utf-8"); // явно указываем кодировку

function NewUser(Login, Password, Email) {
    ClientServer.responseType = "text"; // устанавливаем тип ответа как текст
    ClientServer.overrideMimeType("text/plain; charset=utf-8"); // явно указываем кодировку
    ClientServer.open("POST", "/api")
    ClientServer.send("Пользователь" + "\r\n" + "Регистрация пользователя" + "\r\n" + Login + " " + Password + " " + Email);
    
        return ClientServer.responseText;
    
}
