import logo from './logo.png';
import cloud from './cloud.png';

export const news = {
  "uniqId": "news",
  "interval": 8000,
  "firstInterval": 20000,
  "favoriteIcon": "dot",
  "showIcons": true,
  "newTabLinks": true,
  "data": {
    "region": {
      "showIcons": true,
      "newTabLinks": true,
      "statid": "news.region",
      "name": "region",
      "news": [{
        "full": "Путин упростил получение автомобильных номеров",
        "ishot": null,
        "href": "",
        "agency_logo": "",
        "agency_name": "link"
      }, {
        "full": "В команде Зеленского раскрыли план реформ на Украине",
        "ishot": null,
        "href": "",
        "agency_logo": "",
        "agency_name": "link"
      }, {
        "full": "Турпомощь прокоментировала гибель десятков россиян в Анталье",
        "ishot": null,
        "href": "",
        "agency_logo": "",
        "agency_name": "link"
      }, {
        "full": "Суд закрыл дело Демпартии США против России",
        "ishot": null,
        "href": "",
        "agency_logo": "",
        "agency_name": "link"
      }, {
        "full": "На Украине призвали создать ракеты для удара по Москве",
        "ishot": null,
        "href": "",
        "agency_logo": "",
        "agency_name": "link"
      }, ]
    }
  },
  "header": [{
    "title": "Сейчас в СМИ",
    "link": "https://dzen.ru/news?issue_tld=ru",
  }, {
    "title": "В Германии",
    "link": "https://dzen.ru/news/search?issue_tld=ru&text=%D0%B2+%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D0%B8",
  }, {
    "title": "Рекомендуем",
    "link": "https://dzen.ru/news/search?issue_tld=ru&text=%D0%A0%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D1%83%D0%B5%D0%BC",
  }],
};

export const stocks = [{
    "title": "USD MOEX",
    "value": "63,52",
    "value_change": "+0,09",
  }, {
    "title": "EUR MOEX",
    "value": "70,86",
    "value_change": "+0,14",
  },
  {
    "title": "Нефть",
    "value": "64,90",
    "value_change": "+1,63%",
  }
];

export const search = {
  "menu": [
    "Видео",
    "Картинки",
    "Новости",
    "Карты",
    "Маркет",
    "Переводчик",
    "Эфир",
    "еще",
  ],
  logo,
  "searchIdea": "фаза луны сегодня",
};

export const banner = {
  "src": "https://placehold.it/918x114",
  "alt": "Banner"
};

export const weather = {
  icon: cloud,
  temp: '+17',
  morning: '+17',
  day: '+20',
};

export const broadcast = [{
    text: 'Управление как исскуство',
    channel: 'Успех',
  },
  {
    text: "Ночь. Мир в это время",
    channel: 'earthTV',
  },
  {
    text: 'Андрей Возн...',
    channel: 'Совершенно секретно',
  },
];

export const mostVisited = [{
    category: 'Недвижимость',
    description: 'о сталинках',
  },
  {
    category: 'Маркет',
    description: 'люстры и светильники',
  },
  {
    category: 'Авто.ру',
    description: 'привод 4x4 до 500 000',
  },
];
