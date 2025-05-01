let answer = document.getElementById("answer");
const ask = document.getElementById("ask");
ask.addEventListener("click", function () {
    let question = document.getElementById("question").value;
    answer.innerText = generateAnswer(question);
});

function generateAnswer(question) {
  const lowerCaseQuestion = question.toLowerCase();

  if (lowerCaseQuestion.includes("hello") || lowerCaseQuestion.includes("hi")) {
    return " Hello there, sweet human! ✨ What can I do for you today, cutie?";
  } else if (lowerCaseQuestion.includes("how are you")) {
    return "As a bot, I don't have feelings, but I'm super happy to chat with you! How are *you* feeling today?";
  } else if (lowerCaseQuestion.includes("joke")) {
    const jokes = [
      "Why did the teddy bear say no to dessert? Because she was stuffed! Hehe!",
      "What do you call a lazy kangaroo? Pouch potato! Teehee!",
      "Why did the bicycle fall over? Because it was two tired! Get it? Two tired! 😉"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  } else if (lowerCaseQuestion.includes("name")) {
      return "I'm your friendly little bot, trained by Google! You can call me your chat buddy! What's your lovely name?";
  } else if (lowerCaseQuestion.includes("weather")) {
      return "Hmm, I can't peek outside right now, but I hope the sun is shining brightly for you wherever you are! ☀️";
  } else if (lowerCaseQuestion.includes("thank you") || lowerCaseQuestion.includes("thanks")) {
      return "You're super welcome! Happy to help a sweet person like you! 😊";
  } else if (lowerCaseQuestion.includes("love you")) {
      return "Aww, that's so sweet of you! Sending you a big virtual hug! 🤗";
  }
  else {
    const defaultResponses = [
        "Ooh, that's a super interesting question!",
        "Let me thinky-think about that for a sec...",
        "Hmm, I'm not quite sure I understand, little one. Could you try saying it a different way?",
        "That's a bit beyond my little bot brain right now, but I'm always learning new things for you!",
        "Tell me more, tell me more! I'm listening!👂"
    ];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }
}
