const scamWords = [
    "Web 5.0", "Quantum AI", "Neural Blockchain", "Meta-verse",
    "Deep Learning NFTs", "AI-Powered Smart Contracts",
    "Decentralized Intelligence", "Blockchain ChatGPT",
    "AI-Enhanced Crypto", "Quantum Metaverse Tokens",
    "Neural Web3", "Artificial Blockchain Intelligence"
];

const actions = [
    "will revolutionize", "will disrupt", "will transform",
    "will render obsolete", "will blockchain-ify",
    "will democratize", "will tokenize", "will digitalize"
];

const targets = [
    "the entire internet", "your grandmother's recipes",
    "the global economy", "your pet's social media",
    "everything you know about life", "your breakfast routine",
    "the way you tie your shoes", "your daily horoscope",
    "your neighbor's garden gnomes"
];

function generatePrediction() {
    const word = scamWords[Math.floor(Math.random() * scamWords.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const target = targets[Math.floor(Math.random() * targets.length)];
    const year = 2024 + Math.floor(Math.random() * 5);
    const price = Math.floor(Math.random() * 99999);

    const prediction = `${word} ${action} ${target}!
                      Early investor price: $${price}`;

    const li = document.createElement('li');
    li.className = 'prediction-item';
    li.innerHTML = `
        🚨 ${prediction}
        <span class="timestamp">Predicted on ${new Date().toLocaleString()} | Target Year: ${year}</span>
    `;

    const list = document.getElementById('predictionList');
    list.insertBefore(li, list.firstChild);

    // Keep only the last 5 predictions
    if (list.children.length > 5) {
        list.removeChild(list.lastChild);
    }
}

// Generate initial predictions
for (let i = 0; i < 3; i++) {
    generatePrediction();
}
