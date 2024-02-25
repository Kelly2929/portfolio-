const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));


const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
];


function generateOptions(correctIndex, totalOptions = 4) {
    let options = new Set();
    options.add(emojis[correctIndex].name);

    while (options.size < totalOptions) {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        options.add(emojis[randomIndex].name);
    }

    return Array.from(options);
}


app.get('/new-question', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const question = {
        emoji: emojis[randomIndex].emoji,
        options: generateOptions(randomIndex),
    };

    res.json(question);
});


let score = 0;


app.post('/submit-guess', (req, res) => {
    const { emoji, guess } = req.body;
    const correctAnswer = emojis.find(e => e.emoji === emoji)?.name;

    if (guess === correctAnswer) {
        score += 1;
        res.json({ correct: true, score });
    } else {
        res.json({ correct: false, score });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
