// --- АУДИО СИСТЕМА ---
const audio = {
    menu: new Audio('sounds/menu.ogg'),
    forest: new Audio('sounds/forest.ogg'),
    bush: new Audio('sounds/bush.ogg'),
    scream: new Audio('sounds/scream.ogg')
};

audio.menu.loop = true;
audio.forest.loop = true;

audio.forest.volume = 0.1; 
audio.menu.volume = 0.25;   
audio.scream.volume = 0.5; 
audio.bush.volume = 0.5;   
audio.bush.playbackRate = 1.5; 

// --- ФОНЫ ЛОКАЦИЙ ---
const backgrounds = {
    ruins: "url('img/bg1.jpg')",
    forest: "url('img/bg2.jpg')",
    cliff: "url('img/bg3.jpg')"
};

// --- ДАННЫЕ ИГРЫ ---
const riddlesData = [
    {
        options: [
            "Рука Адама. «Сотворение Адама», Микеланджело.",
            "Рука Христа. «Призвание апостола Матфея», Караваджо.", // Правильный
            "Рука Иуды. «Тайная вечеря», Леонардо да Винчи.",
            "Рука Бога. «Страшный суд», Микеланджело."
        ],
        correctIndex: 1
    },
    {
        options: [
            "Зеркало. «Менины», Диего Веласкес.",
            "Шар гадалки. «Спаситель мира», Леонардо да Винчи.",
            "Зеркало. «Портрет четы Арнольфини», Ян ван Эйк.", // Правильный
            "Отражение в воде. «Нарцисс», Караваджо."
        ],
        correctIndex: 2
    },
    {
        options: [
            "«Давид» Донателло (бронзовый).",
            "«Давид» Микеланджело.", // Правильный
            "«Давид» Бернини.",
            "«Персей» Челлини."
        ],
        correctIndex: 1
    }
];

const italianScreamers = [
    "LASCIATE OGNE SPERANZA!",
    "NON C'È SCAMPO!",
    "MORTE ETERNA!",
    "IL TEMPO È FINITO!"
];

// СЦЕНАРИЙ
const scenes = {
    part1: [
        { text: "— Эй. Живой?", img: "img/purga_face.png" },
        { text: "Голос выдернул вас из гула в ушах. Мир вокруг всё ещё трещал и хрипел, утягивая разрушения в задетую кем-то цепь домино. Крики, звон металла, треск огня, глухое рычание. Небо над горной поляной было рваным, серо-красным, как старая рана, которой не позволили зажить до конца.", img: "img/purga_full.png" },
        { text: "Вы приподнялись на локтях. Прямо перед вами стояла Она.\nВысокая, статная, уверенно держалась на лапах. Белая, как иней, грива, была столь густой, что обрамляла морду, придавая кошке шарма. Сама морда резкая, красивая в своей северной холодности. Глаза осматривали вас с долей обеспокоенности и волнения.", img: "img/purga_full.png" },
        
        { 
            text: "— Дышишь. Уже хорошо, — сказала Пурга, присаживаясь рядом. — Не укушен?", 
            img: "img/purga_face.png",
            choices: [
                { label: "Нет… вроде бы.", reaction: "— Нет… вроде бы, — вы завертелись, рассматривая свое тело и прислушиваясь к ноющим мышцам." },
                { label: "Не знаю... всё болит.", reaction: "— Не знаю... Нет… вроде бы, — простонали вы, чувствуя каждый удар сердца." }
            ]
        },

        { text: "Она смотрела слишком пристально и сидела слишком близко, без сомнений и всякой скромности вторгаясь в чужое личное пространство.\n— Вроде бы — это не ответ. Покажи шею. Руки, — тон её сменился и стал более жестким. Не время было играть.", img: "img/purga_face.png" },
        { text: "Вы подчинились без пререканий. Северянка провела пальцами по вашему меху быстро и уверенно, будто делала это сотни раз.\n— Чисто, — наконец выдохнула она и позволила себе слабую улыбку, — Значит, не зря я тебя нашла.", img: "img/purga_face.png" },
        
        { text: "Где-то справа раздался крик. Неестественный, слишком сорванный, протяжный. Пурга резко обернулась, уши резво поворачивались в разные стороны в попытках уловить малейшие звуки.", img: "img/purga_back.png", sound: 'bush' },
        
        { text: "И в этот момент вы увидели…\nПод гривой, ближе к плечу, темнел след, до сих пор скрытый плотным мехом и кровавыми пятнами, не суливший ничего хорошего. Кожа вокруг была воспалена и теперь это было заметно даже через густую шерсть.", img: "img/purga_back.png" },
        
        { text: "Она ещё не знала, что вы заметили.\n— Вставай, — сказала Пурга, уже поднимаясь и поворачиваясь к вам. — Нам нужно идти. Пока всё окончательно не рухнуло.", img: "img/purga_face.png" },
        
        { 
            text: "Она ждала.", 
            img: "img/purga_full.png",
            choices: [
                { label: "Ты... — вы осеклись. — У тебя на шее...", reaction: "— Ты… — вы осеклись. — У тебя на шее…" },
                { label: "Указать лапой на рану.", reaction: "Слов не нашлось. Вы просто указали на рану." }
            ]
        },

        { text: "Она замерла. Медленно коснулась лапой укуса.\nМолчание длилось пару секунд, но казалось вечностью.", img: "img/purga_face.png" },
        { text: "— Значит, всё-таки достали, — сказала она со странным холодным спокойствием в голосе. — Ладно. Тогда времени ещё меньше.", img: "img/purga_face_idiot.png" },
        
        { text: "— Ты заражена.", img: "img/purga_full.png" },
        { text: "— Я в курсе, — цокнула та, отмахнувшись жестом руки, — Но пока ещё думаю ясно. А значит, у нас есть шанс. Если ты не тупица.", img: "img/purga_face.png" },
        
        { text: "Она пошла первой, не оглядываясь. Нагнать её вам ничего не стоило.\n— Есть убежище, — сказала та, когда они углубились в лес. — Шаманки. Если успеем — меня вытащат. Если нет… — она пожала плечами.\nНесказанные слова повисли в воздухе, не нуждаясь в озвучке.", img: "img/purga_went.png", newBg: 'forest' },
        
        { text: "Вы хотели спросить, зачем ей ВЫ, но она опередила.", img: "img/purga_not_question.png" },

        { text: "— Мне нужен собеседник. И свидетель. А ещё… — она усмехнулась. — Мне скучно идти с человеком, который не способен думать. Так что, если хочешь дожить — отвечай. И шевелись давай, — добавила та, ускоряя шаг.", img: "img/purga_smile.png" },
        
        { text: "Загадка 1. Sul gesto e la citazione\n\n«In principio ero il gesto del Creatore che infondeva la vita nell'argilla. Secoli dopo, un ribelle e omicida, in fuga dalla giustizia, ha 'rubato' la mia mano. Ma questa volta non l'ha data a Dio Padre, bensì all'Uomo — il Figlio di Dio.\n\nIn una stanza oscura, tagliata da una luce drammatica, questa mano non indica Adamo, ma un peccatore seduto al banco delle imposte».\n\nDi chi è questa mano (nell'originale e nella citazione) e di quale quadro del 'ribelle' si tratta?", img: "img/purga_question.png" },
        { text: "Пурга смотрела на вас неприкрытым интересом.\n— Я люблю эту историю. В ней много дерзости. Как и во мне.", img: "img/purga_face.png" },
        
        { text: "Вы ответили: ...", img: "img/purga_full.png", riddleId: 0 }
    ],

    part2: [
        { text: "Лес редел. Снег под ногами был тёмным. Через некоторое время её дыхание стало тяжелее. Она всё чаще касалась шеи. Рана на ней будто зудела, захватывая всё внимание, мешая мыслить ясно. Пурга стала раздражительнее, периодически рычала и бросала оскорбления в воздух, ни на кого конкретного не нацеленные.", img: "img/purga_went.png" },
        { text: "— Не смотри так, — рыкнула она, сузив глаза — Я всё ещё красивее тебя.", img: "img/purga_not_smile.png" },
        
        { 
            text: "Вы смотрели на её оскал.", 
            img: "img/purga_smile_danger.png",
            choices: [
                { label: "Поднять руки (примирение)", reaction: "Вы не спорили, лишь подняли руки в знак примирения и сменили точку своего взгляда." },
                { label: "Отвести взгляд", reaction: "Вы отвели взгляд, чтобы не провоцировать её." }
            ]
        },

        { text: "— Слушай вторую. – вдруг бросила она посреди пути. – И не тяни. Голова у меня начинает… шуметь.", img: "img/purga_not_smile.png" },

        { text: "Загадка 2. Sul testimone invisibile\n\n«Sono un occhio convesso, appeso alla parete della camera nuziale di un mercante. Intorno a me, in minuscoli medaglioni, sono dipinte dieci scene della Passione di Cristo.\n\nMa la cosa più interessante è dentro di me. Rifletto ciò che lo spettatore non vede direttamente: le spalle degli sposi (o soci in affari?) e due figure che varcano la soglia. Una di queste figure porta il nome dell'artista che ha audacemente scritto sopra la mia cornice: '...è stato qui'».\n\nDi quale oggetto e di quale dipinto si tratta?", img: "img/purga_question.png" },
        { text: "Она прислонилась к стене, остановившись на пару секунд, но глаза всё ещё блестели.\n— Свидетель, который всегда всё видит, — прошептала Пурга. — Даже то, что художник не должен был показывать.", img: "img/purga_face.png" },

        { text: "Вы дали ответ: ...", img: "img/purga_face.png", riddleId: 1 }
    ],

    part3: [
        { text: "Не выразив на сей раз никакой видимой эмоции, северянка просто кивнула и, зашипев, с тяжестью отошла от стены, размяв плечи, и заставила идти себя дальше.", img: "img/purga_poker_face.png" },
        { text: "Последний подъём был самым тяжёлым. Пурга начала спотыкаться. Вы поддерживали её.", img: "img/purga_went.png" },
        { text: "— Не вздумай меня жалеть, — прошипела она, оттолкнув его. — Я не для этого тебя веду.", img: "img/purga_not_smile.png" },
        
        { 
            text: "Вы решаете...", 
            img: "img/purga_went.png",
            choices: [
                { label: "Спросить вслух", reaction: "— Тогда зачем?" },
                { label: "Подумать про себя", reaction: "Глаза задали вопрос за вас: тогда зачем?" }
            ]
        },

        { text: "Она усмехнулась.\n— Чтобы ты запомнил, как выглядят последние минуты красивого ума.", img: "img/purga_smile.png" },
        { text: "У края утёса, где стояла древняя статуя, она остановилась и присела на землю. Грудь тяжело вздымалась, а лапы коснулись головы в попытках облегчить настойчивый стук в висках.", img: "img/purga_went.png" },

        { text: "Загадка 3. Sulla pietra e il tempo\n\n«Nella storia dell'arte siamo i tre più celebri, ma esistiamo in tempi diversi.\n\nIl primo (opera di Donatello) ha già vinto: è sereno e calpesta la testa mozzata.\n\nIl secondo (opera del Bernini) è in movimento furioso: si morde il labbro e sta per lanciare.\nIo sono il terzo. Sono nato da un blocco di marmo chiamato 'Il Gigante', considerato irrimediabilmente rovinato per 40 anni. Non agisco e non festeggio. Sono pura tensione, l'istante prima del colpo. Nella mia mano non c'è spada, solo una pietra e una fionda, e il mio sguardo corrucciato scruta il nemico.\n\nDi quale statua specifica si tratta?", img: "img/purga_face_pow_on_face.png" },

        { text: "Пурга смотрела вдаль. Зрачки были расширены.\n— Ответь, — тихо сказала она. — И давай посмотрим, кто из нас переживёт эту ночь.", img: "img/purga_smile_danger.png" },

        { text: "И вы послушались: ...", img: "img/purga_face.png", riddleId: 2 }
    ],

    // --- НОВАЯ СЦЕНА: ПЛОХАЯ КОНЦОВКА ---
    bad_ending: [
        { text: "Вы ответили неверно. Где-то ошиблись, а может и везде… Сказать наверняка вы не могли, но всё поняли по звереющему недовольному лицу своей собеседницы.\nС уст слетел смех, жуткий, уже ей не принадлежащий. К вам обернулась уже не та, что вы встретили в начале. Кривая улыбка расползлась по морде, она оскалила зубы, глаза залились кровью.", img: "img/purga_smile_danger.png" },
        { text: "— Какая жалость, — хохотнула она, расплываясь в улыбке ещё шире, что казалось и вовсе невозможным. — Терпеть не могу бездарные умы. — хрипло прошипела та и вцепилась вам в плечо.", img: "img/purga_smile_danger2.png" },
        { text: "Последнее, что вы увидели — белую гриву в крови и снег, медленно темнеющий под ней.", img: "img/purga_smile_danger2.png" }
    ],

    ending: [
        { text: "Пурга улыбнулась — впервые искренне. Почти тепло.\n— Ну вот. Я знала, что ты не зря мне попался, — она почти по-дружески похлопала вас по плечу, поднявшись с земли и на этот раз даже позволив помочь ей дойти.", img: "img/purga_face_hill.png" },
        { text: "Они успели. Шаманка выбежала им навстречу, ругаясь и прижимая ладони к шее Пурги.\n— Жить будешь, — буркнула она.", img: "img/purga_face_hill.png" },
        { text: "Кошка, уже теряя сознание, шепнула:\n— Видишь? Интеллект — тоже оружие.", img: "img/purga_face_hill.png" }
    ]
};


// --- ПЕРЕМЕННЫЕ СОСТОЯНИЯ ---
let currentScene = [];
let sceneIndex = 0;
let hasInteracted = false;

// --- ЭЛЕМЕНТЫ DOM ---
const visualArea = document.getElementById('visual-area');
const menuBg = document.getElementById('menu-bg');
const charImg = document.getElementById('character-img');
const dialogueBox = document.getElementById('dialogue-box');
const dialogueText = document.getElementById('dialogue-text');
const dialogueChoices = document.getElementById('dialogue-choices');
const nextBtn = document.getElementById('next-btn');
const startScreen = document.getElementById('start-screen');
const endingScreen = document.getElementById('ending-screen');
const screamerOverlay = document.getElementById('screamer-overlay');
const screamerText = document.getElementById('screamer-text');

// --- ЛОГИКА АУДИО ---
document.body.addEventListener('click', () => {
    if (!hasInteracted) {
        audio.menu.play().catch(e => console.log("Ждем взаимодействия"));
        hasInteracted = true;
    }
});

// --- ФУНКЦИИ ---

function startGame() {
    startScreen.classList.add('hidden');
    menuBg.classList.add('hidden'); 
    charImg.classList.remove('hidden');
    
    // АУДИО
    audio.menu.pause();
    audio.menu.currentTime = 0;
    audio.forest.play();

    // Загружаем 1 часть и ставим фон 1
    visualArea.style.backgroundImage = backgrounds.ruins; 
    loadScene(scenes.part1, 'part2'); 
}

function loadScene(sceneData, nextPartName) {
    currentScene = sceneData;
    sceneIndex = 0;
    dialogueBox.classList.remove('hidden');
    dialogueBox.dataset.next = nextPartName;
    showLine();
}

function showLine() {
    if (sceneIndex < currentScene.length) {
        const line = currentScene[sceneIndex];
        
        dialogueText.innerText = line.text;
        charImg.src = line.img;

        // --- ЛОГИКА СМЕНЫ ФОНА ВНУТРИ СЦЕНЫ ---
        if (line.newBg && backgrounds[line.newBg]) {
            visualArea.style.backgroundImage = backgrounds[line.newBg];
        }

        if (line.sound && audio[line.sound]) {
            const sound = audio[line.sound];
            sound.currentTime = 0;
            sound.play();
            if (line.sound === 'bush') {
                setTimeout(() => { sound.pause(); }, 10000);
            }
        }

        dialogueChoices.innerHTML = '';
        dialogueChoices.classList.add('hidden');
        nextBtn.classList.remove('hidden');

        if (line.choices) {
            nextBtn.classList.add('hidden');
            dialogueChoices.classList.remove('hidden');
            line.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.innerText = choice.label;
                btn.classList.add('dialogue-btn');
                btn.onclick = () => makeDialogueChoice(choice.reaction);
                dialogueChoices.appendChild(btn);
            });
        }
        else if (line.riddleId !== undefined) {
            nextBtn.classList.add('hidden');
            dialogueChoices.classList.remove('hidden');
            const rData = riddlesData[line.riddleId];
            rData.options.forEach((optText, i) => {
                const btn = document.createElement('button');
                btn.innerText = optText;
                btn.classList.add('dialogue-btn');
                btn.onclick = () => checkRiddleAnswer(line.riddleId, i);
                dialogueChoices.appendChild(btn);
            });
        }
    } else {
        handleSceneTransition();
    }
}

function makeDialogueChoice(reactionText) {
    dialogueText.innerText = reactionText;
    dialogueChoices.classList.add('hidden');
    nextBtn.classList.remove('hidden');
}

function nextLine() {
    sceneIndex++;
    showLine();
}

function checkRiddleAnswer(riddleId, selectedIndex) {
    const rData = riddlesData[riddleId];
    if (selectedIndex === rData.correctIndex) {
        handleSceneTransition();
    } else {
        loadScene(scenes.bad_ending, 'death'); 
    }
}

function handleSceneTransition() {
    const nextStep = dialogueBox.dataset.next;
    
    if (nextStep === 'part2') {
        loadScene(scenes.part2, 'part3');
    } else if (nextStep === 'part3') {
        // Убрали смену фона здесь, так как она остается лесной
        loadScene(scenes.part3, 'ending');
    } else if (nextStep === 'ending') {
        // ВОТ ЗДЕСЬ включаем фон bg3 (cliff) для хорошей концовки
        visualArea.style.backgroundImage = backgrounds.cliff;
        loadScene(scenes.ending, 'finish');
    } else if (nextStep === 'finish') {
        dialogueBox.classList.add('hidden');
        endingScreen.classList.remove('hidden');
    } else if (nextStep === 'death') {
        triggerScreamer("ТЫ ПРОИГРАЛ");
    }
}

function triggerScreamer(text) {
    screamerText.innerText = text;
    screamerOverlay.classList.remove('hidden');
    
    audio.forest.pause();
    if(audio.scream) {
        audio.scream.currentTime = 0;
        audio.scream.play();
    }

    setTimeout(() => {
        location.reload(); 
    }, 2500);
}

function triggerFinalScreamer() {
    const randomPhrase = italianScreamers[Math.floor(Math.random() * italianScreamers.length)];
    endingScreen.classList.add('hidden');
    triggerScreamer(randomPhrase);
}