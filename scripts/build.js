// This is dev script, you should not modify here when developing shortcuts!

// Get the name, source, target path from pakeage.json
const pkg = require("../package.json");  

// Build the shortcuts.js from source dir
const { buildShortcut } = require("@joshfarrant/shortcuts-js");
const sourceAction = require(`../${pkg.source}`);
const shortcut = buildShortcut(sourceAction);

// Output to target path
const fs = require("fs");
const targetPath = `${process.cwd()}/${pkg.target}`;
fs.mkdirSync(targetPath, { recursive: true });
fs.writeFileSync(`${targetPath}/${pkg.name}.shortcut`, shortcut);
