import { loginUser, registerUser } from "../api.js";

export function renderLoginComponent({appEl, setToken, fetchTodosAndRender}) {
    let isLoginMode = false;

    const renderForm = () => {

        const appHtml = `
        <h1>Список задач</h1>
        <div class="form">
        <h3 class="form-title">Форма ${isLoginMode ? 'входа' : 'регистрации'}</h3>
        <div class="form-row">
        ${isLoginMode ? '' : `Имя:
        <input type="text" id="name-input" class="input"/>
        <br>`}
        
        Логин:
        <input type="text" id="login-input" class="input"/>
        <br>
        Пароль:
        <input type="password" id="password-input" class="input"/>
        </div>
        <br>
        <button class="button" id="login-button">${isLoginMode ? 'Войти' : 'Зарегистрироваться'}</button>
        <br><br>
        <button class="button" id="toggle-button">Перейти ${isLoginMode ? 'к регистрации' : 'ко входу'}</button>
        </div>`;

    
        appEl.innerHTML = appHtml;

        document.getElementById("login-button").addEventListener('click', () => {

            if (isLoginMode) {
                const login = document.getElementById("login-input").value;
                const password = document.getElementById("password-input").value;
    
                if (!login) {
                    alert('Введите логин');
                    return;
                }
    
                if (!password) {
                    alert('Введите пароль');
                    return;
                }
                
                setToken("Bearer dgc0boasc8as6g5g5k5o5s5w606g39o3cc3e83ek3ck3b43k38o");
                    loginUser({
                        login: login, 
                        password: password,
                    })
                    .then((user) => {
                        console.log(user);
    
                        setToken(`Bearer ${user.user.token}`);
                        fetchTodosAndRender();
                    })
                    .catch(error => {
                        // TODO: Выводить алерт красиво
                        alert(error.message);
                    });   
            } else {

                const login = document.getElementById("login-input").value;
                const name = document.getElementById("name-input").value;
                const password = document.getElementById("password-input").value;
    
                if (!name) {
                    alert('Введите имя');
                    return;
                }

                if (!login) {
                    alert('Введите логин');
                    return;
                }
    
                if (!password) {
                    alert('Введите пароль');
                    return;
                }
                
                setToken("Bearer dgc0boasc8as6g5g5k5o5s5w606g39o3cc3e83ek3ck3b43k38o");
                registerUser({
                        login: login, 
                        name: name,
                        password: password,
                    })
                    .then((user) => {
                        console.log(user);
    
                        setToken(`Bearer ${user.user.token}`);
                        fetchTodosAndRender();
                    })
                    .catch(error => {
                        // TODO: Выводить алерт красиво
                        alert(error.message);
                    });   
            };
            

        });

        document.getElementById("toggle-button").addEventListener('click', () => {
            isLoginMode = !isLoginMode;
            renderForm();
        });
    };

    renderForm();

}