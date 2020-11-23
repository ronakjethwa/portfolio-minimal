module.exports = {

    author: "@ronakjethwa",
    siteTitle: "Ronak",
    siteShortTitle: "Ronak Jethwa", // Used as logo text in header, footer, and splash screen
    siteDescription: "I carry the blend of front end and design knowledge to deliver the intuitive and pixel perfect designed products",
    siteUrl: "https://ronakjethwa.com/",
    siteLanguage: "en_US",
    siteIcon: "content/favicon-32x32.png", // Relative to gatsby-config file
    seoTitleSuffix: "Ronak Jethwa", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "GitHub",
            url: "https://github.com/ronakjethwa"
        },        
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ronakjethwa/"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/ronak_jethwa/"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/ronakjethwa"
        },
    ],
  
    navLinks: {
        menu: [
        ]
    },

    footerLinks: [
        {
            name: "ronakjethwa@gmail.com",
            url: "/"
        },
    ]
}