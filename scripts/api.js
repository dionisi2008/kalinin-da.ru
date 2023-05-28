function NewUser(Login, Password, Email) {
    return new Promise((resolve, reject) => {
        const clientServer = new XMLHttpRequest();
        clientServer.responseType = "text";
        clientServer.overrideMimeType("text/plain; charset=utf-8");

        clientServer.addEventListener("load", () => {
            if (clientServer.status >= 200 && clientServer.status < 300) {
                resolve(clientServer.responseText);
            } else {
                reject(new Error(`Ошибка выполнения запроса: ${clientServer.statusText}`));
            }
        });

        clientServer.addEventListener("error", () => {
            reject(new Error("Не удалось выполнить запрос"));
        });

        clientServer.open("POST", "/api");
        clientServer.send("Пользователь" + "\r\n" + "Регистрация пользователя" + "\r\n" + Login + " " + Password + " " + Email);
    });
}