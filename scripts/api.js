var ClientServer = new XMLHttpRequest();

function NewUser(Login, Password, Email)
{
    ClientServer.open("POST", "/api")
    ClientServer.send("Пользователь" + "\r\n" + "Регистрация пользователя" + "\r\n" + Login + " " + Password + " " + Email);
    ClientServer.onloadend = () =>
    {
        return ClientServer.response;
    };
}
