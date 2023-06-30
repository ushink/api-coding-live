import { login } from "../api.js";

export function renderLoginComponent({appEl, setToken, fetchTodosAndRender}) {
    const appHtml = `
                <h1>Список задач</h1>
            <div class="form">
                <h3 class="form-title">Форма входа</h3>
                <div class="form-row">
                Логин:
                <input type="text" id="login-input" class="input"/>
                <br>
                Пароль:
                <input type="text" id="login-input" class="input"/>
                </div>
                <br>
                <button class="button" id="login-button">Войти</button>
            </div>`;

            
            appEl.innerHTML = appHtml;

            document.getElementById("login-button").addEventListener('click', () => {
                
                setToken("Bearer dgc0boasc8as6g5g5k5o5s5w606g39o3cc3e83ek3ck3b43k38o");
                login({
                    login: 'admin', 
                    password: 'admin',
                })
                .then((user) => {
                    console.log(user);

                    setToken(`Bearer ${user.user.token}`);
                    fetchTodosAndRender();
                })

            });
}