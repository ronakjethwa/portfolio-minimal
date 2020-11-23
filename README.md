# Portfolio Minimal

Just install the starter, add your content, and there you go!

<a href="#sections">Sections</a> · <a href="#features">Features</a> · <a href="#how-to-start">How to Start</a> · <a href="#edit-content">Edit Content</a> · <a href="#edit-theme">Edit Theme</a> · <a href="#edit-page-structure">Edit Page Structure</a> · <a href="#feedback">Feedback</a>

---

## Sections

The starter has predefined sections as well as a template that you can use to create new, custom sections. 

**The predefined sections are:**
1. About me
2. Interests/Skills
3. Projects
4. Contact me
5. Medium articles

---

## Features

#### 🕹️ Quick and Easy Setup - Add content and deloy.
Just install the starter, add your content, and deploy it! This starter works seamlessly with hosts like Netlify.

#### 📓 Content Integration via MDX - No external CMS needed.
MDX is a Markdown format that allows you to enrich your content with React components. This makes it fully customizable without external dependencies.

#### 🧰 Extendable Layout - Add more sections as you like.
The starter includes predefined sections as well as a template for new, custom sections. Moreover, you can add new projects to the project section without additional coding.

#### 💅 Responsive Design - With freshening animations.
The starter is designed with a mobile-first approach and looks perfect on small and large breakpoints. Moreover, it has some nice and smooth animations.

#### <img src="http://logok.org/wp-content/uploads/2015/10/Medium-logo-old.png" alt="Medium Icon" width="20" /> Medium Integration - Features latest articles.
In case you are a writer on Medium, the starter has a easy to use Medium integration that allows you to feature your latest articles.

To see all features in action, have a look at the <a href="https://gatsby-starter-portfolio-minimal.netlify.app/" target="_blank"><strong>live demo</strong></a>.

---

## How to Start

With Portfolio Minimal, you get up and running in just a few minutes.

1. **Install the Gatsby CLI.**

   ```
   npm install -g gatsby-cli

   ```

2. **Start the site in `develop` mode.**

   ```
   cd portfolio-minimal
   gatsby develop
   ```

3. **Open the source code and start editing!**

---

## Edit Content

After you installed the starter project, you most likely want to add your own content.

### Edit configuration

First, you want to edit the config file which stores the site's configuration (e.g. title, description) and social profiles.

```
|-- src
    |-- config
        |-- index.js
```

Navigate to the `index.js` file in the config folder, edit the configuration, save it, that's it!

### Edit section content

Next, you can edit the content for each section you want to be displayed. By default, all sections are shown. If you want to remove certain sections from the site, check out <a href="#editing-page-structure">this part of the Readme</a>.

```
|-- src
    |-- content
        |-- about
        |-- contact
        |-- hero
        ...
```

You find all content in the content folder (surprisingly). For content integration, the project uses MDX, a Markdown format. If you haven't worked with Markdown or MDX before, check the Markdown syntax in <a href="https://www.gatsbyjs.org/docs/mdx/markdown-syntax/" target="_blank">Gatsby's docs</a>. They also provide <a href="https://www.gatsbyjs.org/docs/mdx/writing-pages/" target="_blank">further information about MDX</a>.

To get up and running, just edit the predefined data fields in each `mdx` file. 

---

## Edit Theme

You find the theme settings in the following file: `src/styles/Theme.js`

There, you can change colors, breakpoints, fonts, and other design-related properties.

---

## Edit Page Structure

To remove or reorder predefined sections, navigate to the `src/pages/index.js` file. This is the home page of your site.

Each section (besides the Articles section) exists of an imported React component and a GraphQL query that is needed for data querying.

**If you want to remove a section**, just delete the imported React component and query.

**If you want to reorder your sections**, just reorder the React components inside the `<Layout />` component.

### Add custom sections

If you want to add your own custom sections, there is a section template you can use. You can find it in the following directory: `src/components/templates`

---
