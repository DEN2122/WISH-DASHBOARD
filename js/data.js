const user = {
  name: "Денис",
  surname: "Глуханюк",
  userPhoto: "123456.png",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "проаооаок.png", alt: "Ігровий Ноутбук" },
    { src: "дім.png", alt: "Дім в якому я хочу жити" },
    { src: "ну ок я не ок.png", alt: "Подорож навколо світу" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  630,
  878,
  1200,
  1600,
  2300,
  2890,
  3380,
  3980,
  4000,
  4100,
  4300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "Java" },
  { month: "Липень", skill: "JavaScript" },
  { month: "Серпень", skill: "Design" },
  { month: "Вересень", skill: "Креативність" },
  { month: "Жовтень", skill: "Емоційний інтелект" },
  { month: "Листопад", skill: "Робота в команді" },
  { month: "Грудень", skill: "Вчитись висловлювати свої думки" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
