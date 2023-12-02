import { reactive } from 'vue'

export const navLinks = reactive([
  { name: 'Главная', link: '/' },
  { name: 'Работы', link: '/works' },
  { name: 'Блог', link: '/posts' },
  { name: 'Контанкты', link: '/contact' },
])

const data = {
  greeting: {
    title: 'Меня зовут Игорь, \nя - Frontend Vue.js разработчик',
    short_description:
      'Привет, случайно или нет, но ты уже здесь и возможно читаешь эти строки. Да это очень простенький сайт, на котором размещена некоторая информация обо мне и моих проектах (с примерами кода). Макет взят из свободного доступа с фигмы (ссылку ищите внизу).',
  },
  posts: [
    {
      id: 1,
      title: 'Причина, почему я задумался о поиске работодателя?',
      tags: ['РСЯ'],
      date: '2023-08-20',
      short_description:
        'Судя по всему, изменился поисковый алгоритм в роботе Яндекса, из-за чего множество сайтов были выброшены из топов в поисковой выдаче.',
      description: `В середине августа, а если быть точным то где-то 10-11 августа 2023 года, основной алгоритм ранжирования Яндекса в поисковой выдаче, притерпел серьёзные изменения (есть подозрения, что в этом замешана нейросеть), в следствии этого, огромное кол-во сайтов по всему рунету были сильно(некоторые в десятки раз) понижены и соответственно выпали из топов поисковой выдачи.

      Так вот, к чему всё это? Упал доход с сайтов, а кушать то ой как хочется, в общем "нужно больше золота"!

      На Хабре есть статья, c разбором подобного случая: https://habr.com/ru/articles/771636/ (статья опубликована уже сильно после попадания под фильтр)`,
    },
    {
      id: 2,
      title: 'Месяц спустя, начало октября, вывод и некий план.',
      tags: ['Вспомнить всё', 'Учёба'],
      date: '2023-10-04',
      short_description:
        'К каким выводам я пришел, осознав, что нет возможности повлиять на поисковую выдачу и некоторые планы на ближайший месяц-два.',
      description: `Исправив некоторые вещи на сайтах по рекомендациям Яндекса и отправив апеляцию, для повторной проверки проверки, было получено уведомление, что повторная проверка будет проведена в течении нескольких дней. 

      Выдохнул, раслабился и начал ждать. В результате через пару дней опять получил отрицательное уведомление.

      Успокоившись, всё взвесил и подумав, принял решение пойти и вспомнить всё, что забыл и освежить в памяти то, что еще помню. В общем начал учиться, но с одной оговоркой - акцент сделать на фронтенд!

      Примерный план на месяц следующий:
          -- смотрим курс по JS Advanced
          -- смотрим курс по работе с данными в JS 
          -- читаем про алгоритмы для фронтенда
          -- решаем несколько задач на Leetcode, можно даже уровня easy`,
    },
    {
      id: 3,
      title: 'Неучтённые вещи и первоначального резюме.',
      tags: ['Резюме', 'Учёба', 'План'],
      date: '2023-11-07',
      short_description:
        'Во время учебы на протяжении месяца пришел к выводу, что забылось достаточно много информации. Начал составлять первое резюме.',
      description: `Прошло чуть больше месяца с момента полного погружения в учёбу, время пролетело незаметно, но с большой нагрузкой (было не сказать, что сложно, но и не легко). Изначально планировал выделить только один месяц на учебу и потом сразу пойти рассылать резуме, но посмотрев вакансии по интересующему меня стеку(Vue.js/Nuxt.js) пришел к выводу, что их не так уж и много.

      Вещи которые стоило учесть:
          -- на учебу вделить раза в два больше времени
          -- очень мало вакансий на позицию Junior, а откликов ооочень много (если верить hh то на одну вакансию может вполне быть по 500-900 откликов), даже на Стажёра вакансий в раза 2-3 больше
          -- не в тему, но всем сразу нужен Middle и выше
          -- часто встречается помимо Vue.js и Nuxt.js, значение Quasar, реже Ionic
          -- typeScript требуется практически везде
          -- опыт работы graphQL и websocket
          -- в вакансиях PostgreSQL иногда стоит в приоритете над MySQL

      Резюме, которое было составлено мной изначально, стоит переделать, а именно:
          -- в обязательном порядке залить репозитории на Github и открыть доступ(если возможно)
          -- указать ссылки на проекты которые сделал, и примеры кода с Github
          -- сделать сайт-портфолио, на котором разместить скриншоты и ссылки на Github
          -- по возможности поднять проекты, что бы их можно было потыкать
          -- обязательно указать опыт работы на фрилансе и как ИП
          -- по возможности найти даже самые старые проекты и выложить их
          -- посмотреть другие резюме и возможно подчерпнуть оттуда какую-то информацию

      Вывод: стоит продолжить ежедневно мониторить вакансии, подучить еще TS и graphQL, сделать сайт-портфолио и открыть некоторые репозитории на Github.`,
    },
    {
      id: 4,
      title: 'Что дальше?',
      tags: ['Портфолио', 'Github', 'План'],
      date: '2023-12-01',
      short_description:
        'Нахожусь в процесс заполнения контентом портфолио-сайта и планирую до середины декабря закончить оформление аккаунта на Github. Переоформить резюме.',
      description: `
      Остался последний месяц до конца года, стоит еще ускориться, изменить приоритеты и перестроить план. 

      Действия на ближайшие 15 дней следующие:
          -- дописываю контент для этого сайта
          -- оформляю его до конца и деплою
          -- открываю часть закрытых репозиториев
          -- залить старые проекты на гитхаб (которых так нет)
          -- оформить аккаунт на гитхабе
          -- после оформления Гитхаба соотнести репозитории и раздел "Works" на сайте
          -- переоформить аккаунт на HH
          -- переоформить аккаунт на Хабре

      Если будет время, то продолжать обучение по TS, JS, graphQL и основам Laravel.`,
    },
  ],
  works: [
    {
      id: 1,
      date: '2016-02-10',
      cover: 'cover.png',
      images: {
        folder: 'mangaclub',
        files: ['cover.png'],
      },
      title: 'Comics online reader',
      subtitle: 'Website, legacy',
      links: ['', 'https://mangaclub.ru/'],
      stack: {
        backend: ['DLE (CMS)', 'PHP', 'MySQL'],
        frontend: ['JQuery', 'SASS', 'Gulp', 'JS'],
        other: [],
      },
      competencies: ['Ручное тестирование', 'Вёрстка', 'Администрирование'],
      competencies_description: `
          -- вёрстка всех страниц
          -- ручное тестирование в разных браузерах (Firefox, Chromium, IE)
          -- написание ТЗ для другого фрилансера
          -- ведение проекта (администрирование)
          -- СЕО оптимизация (для поисковиков)`,
      short_description:
        'Это мой первый серьёзный проект и еще одим фрилансером, a так же проект с которого начался мой путь в веб-разработке. Фронтент часть переделывалась множество раз, но на текущий момент показать могу только финальный результат.',
      description: ``,
    },
    {
      id: 2,
      date: '2023-11-22',
      cover: 'work_1.png',
      images: ['work_1.png', 'work_2.png', 'work_3.png'],
      title: '2 Designing Dashboards',
      subtitle: 'Dashboard',
      short_description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis excepturi officiis culpa illo natus ullam ipsa. Facere rem quasi beatae odit, ullam reiciendis adipisci, molestias iure, sed temporibus obcaecati voluptas?',
    },
    {
      id: 3,
      date: '2023-11-27',
      cover: 'work_1.png',
      images: ['work_1.png', 'work_2.png', 'work_3.png'],
      title: '3 Designing Dashboards',
      subtitle: 'Dashboard',
      short_description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis excepturi officiis culpa illo natus ullam ipsa. Facere rem quasi beatae odit, ullam reiciendis adipisci, molestias iure, sed temporibus obcaecati voluptas?',
    },
    {
      id: 4,
      date: '2023-11-25',
      cover: 'work_1.png',
      images: ['work_1.png', 'work_2.png', 'work_3.png'],
      title: '4 Designing Dashboards',
      subtitle: 'Dashboard',
      short_description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis excepturi officiis culpa illo natus ullam ipsa. Facere rem quasi beatae odit, ullam reiciendis adipisci, molestias iure, sed temporibus obcaecati voluptas?',
    },
  ],
}

const greeting = reactive(data.greeting)
const posts = reactive(
  data.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)
const works = reactive(
  data.works.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)

export { greeting, posts, works }
