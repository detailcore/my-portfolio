import { reactive } from 'vue'
import type { INavLinks, IGreeting, ISkills, IPost, IWork } from '@/mock/index.interface'

export const navLinks = reactive<INavLinks[]>([
  { name: 'Главная', link: '/' },
  { name: 'Работы', link: '/works' },
  { name: 'Блог', link: '/posts' },
  { name: 'Контанкты', link: '/contact' },
])

interface IData {
  greeting: IGreeting
  skills: ISkills
  posts: IPost[]
  works: IWork[]
}

const data: IData = {
  greeting: {
    title: 'Меня зовут Игорь, \nя - Frontend Vue.js разработчик',
    short_description:
      'Привет, этот простенький сайт расскажет немного обо мне и моих проектах. Если кратко, то я веб-разработчиков и в настоящее время ищу работу связанную с фронтендом на экосистеме Vue.js',
  },
  skills: {
    frontend:
      'JavaScript, TypeScript, Vue.js (2 Options API & 3 Composition API), Nuxt.js (2 и 3 SSR), Pinia, Vuex',
    backend: 'Laravel (fortify, sanctum, socialite, telescope), MySQL, Nginx',
    ui_ux: 'Tailwindcss, UnoCSS, Element Plus: A Vue 3 UI Framework, Figma, Photoshop',
    lib: 'Axios, Knex (js), Sharp (js), Intervention Image (php), DiDOM (php content parser), moment.js ',
    add: 'Playwright, Git, Linux (Ubuntu 16-18 и далее Debian 9-11)',
  },
  // resume: {
  //   skills: {},
  //   experience: {},
  //   education: {},
  // },
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
    {
      id: 5,
      title: 'Подведение итогов минувшего года.',
      tags: ['Итоги'],
      date: '2024-01-08',
      short_description:
        'Итоги принято конечно подводить до конца года, но лучше поздно чем никогда.',
      description: `
      Прошедший год не задался прям с самого начала из-за получения серъёзных травм... Но сейчас немного о другом, а конкретней распишу о достижениях и результатах:

          -- поддерживал на плаву текущие проекты (администрирование, исправление багов и работа с самописными парсерами на Playwright)
          -- освоил Composition API у фреймворка Vue 3 (раньше использовал только Options API на Vue 2)
          -- освоил работу со стором Pinia (ранее работал только с Vuex)
          -- плотно поработал с UI Element Plus (на проекте v2.mangamir.ru)
          -- так же работал с Nuxt 3 с включенным SSR
          -- поработал Tailwind CSS и UnoCSS
          -- работал с TypeScript (где-то пол года)
          -- поизучал основы ООП при работе с JS/TS (в работе пока нигде не пригождалось, разве что только для чтения некоторого кода)
          -- опубликовал некоторые из репозиториев на Github и задеплоил их для портфолио сайта
          -- написал простенький портфолио-сайт, без бекенда
          -- начал более детально осваивать Laravel (на текущий момент, не составляет труда написать API типа CRUD с кросдоменной работой)

      К списку достижений еще есть, что отнести (Inertia, Breeze, Vitest, Web Storage и возможно что-то еще), но это пока более поверхностные знания.

      К планам на ближайшие недели, могу отнести только трудоустройство и дальнейшее изучение Laravel (хотя думаю, что стоит больше уделить внимание фронтенду).`,
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
        add: [],
      },
      competencies: ['Ручное тестирование', 'Вёрстка', 'Администрирование'],
      competencies_description: `
          -- вёрстка всех страниц
          -- ручное тестирование в разных браузерах (Firefox, Chromium, IE)
          -- написание ТЗ для другого фрилансера
          -- ведение проекта (администрирование)
          -- СЕО оптимизация (для поисковиков)`,
      short_description:
        'Первый серьёзный проект сделанный мной и еще одним фрилансером, a так же проект с которого начался мой путь в веб-разработке. Фронтенд часть переделывалась множество раз, но на текущий момент показать могу только финальный результат.',
    },
    {
      id: 2,
      date: '2019-10-27',
      cover: 'cover1.png',
      images: {
        folder: 'verstka',
        files: ['cover1.png'],
      },
      title: 'Учебная вёрстка первого экрана',
      subtitle: 'Вёрстка учебная',
      links: [
        'https://github.com/detailcore/verstka/tree/master/2',
        'https://layout.ermolaev.website/2/',
      ],
      stack: {
        backend: [],
        frontend: ['html', 'css'],
        add: [],
      },
      competencies: ['верстка'],
      competencies_description: `Верстка первого экрана под ПК`,
      short_description: 'Обычная верстка первого экрана для ПК по макету из фотошопа',
    },
    {
      id: 3,
      date: '2019-11-13',
      cover: 'cover3.png',
      images: {
        folder: 'verstka',
        files: ['cover3.png'],
      },
      title: 'Вёрстка главной страницы',
      subtitle: 'Вёрстка учебная',
      links: [
        'https://github.com/detailcore/verstka/tree/master/3',
        'https://layout.ermolaev.website/3/',
      ],
      stack: {
        backend: [],
        frontend: ['js', 'html', 'css'],
        add: [],
      },
      competencies: ['вёрстка', 'слайдер'],
      competencies_description: `Вёрстка главной страницы с использованием таблиц и добавление анимационного слайдера через билиотеку js для слайдеров`,
      short_description: 'Табличная вёрстка главной страницы и слайдер с картинками',
    },
    {
      id: 4,
      date: '2019-12-26',
      cover: 'cover2.png',
      images: {
        folder: 'verstka',
        files: ['cover2.png'],
      },
      title: 'Вёрстка главной страницы и меню',
      subtitle: 'Вёрстка учебная',
      links: [
        'https://github.com/detailcore/verstka/tree/master/4',
        'https://layout.ermolaev.website/4/',
      ],
      stack: {
        backend: [],
        frontend: ['js', 'html', 'css'],
        add: [],
      },
      competencies: ['вёрстка Flex', 'валидация формы JS', 'анимация меню'],
      competencies_description: `Верстка с использованием flex-box и валидации формы ввода имени/e-mail/сообщения`,
      short_description: 'Вёрстка главной страницы и меню по png картинке',
    },
    {
      id: 5,
      date: '2021-03-15',
      cover: 'cover.png',
      images: {
        folder: 'noimage',
        files: [],
      },
      title: 'Youbeable',
      subtitle: 'SPA, FullStack, Учёба',
      links: ['https://github.com/detailcore/youbeable', ''],
      stack: {
        backend: ['Laravel 8'],
        frontend: ['Vue 2', 'Vue Router', 'Vuex', 'Axios', 'Sass'],
        add: ['webpack'],
      },
      competencies: [],
      competencies_description: `
          -- разработка API на Laravel (only read request)
          -- разработка фронтенда на Vue 2 (options API)
          -- вёрстка`,
      short_description:
        'Задумывался как клон сайта Stackoverflow, но только для чтения и поиска информации на русском языке. К сожалению БД утеряна безвозвратно и показать работоспособность не представляется возможным.',
    },
    {
      id: 6,
      date: '2021-05-15',
      cover: 'cover.png',
      images: {
        folder: 'parsepost.mangaclub.ru',
        files: ['cover.png'],
      },
      title: 'Publication parser & Download content',
      subtitle: 'SPA, Parser',
      links: ['', 'https://parsepost.mangaclub.ru/'],
      stack: {
        backend: ['Laravel 8', 'Node.js', 'MySQL'],
        frontend: ['Vue 2', 'Vue Router', 'Vuetify', 'Axios', 'JavaScript', 'Sass'],
        add: [
          'Playwright',
          'Knex',
          'Sharp',
          'Moment',
          'intervention/image',
          'imangazaliev/didom',
          'webpack',
        ],
      },
      competencies: ['Разработка', 'Тестирование', 'Интеграция с существующим проектом'],
      competencies_description: `
          -- разработка с нуля бекенда и фронтенда
          -- проектирование базы данных
          -- создание очередей для запуска безголового браузера Playwright
          -- интеграция с существующим проектом
          -- мониторинг состояния очередей
          -- парсинг публикаций с незащищенных страниц посредством didom (php)
          -- парсинг контента с уже защищенных страниц с использованием Playwright (node.js)
          -- сохранение контента в файловой системе и БД
          -- вёрстка и использование библиотеки компонентов Vuetify`,
      short_description:
        'Автоматизация, а если точнее то, требовалось переложить ручную рутинную работу с человека и уменьшить затраты человекочасов на повторение одних и тех же действий, с чем в полной мере справился используя современные средства разработки.',
    },
    {
      id: 7,
      date: '2021-05-24',
      cover: 'cover.png',
      images: {
        folder: 'mangamir',
        files: ['cover.png'],
      },
      title: 'Фронтенд часть - mangamir.ru (v1)',
      subtitle: 'SPA(MPA)',
      links: ['https://github.com/detailcore/manga.ai', 'https://mangamir.ru/'],
      stack: {
        backend: [],
        frontend: ['Nuxt 2', 'Vuex', 'Axios', 'Sass'],
        add: ['PM2', 'Trello'],
      },
      competencies: ['Адаптивная вёрстка', 'Разработка фронтенда', 'Ручное тестирование'],
      competencies_description: `
          -- адаптивная вёрстка на Flex, без использования UI/UX библиотек
          -- полная разработка фронтенд части приложения на Nuxt 2 (Options API)
          -- создание внутренней админки для модераторов
          -- ручное тестирование в разных браузерах (Firefox, Chromium)
          -- постановка задач в Trello
          -- настройка интерцептора Axios и кросдоменных запросов
      `,
      short_description:
        'В приложении была реализована идея онлайн читалки комиксов. При создании ставились задачи в Trello.',
    },
    {
      id: 8,
      date: '2021-06-26',
      cover: 'cover.png',
      images: {
        folder: 'api.mangamir',
        files: ['cover.png'],
      },
      title: 'Внешнее API для фронтенда',
      subtitle: 'Backend, RESTful API',
      links: ['', 'https://api.mangamir.ru/api/home/all'],
      stack: {
        backend: [
          'Laravel 8-10',
          'Laravel-permission',
          'Fortify',
          'Sanctum',
          'Socialite',
          'Telescope',
        ],
        frontend: [],
        add: ['intervention/image', 'spatie/image-optimizer'],
      },
      competencies: ['проектирование БД', 'ручное тестирование CRUD'],
      competencies_description: `
          -- написание RESTful API с нуля используя Laravel
          -- авторизация через социальные сети
          -- загрузка и сжатие изображений через "intervention/image"
          -- ручное тестирование CRUD операций через Postman/Insomnia
          -- оптимизация запросов к БД через Telescope
          -- проектирование базы данных MySQL`,
      short_description:
        'Спроектировать бекенд часть приложения (написать API) для работы с фронтенд частью приложения на другом домене.',
    },
    {
      id: 9,
      date: '2022-06-22',
      cover: 'cover.png',
      images: {
        folder: '',
        files: [],
      },
      title: 'Mega-Content-Parser',
      subtitle: 'Playwright, Parser',
      links: ['', ''],
      stack: {
        backend: [
          'Node.js',
          'MySQL',
          'Playwright',
          'Knex',
          'Sharp',
          'Moment',
          'Lodash',
          'Jimp',
          'Axios',
        ],
        frontend: [],
        add: [],
      },
      competencies: ['Разработка', 'Тестирование', 'Сохранение данных'],
      competencies_description: `
          -- разработка бекенд части парсера
          -- проектирование БД парсера
          -- авторизация и сохранение состояния безголового браузера 
          -- использовать безголовый браузер Playwright
          -- запуск парсера через CRON`,
      short_description:
        'Требовалось разработать мега-парсер, для полного клонирования контента сайта, сохранения данных в базу данных (порядка 6 ГБ) и файлов (больше 5 ТБ). Сложность заключалась в том, что клонируемый сайт был защищён.',
    },
    {
      id: 10,
      date: '2023-03-14',
      cover: 'cover.png',
      images: {
        folder: 'chat',
        files: ['cover.png'],
      },
      title: 'Chat (Vue 3) for legacy website',
      subtitle: 'SPA in legacy',
      links: ['', ''],
      stack: {
        backend: ['Node.js', 'MySQL', 'cors', 'jsonwebtoken'],
        frontend: ['Vue 3', 'Pinia', 'Fetch'],
        add: ['Vite', 'PM2', 'fetch'],
      },
      competencies: ['Разработка чата на базе legacy проекта'],
      competencies_description: `
          -- интеграция с существующим проектом
          -- проектирование БД
          -- упрощенный бекенд на node.js 
          -- небольшая интеграция node.js с php
          -- Vue Composition API
          -- вёрстка`,
      short_description:
        'Было необходимо написать чат для общения между авторизованными пользователями и интегрировать его в текущий проект.',
    },
    {
      id: 11,
      date: '2023-05-19',
      cover: 'cover.png',
      images: {
        folder: 'pdf-2-img',
        files: ['cover.png'],
      },
      title: 'pdf-to-image',
      subtitle: 'SPA, Node.js',
      links: [
        'https://github.com/detailcore/pdf-to-image.ai',
        'https://pdf-2-img.ermolaev.website/',
      ],
      stack: {
        backend: ['Node.js', 'Sharp', 'Express', 'pdf-img-convert', 'adm-zip'],
        frontend: ['Vue 3', 'js', 'jszip'],
        add: ['Vite'],
      },
      competencies: ['разработка бекенда', 'разработка фронтенда', 'ручное тестирование'],
      competencies_description: `
          -- разработка конвертера из .pdf в архив с картинками
          -- разработка конвертера из .zip архива с картинками в архив со склеенными картинками
          -- работка с изображениями через буфер
          -- использование библиотеки "pdf-img-conver" для получения буфера страниц из файла .pdf
          -- использование библиотеки "Sharp" для работы с буфером изображений (нарезка и/или склейка)
          -- использование "jszip" для сохранения изображений на фронте в архив
          -- ручное тестирование финального результата`,
      short_description:
        'Конвертер .pdf файлов в картинки форматов .webp|.png|.jpeg с параметрами склейки изображений и увеличения. На выходе получаем картинки разделённые по страницам как в pdf, либо склеенные в столбик.',
    },
    {
      id: 12,
      date: '2023-07-11',
      cover: 'cover.png',
      images: {
        folder: 'v2.mangamir',
        files: ['cover.png'],
      },
      title: 'Фронтенд часть - v2.mangamir.ru',
      subtitle: 'SPA(MPA), FullStack',
      links: ['https://github.com/detailcore/v2.manga.ai', 'https://v2.mangamir.ru/'],
      stack: {
        backend: ['Laravel'],
        frontend: ['TypeScript', 'Nuxt 3', 'Pinia', 'Fetch', 'Element Plus', 'Sass'],
        add: ['Vite', 'SSR', 'PM2'],
      },
      competencies: ['API (v2)', 'фронтенд на Nuxt 3', 'ручное тестирование', 'вёрстка'],
      competencies_description: `
          -- написание второй версии RESTful API (v2) для обновлённого внешнего интерфейса
          -- разработка фронтенда на Nuxt 3 с использованием TypeScript
          -- включена поддрежка рендеринга на стороне сервера (SSR)
          -- вёрстка с использованием Element Plus UI`,
      short_description:
        'Написание второй версии RESTful API (v2) на базе существующей базы данных и обновление внешнего интерфейса с использованием UI библиотеки Element Plus.',
    },
    {
      id: 13,
      date: '2023-10-16',
      cover: 'cover.png',
      images: {
        folder: 'vue-discord',
        files: ['cover.png'],
      },
      title: 'Клон Discord',
      subtitle: 'SPA, Tailwindcss, Учёба',
      links: [
        'https://github.com/detailcore/vue3-tailwindcss-discord',
        'https://discord.ermolaev.website',
      ],
      stack: {
        backend: [],
        frontend: ['Vue 3', 'Vue Router', 'Pinia', 'Tailwindcss', 'TypeScript'],
        add: ['Vite'],
      },
      competencies: ['вёрстка', 'Tailwindcss', 'Vue', 'TS'],
      competencies_description: `
          -- вёрстка с использованием Tailwindcss
          -- фронтенд часть выполнена на фреймворке Vue 3`,
      short_description:
        'Частичный клон (фронтенд) социальной сети Дискорд с отображением каналов и сообщений в них. Только ПК версия некоторых страниц.',
    },
    {
      id: 14,
      date: '2023-11-27',
      cover: 'cover.png',
      images: {
        folder: 'vue-table',
        files: ['cover.png'],
      },
      title: 'Таблица с сортировкой и фильтром',
      subtitle: 'SPA, Tailwindcss, Учёба',
      links: [
        'https://github.com/detailcore/vue3-table-test',
        'https://vue3-table.ermolaev.website',
      ],
      stack: {
        backend: [],
        frontend: ['Vue 3', 'Vue Router', 'Tailwindcss', 'JS'],
        add: ['Vite'],
      },
      competencies: ['JS', 'Vue', 'Tailwindcss'],
      competencies_description: `
          -- вёрстка с использованием Tailwindcss
          -- фронтенд часть выполнена на фреймворке Vue 3`,
      short_description:
        'Требовалось создать простую таблицу с использованием Vue 3, которая будет отображать данные из JSON и обеспечивать сортировку по всем столбцам и некоторую фильтрацию',
    },
    {
      id: 15,
      date: '2023-11-29',
      cover: 'cover.png',
      images: {
        folder: 'portfolio',
        files: ['cover.png'],
      },
      title: 'Portfolio',
      subtitle: 'SPA, Nuxt 3, SSR',
      links: ['https://github.com/detailcore/my-portfolio', 'https://ermolaev.website/'],
      stack: {
        backend: [],
        frontend: ['Nuxt 3', 'Tailwindcss'],
        add: ['Composition API', 'EsLint', 'Prettier'],
      },
      competencies: ['Вёрстка', 'Разработка'],
      competencies_description: `
          -- вёрстка страниц по Figma
          -- описание структуры данных
          -- настройка Nuxt и установка вспомогательных модулей
          -- написание статей
          -- деплой всех проектов и открытие репозиториев на гитхабе`,
      short_description:
        'Задумка сайта-портфолио заключается в том, чтобы описать ближайшие планы в коротких постах и объединить некоторые мои работы на одном сайте (а также ссылки на гитхаб) и показывать работы как часть резюме.',
    },
    {
      id: 16,
      date: '2024-01-15',
      cover: 'cover.png',
      images: {
        folder: 'nuxt2-roll',
        files: ['cover.png'],
      },
      title: 'Nuxt 2 Roll',
      subtitle: 'SPA, Nuxt 2, Tailwindcss, Тестовое',
      links: ['https://github.com/detailcore/nuxt2.roll', 'https://nuxt2-roll.ermolaev.website/'],
      stack: {
        backend: [],
        frontend: ['Nuxt 2', 'Vuex', 'Tailwindcss'],
        add: ['EsLint', 'Prettier'],
      },
      competencies: ['Вёрстка', 'Разработка'],
      competencies_description: `
          -- по заданию было указано строго использовать Nuxt 2
          -- вёрстка по макету Figma с использованием Tailwindcss
          -- настройка Nuxt и установка вспомогательных пакетов
          -- деплой проекта и открытие репозиториев на гитхабе`,
      short_description:
        'Если этот проект рассматривать как тестовое задание, то крайне не рационально, особенно с учетом потраченного кол-ва времени, но макет показался интересным, поэтому и выполнил (но к дизайну макета много вопросов).',
    },
  ],
}

const greeting = reactive<IGreeting>(data.greeting)
const skills = reactive<ISkills>(data.skills)
const posts = reactive<IPost[]>(
  data.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)
const works = reactive<IWork[]>(
  data.works.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)

export { greeting, skills, posts, works }
