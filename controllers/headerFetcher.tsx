export default function getNavbar(isLoggedin: boolean) {
    if (isLoggedin) {
        return [
            { link: '/', label: 'Home' },
            { link: 'https://camtools-documentation.readthedocs.io/en/master/', label: 'Documentation' },
            { link: 'https://camgalaxy.github.io/', label: 'CamBoard' },
            { link: '/dashboard', label: 'Dashboard' },
            { link: 'https://fennapps.shinyapps.io/shinyCAMEL_v02/', label: 'Analyser' },
            { link: '/logout', label: 'Log out' },
        ];
    }
    return [
        { link: '/', label: 'Home' },
        { link: 'https://camtools-documentation.readthedocs.io/en/master/', label: 'Documentation' },
        { link: 'https://camgalaxy.github.io/', label: 'CamBoard' },
        { link: 'https://fennapps.shinyapps.io/shinyCAMEL_v02/', label: 'Analyser' },
        { link: '/register', label: 'Log in' },
    ];

}