const quotes = [
  "Dream big. Start small. Act now.",
  "Push yourself, because no one else will.",
  "Do something today that your future self will thank you for.",
  "Don’t stop until you’re proud.",
  "Work hard in silence, let success make the noise.",
  "Great things never come from comfort zones.",
  "Doubt kills more dreams than failure ever will.",
  "Don’t wait for opportunity. Create it.",
  "Your only limit is your mind.",
  "Small progress is still progress.",
  "Discipline is the bridge between goals and achievement.",
  "Success is the sum of small efforts repeated daily.",
  "Make it happen. Shock everyone.",
  "Stay hungry, stay foolish.",
  "If not now, when?",
  "Fall seven times and stand up eight.",
  "You don’t find willpower, you create it.",
  "Focus on being productive, not busy.",
  "Do what you can, with what you have, where you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Stay positive, work hard, make it happen.",
  "Success doesn’t come to you, you go to it.",
  "Action is the foundational key to all success.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Your vibe attracts your tribe."
];

// function GenerateQuote(){
//     const quote_text = document.getElementById("quote");
//     const index = Math.floor(Math.random()*quotes.length)
//     quote_text.textContent = quotes[index];
// }

// setInterval(()=>{
//     GenerateQuote();
// },2000);

const button = document.querySelector("button");
button.addEventListener('click',()=>{
  const quote_text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length)
  quote_text.textContent = quotes[index];
})

