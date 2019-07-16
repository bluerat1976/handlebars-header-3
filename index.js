var headerblock = document.getElementById('header-template').innerHTML;
var template = Handlebars.compile(headerblock);
var linksData = template({
    data: [
        {
            href: 'index.html',
            link: 'Home',
            activeLocation: '/index.html',
        },
        {
            href: 'about-us.html',
            link: 'О нас',
            activeLocation: '/about-us.html',
        },
        {
            href: 'services.html',
            link: 'Сервисы',
            activeLocation: '/services.html',
        },
        {
            href: 'portfolio.html',
            link: 'Портфолио',
            activeLocation: '/portfolio.html',
        },
        {
            href: 'contacts.html',
            link: 'Контакты',
            activeLocation: '/contacts.html',
        },
        {
            href: 'info.html',
            link: 'Info',
            activeLocation: '/info.html',
        },
        {
            href: 'articles.html',
            link: 'Articles',
            activeLocation: '/articles.html',
        }

    ]
});

document.getElementById('header-1').innerHTML += linksData;
