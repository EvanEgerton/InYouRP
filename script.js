
const translations = {
  ru: {
    play: "НАЧАТЬ ИГРАТЬ",
    about: "О ПРОЕКТЕ",
    rules: "ПРАВИЛА",
    about_title: "О ПРОЕКТЕ INYOU RP",
    about_text: "INYOU RP — это инклюзивный, креативный RP-проект, созданный для того, чтобы каждый мог быть собой. Мы ценим свободу самовыражения, стиль GTA и эстетику неона. Здесь ты строишь не просто персонажа — ты создаёшь вторую жизнь.",
    rules_title: "ПРАВИЛА INYOU RP",
    rule_1: "1. Уважение ко всем участникам сообщества.",
    rule_2: "2. Запрещены любые проявления дискриминации и токсичности.",
    rule_3: "3. Соблюдение ролевых правил и честная игра.",
    rule_4: "4. Запрещён метагейминг, пауэргейминг, DM и другие нарушения RP."
  },
  en: {
    play: "START PLAYING",
    about: "ABOUT",
    rules: "RULES",
    about_title: "ABOUT INYOU RP",
    about_text: "INYOU RP is an inclusive, creative RP project built so that everyone can be themselves. We value freedom of expression, GTA style, and neon aesthetics. Here, you don't just play a character — you build a second life.",
    rules_title: "INYOU RP RULES",
    rule_1: "1. Respect all community members.",
    rule_2: "2. Any form of discrimination or toxicity is forbidden.",
    rule_3: "3. Follow roleplay rules and play fair.",
    rule_4: "4. Metagaming, powergaming, DM and other RP violations are prohibited."
  }
};

let currentLang = 'ru';

function toggleLang() {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    el.textContent = translations[currentLang][key];
  });
}
