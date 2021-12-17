const fs = require("fs-extra");
const path = require('path');

const { Command, Option } = require('commander');

const pkg = require('../package.json');

// define the global filePath
const MD_DOCS_PATH = path.resolve(__dirname, "../docs/");
const INDEX_MD = path.join(MD_DOCS_PATH, "README.md");
const PRESS_MD_JSON_PATH = path.resolve(__dirname, "../src/md/");
const MD_JSON_FILE_TYPE = ".md.json";
const REGISTRY_COMPONENTS_FILE = path.resolve(__dirname, "../src/registry.jsx");
const ROUTER_CONFIG_FILE = path.resolve(__dirname, "../src/route.config.json");

// Global Variable Path
const docs_path = [];
let count = 1;

function clearTheBuildPath() {
  fs.removeSync(PRESS_MD_JSON_PATH);
  fs.removeSync(REGISTRY_COMPONENTS_FILE)
  fs.removeSync(ROUTER_CONFIG_FILE)
  fs.mkdirSync(PRESS_MD_JSON_PATH);
}


// >>> get the md docs file path list
function getDocsFilesList(dir, filesList = [], indexMd = '') {
  const files = fs.readdirSync(dir);
  files.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getDocsFilesList(fullPath, filesList, dir);
    } else {
      const fileTitle = item.slice(0, item.lastIndexOf("."));
      const isMD = item.slice(item.lastIndexOf(".") + 1).toLowerCase() === "md";
      if (isMD) {
        filesList.push({
          path: fullPath,
          title: fileTitle,
          name: `DOC_MD__${count}`,
          route: fullPath === indexMd ? '/' : `/doc__${count}`
        });
        count++;
      }
    }
  });
  return filesList;
}



/**
 * transform md string to json string and write to the *.md.json files
 * @param {{path: string; title: string; name: string; route:string;}[]} filesList 
 */
function transformMDtoJSON(filesList) {
  filesList.forEach((file) => {
    fs.readFile(file.path, 'utf-8')
      .then((data) => {
        const fileName = file.name + MD_JSON_FILE_TYPE;

        fs.writeJSON(`${PRESS_MD_JSON_PATH}/${fileName}`, {
          content: data,
          title: file.title
        }, { flag: "w+" })
          .then(() => {
            console.log(`[✅ ${Date.now()}] Successfully created ${fileName}.`)
          })
          .catch((err) => {
            console.log(`Failed to create ${fileName} file ❌.`)
            console.error(err);
          })

      }).catch(err => {
        console.log(`Failed to read ${file.path} ❌.`)
        console.error(err);
      })
  })
}


/**
 * registry the file
 * @param {Array<{name: string;file: string;}>} mdList 组件名称
 */
function registryComponentsText() {
  const mdList = docs_path.map(doc => ({
    name: doc.name,
    file: doc.name + MD_JSON_FILE_TYPE,
  }));
  // registry the jsx
  const imrComponents = mdList
    .map(md => `import ${md.name} from "md/${md.file}";`)
    .join("\n");
  const eprComponents = `export default {
    ${mdList
      .map(md => `${md.name}: ${md.name},`)
      .join("\n")
    }
  };`
  const registryFileData = `
    ${imrComponents}

    ${eprComponents}
  `;

  fs.writeFile(REGISTRY_COMPONENTS_FILE, registryFileData, { flag: "w+" }).then(() => {
    console.log("✅complete registry components")
  })

  // registry the josn
  fs.writeJson(ROUTER_CONFIG_FILE, {
    pages: docs_path.map(doc => ({
      md_key: doc.name,
      path: doc.route,
      filePath: "./" + path.relative(MD_DOCS_PATH, doc.path).replace(/\\/g, "/")
    }))
  }, { flag: "w+" }).then(() => {
    console.log("✅Complete router registry")
  }).catch(err => {
    console.log(`Failed to create route file`);
    console.error(err);
  })
}

clearTheBuildPath();
getDocsFilesList(MD_DOCS_PATH, docs_path, INDEX_MD);
transformMDtoJSON(docs_path);
registryComponentsText();

// program commands
const COMMAND_PATH = process.cwd();

// get the ReactPress info in package.json
const { version, name, repository, homepage } = pkg;

const program = new Command();




// >>> output version
program
  .version(
    version,
    '-v, -V, --version',
    `Output your local ${name}'s version.`
  );
