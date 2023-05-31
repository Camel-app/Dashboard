export default function getNavbar(isLoggedin: boolean) {
    if (isLoggedin) {
        return [
            { link: '/dashboard', label: 'Dashboard', target: "_self"},
            { link: 'https://camtools-documentation.readthedocs.io/en/master/', label: 'Documentation', target: "_blank"},
            { link: 'https://camgalaxy.github.io/', label: 'C.A.M.E.L.', target: "_blank"},
            { link: 'https://fennapps.shinyapps.io/shinyCAMEL_v02/', label: 'CAM-App', target: "_blank"},
            { link: '/logout', label: 'Log out', target: "_self"}
        ];
    }
    return [
        { link: '/', label: 'Home' },
        { link: 'https://camtools-documentation.readthedocs.io/en/master/', label: 'Documentation', target: "_blank"},
        { link: 'https://camgalaxy.github.io/', label: 'C.A.M.E.L.', target: "_blank"},
        { link: 'https://fennapps.shinyapps.io/shinyCAMEL_v02/', label: 'CAM-App', target: "_blank"},
        { link: '/apply', label: 'Apply account', target: "_self"},
        { link: '/register', label: 'Log in', target: "_self"},
    ];

}