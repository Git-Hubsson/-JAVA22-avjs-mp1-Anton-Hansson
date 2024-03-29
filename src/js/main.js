import {highscore} from "./highscore";

const h1Elements = document.querySelectorAll('h1');
let username = h1Elements[0];
const images = document.querySelectorAll('img');
let userPoints = 0;
let computerPoints = 0;
const score = document.querySelectorAll('h2');
const allDivs = document.querySelectorAll('div');
let round = 0;
let name;
const weapons = ['rock', 'scissor', 'paper'];
const h1round = document.createElement('h1');
h1round.innerText = `Round ${round}`;
const bottomDiv = document.querySelector('#bottomDiv');
bottomDiv.append(h1round);

const weaponOutcomes = {
    rock: { scissor: 'win', paper: 'lose', rock: 'tie' },
    scissor: { paper: 'win', rock: 'lose', scissor: 'tie' },
    paper: { rock: 'win', scissor: 'lose', paper: 'tie' }
};
const weaponImageURLs = {
    rock: new URL(`../images/rock.png`, import.meta.url),
    scissor: new URL(`../images/scissor.png`, import.meta.url),
    paper: new URL(`../images/paper.png`, import.meta.url)
};

highscore.get();

document.querySelector('button').addEventListener('click', event => {
    event.preventDefault();
    name = document.querySelector('input').value;
    if (name !== 'Username' && name !== '') {
        username.innerText = name;
        document.querySelector('form').classList.add('invisible');
        h1Elements[1].innerText = 'Now choose your weapon';
        for (let i = 0; i < weapons.length; i++) {
            images[i].addEventListener('click', event => {
                event.preventDefault();
                fight(weapons[i]);
            })
        }
        allDivs[2].classList.remove('invisible');
        allDivs[6].classList.remove('invisible');
    }
})

async function fight(userWeapon) {
    round++;
    h1round.innerText = `Round ${round}`;
    let computerWeapon = weapons[Math.floor(Math.random() * 3)];
    let userWeaponImgURL;
    let computerWeaponImgURL;

    const outcome = weaponOutcomes[userWeapon][computerWeapon];

    switch (outcome) {
        case 'win':
            userPoints++;
            h1Elements[1].innerText = `${name} wins!`;
            break;
        case 'lose':
            computerPoints++;
            h1Elements[1].innerText = 'Computer wins!';
            break;
        case 'tie':
            h1Elements[1].innerText = "It's a tie";
            break;
    }

    userWeaponImgURL = weaponImageURLs[userWeapon];
    computerWeaponImgURL = weaponImageURLs[computerWeapon];

    const userWeaponImg = document.createElement('img');
    userWeaponImg.src = userWeaponImgURL.href;
    userWeaponImg.classList.add('fight-img');

    const computerWeaponImg = document.createElement('img');
    computerWeaponImg.src = computerWeaponImgURL.href;
    computerWeaponImg.classList.add('fight-img');

    const fightDiv = document.createElement('div');
    fightDiv.append(userWeaponImg);
    const h3 = document.createElement('h3');
    h3.innerText = 'VS';
    fightDiv.append(h3);
    fightDiv.append(computerWeaponImg);
    allDivs[4].innerHTML = fightDiv.innerHTML;

    score[0].innerText = `Score: ${userPoints}`;
    score[1].innerText = `Score: ${computerPoints}`;

    if (computerPoints === 1) {
        h1Elements[1].innerText = 'The computer won! To play again, just pick a weapon';
        round = 0;
        computerPoints = 0;
        if (userPoints > await highscore.compare()) {
            await highscore.put(name, userPoints)
        }
        userPoints = 0;
    }
}