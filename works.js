function expand(elem) {
    let sections = document.querySelectorAll(".workSection");
    sections = Array.from(sections);
    sections.forEach(el => {
        if (el != elem) el.classList.remove("showing");
    });
    elem.classList.toggle("showing");
    let coverImg = "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg";

    if (elem.classList.contains("showing")) {
        switch (elem.id) {
            case "SpaceX":
                coverImg = "https://www.spacex.com/static/images/share.jpg";
                break;
            case "Tesla":
                coverImg = "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark%26Wordmark2-Dark-Background-Logo.wine.svg";
                break;
            case "BoringCompany":
                coverImg = "https://techcrunch.com/wp-content/uploads/2018/01/boring_company_flamethrower_2048x2048.png?w=1024";
                break;
            case "OpenAI":
                coverImg = "https://blogs.swarthmore.edu/its/wp-content/uploads/2022/05/openai.jpg";
                break;
            case "Twitter":
                coverImg = "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6304a2578abd315b18c8f6e9_twitter-logo.png";
                break;
            default:
                break;
        }
    }
    document.querySelector("#cover").style.setProperty("background-image", `url(${coverImg})`)
}