export default function getNavbar(isLoggedin: boolean) {
    if (isLoggedin) {
        return [
            { link: '/dashboard', label: 'Dashboard', target: "_self"},
            { link: 'https://camtools-documentation.readthedocs.io/en/master/', label: 'Documentation', target: "_blank"},
            { link: 'https://camgalaxy.github.io/static/?ShowResearcherButtons=true&fullScreen=false', label: 'C.A.M.E.L. (researcher view)', target: "_blank"},
            { link: 'https://fennapps.shinyapps.io/CAMtools_CAMapp/', label: 'CAM-App', target: "_blank"},
            { link: '/logout', label: 'Log out', target: "_self"},
        ];
    }
    return [
        { link: '/', label: 'Home' },
        { link: 'https://camtools-documentation.readthedocs.io/en/master/', label: 'Documentation', target: "_blank"},
        { link: 'https://camgalaxy.github.io/static/', label: 'C.A.M.E.L. (participant view)', target: "_blank"},
        { link: 'https://fennapps.shinyapps.io/CAMtools_CAMapp/', label: 'CAM-App', target: "_blank"},
        { link: '/apply', label: 'Apply account', target: "_self"},
        { link: '/register', label: 'Log in', target: "_self"},
    ];
}