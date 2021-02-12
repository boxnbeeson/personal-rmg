// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${data.Description}
  <br>
  ${data.ProjectLink}
  ## Table of Contents
  * [Demo](#demo)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Developer's Information](#devInfo)
  * [Credientials](#credientials)
  * [License](#license)
  
  ## <a name="demo"></a>Demo
  ${data.Demo}
  ![](insert screenshots/gifs here)
  ## <a name="installation"></a>Installation
  ${data.Installation}
  ## <a name="usage"></a>Usage
  ${data.Usage}
  ## <a name="contributing"></a>Contributing
  ${data.Contributing}
  ## <a name="testing"></a>Testing
  ${data.Testing}
  ## <a name="devInfo"></a>Developer's Information
  Feel free to contact me using the information below if you have any questions or feedback!
  <br>
  Name: ${data.DeveloperInfo1}
  <br>
  Github Link: <github.com/${data.DeveloperInfo2}>
  <br>
  Email: <${data.DeveloperInfo3}>
  ## <a name="credientials"></a>Credientials
  ${data.Credientials}
  ## <a name="license"></a>License
  ${data.License}
`;
}

module.exports = generateMarkdown;
