/* eslint-disable */
const inquirer = require("inquirer");
const fs = require("fs");

const QUESTIONS_STRINGS = {
  componentName: "componentName",
};

const QUESTIONS = [
  {
    name: QUESTIONS_STRINGS.componentName,
    type: "string",
  },
];

inquirer.prompt(QUESTIONS).then((answers) => {
  const componentName = answers[QUESTIONS_STRINGS.componentName];
  const templatePath = `${__dirname}\\templates`;
  const newFilesPath = `${process.cwd()}\\src\\components\\${componentName}`;

  try {
    console.log(newFilesPath);
    fs.mkdirSync(newFilesPath);
    createDirectoryContents(templatePath, newFilesPath, componentName);
  } catch (error) {
    console.log(error);
  }
});

function createDirectoryContents(templatePath, newFilesPath, componentName) {
  const filesToCreate = fs.readdirSync(templatePath);
  filesToCreate.forEach((file) => {
    const templateFilePath = `${templatePath}\\${file}`;

    // get stats about the current file
    const stats = fs.statSync(templateFilePath);

    // if directory
    if (stats.isDirectory()) {
      fs.mkdirSync(`${newFilesPath}\\${file}`);
      createDirectoryContents(
        templateFilePath,
        `${newFilesPath}\\${file}`,
        componentName
      );
    }
    // if file
    if (stats.isFile()) {
      let templateFilePathTemp = templateFilePath;

      console.log("actions path: " + templateFilePathTemp);
      writeFile(file, componentName, templateFilePathTemp, newFilesPath);
    }
  });
}

/**
 * Write file of template
 * @param file
 * @param componentName
 * @param templateFilePath
 * @param newFilesPath
 */
function writeFile(file, componentName, templateFilePath, newFilesPath) {
  let filename = file;
  if (file === "CONT_NAME.tsx") {
    filename = `${componentName}.ts`;
  }
  const contents = fs.readFileSync(templateFilePath, "utf8");

  const writePath = `${newFilesPath}/${filename}`;
  let replacedContents = contents.replace(
    new RegExp(/(CONT_NAME)+/g),
    componentName
  );
  replacedContents = replacedContents.replace(
    new RegExp(/(CONT_CONTAINER_NAME)+/g),
    `${toUpperCaseFirstChar(componentName)}`
  );
  replacedContents = replacedContents.replace(
    new RegExp(/(CONT_CAMEL_NAME)+/g),
    `${toUpperCaseFirstChar(componentName)}`
  );
  replacedContents = replacedContents.replace(
    new RegExp(/(CONT_CAPITAL_NAME)+/g),
    `${componentName.toUpperCase()}`
  );
  fs.writeFileSync(writePath, replacedContents, "utf8");
}

/**
 * Get upper cased first character word
 * @param word
 */
const toUpperCaseFirstChar = (word) => {
  if (word && typeof word === "string" && word.length > 0) {
    return `${word[0].toUpperCase()}${word.slice(1, word.length)}`;
  }
  return word;
};
