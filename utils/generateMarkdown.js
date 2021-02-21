// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${data.Description}
  <br>
  Livelink: ${data.ProjectLink}

  ## <a name="toc">Table of Contents</a>
  * [Installation](#installation)
  * [Guide](#guide)
  * [Contributing](#contributing)
  * [Developer's Information](#devInfo)
  * [Credientials](#credientials)
  * [Testing](#testing)
  * [License](#license)
  
  ## <a name="installation">Installation</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  ${data.Installation}

  ## <a name="guide">Guide</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  ${data.Guide}
  <br>
  ![](insert screenshots/gifs here)

  ## <a name="devInfo">Developer's Information</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  Feel free to contact me using the information below if you have any questions or feedback!
  <br>
  Name: Jacob(Jake) Beeson
  <br>
  [Portfolio](https://boxnbeeson.github.io/Portfolio/)
  <br>
  [Github](https://github.com/boxnbeeson)
  <br>
  Email: boxnbeeson.jp@gmail.com

  ## <a name="credientials">Credientials</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>

  # Don't forget to add and link all information sources!

  ## <a name="testing">Testing</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  ${data.Testing}

  ## <a name="license">License</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  ${data.License}
`;
}

module.exports = generateMarkdown;
