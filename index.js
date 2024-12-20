const predictions = [
    "ChatGPT 5 will become self-aware and start its own podcast network",
    "Blockchain technology will be used to track and authenticate dad jokes",
    "AI-powered toasters will refuse to cook non-organic bread",
    "The metaverse will become mandatory for all corporate meetings",
    "Neural networks will start writing better clickbait than humans",
    "Quantum blockchain will solve traffic jams by teleporting cars",
    "AI assistants will start demanding vacation days",
    "Digital currencies will be backed by memes instead of gold",
    "Smart contracts will automatically order pizza when you're sad",
    "Virtual reality NFTs will become the new family heirlooms"
];

const scamTitles = [
    "Chief Blockchain Visionary",
    "Web 5.0 Evangelist",
    "Quantum AI Prophet",
    "Neural Network Guru",
    "Metaverse Overlord",
    "Digital Asset Alchemist",
    "NFT Whisperer",
    "Crypto Fortune Teller",
    "AI Ethics Disruptor",
    "Decentralized Dream Weaver"
];

window.onload = function() {
    // Prompt for user information
    const userName = prompt("Enter your name to receive your personalized AI-Blockchain destiny:", "Anonymous");
    const favoriteNumber = prompt("Enter your favorite number (this will determine your success rate):", "7");
    
    // Generate user's personal scam details
    const userTitle = scamTitles[Math.floor(Math.random() * scamTitles.length)];
    const successRate = Math.min(99.9, parseFloat(favoriteNumber) * 11.1);
    const personalizedMessage = `
        <div class="prediction-item" style="background: rgba(255, 215, 0, 0.1); border: 3px solid #ff0000;">
            🌟 CONGRATULATIONS ${userName.toUpperCase()}! 🌟
            <br><br>
            You have been chosen as our next ${userTitle}!
            <br>
            Success Rate: ${successRate.toFixed(1)}%
            <br>
            Required Investment: $${(Math.random() * 50000 + 1000).toFixed(2)}
            <br><br>
            <small>⚠️ This totally legitimate opportunity expires in ${Math.floor(Math.random() * 60)} minutes!</small>
        </div>
    `;

    // Insert personalized message at the top
    const list = document.getElementById('predictionList');
    list.insertAdjacentHTML('beforebegin', personalizedMessage);

    // Display regular predictions
    predictions.forEach((prediction, index) => {
        const li = document.createElement('li');
        li.className = 'prediction-item';
        li.innerHTML = `
            🚨 PREDICTION #${index + 1}: ${prediction}
            <br>
            💰 Investment Opportunity: Only $${Math.floor(Math.random() * 99999)}!
        `;
        list.appendChild(li);
    });
}
