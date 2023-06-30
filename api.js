const host = "https://webdev-hw-api.vercel.app/api/v2/todos";

export function getTodos ({token}) {
    return fetch(host, {
        method: "GET",
        headers: {
            Authorization: token,
        },
      })
        .then((response) => {
            if (response.status === 401) {
               // password = prompt ('Введите верный пароль');
               // fetchTodosAndRender();
                throw new Error('Нет авторизации');
            }
          return response.json();
        })
}

export function deleteTodo({token, id}) {
    return fetch("https://webdev-hw-api.vercel.app/api/todos/" + id, {
        method: "DELETE",
        headers: {
        Authorization: token,
        },
      })
        .then((response) => {
          return response.json();
        })
}

export function addTodo({token, text}) {
    return fetch(host, {
        method: "POST",
        headers: {
            Authorization: token,
        },
        body: JSON.stringify({
        text,
        }),
    })
        .then((response) => {
        return response.json();
        })
}