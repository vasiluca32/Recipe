function hitServer(url) {
    fetch(url)

        .then(function (response) {
            return response.json();
        })

        .then(function (json) {
            return json;
        });
}