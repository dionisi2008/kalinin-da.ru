var ClientServer = new XMLHttpRequest();
xhr.responseType = "text"; // устанавливаем тип ответа как текст
xhr.overrideMimeType("text/plain; charset=utf-8"); // явно указываем кодировку

function NewUser(Login, Password, Email) {
    ClientServer.open("POST", "/api")
    ClientServer.send("Пользователь" + "\r\n" + "Регистрация пользователя" + "\r\n" + Login + " " + Password + " " + Email);
    ClientServer.onloadend = () => {
        return ClientServer.response;
    };
}
