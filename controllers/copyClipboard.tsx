export default function copyToClipboard(element, link) {
    const url = "https://camgalaxy.github.io?link=" + link + "/participants/getOneExperiment?id=" + element + "&participantID="
    console.log(url);
    navigator.clipboard.writeText(url);
}