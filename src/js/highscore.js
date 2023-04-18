export const highscore = {
    compare,
    patch,
    get
}

async function compare() {
    const url = 'https://highscore-3635d-default-rtdb.europe-west1.firebasedatabase.app/.json';
    const response = await fetch(url);
    const data = await response.json();
    let lowestHighscore;

    for (let i = 1; i < data.length; i++) {
        lowestHighscore = data[i].b;
    }
    return lowestHighscore;
}

async function patch(name, score) {
    const url = 'https://highscore-3635d-default-rtdb.europe-west1.firebasedatabase.app/.json';
    const response = await fetch(url);
    const data = await response.json();
    const allLi = document.querySelectorAll('li');

    for (let i = 1; i < data.length; i++) {
        if (data[i].b < score) {
            allLi[i - 1].innerText = name + ' ' + score;
            const putURL = `https://highscore-3635d-default-rtdb.europe-west1.firebasedatabase.app/${i}.json`;
            const newHighscore = {
                a: name,
                b: score
            }
            const option = {
                method: 'PUT',
                body: JSON.stringify(newHighscore),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
            await fetch(putURL, option);
            name = data[i].a;
            score = data[i].b;
        }
    }
}

async function get() {
    const url = 'https://highscore-3635d-default-rtdb.europe-west1.firebasedatabase.app/.json';
    const response = await fetch(url);
    const data = await response.json();

    const highscoreDiv = document.querySelector('#highscore');
    const ol = document.createElement('ol');
    highscoreDiv.append(ol);

    for (let i = 1; i < data.length; i++) {
        const li = document.createElement('li');
        li.innerText = data[i].a + ' ' + data[i].b;
        ol.append(li);
    }
}