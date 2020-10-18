export default {
    getDatas: () => {
        return fetch('/user/datas')
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => data);
                }
                else
                    return { message: { msgBody: "UnAuthorized", msgError: true } };
            });
    },
    postData: data => {
        return fetch('/user/data', {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status !== 401) {
                return response.json().then(data => data);
            }
            else
                return { message: { msgBody: "UnAuthorized" }, msgError: true };
        });
    }
}