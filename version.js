// Thanks to  https://medium.com/@amcdnl/version-stamping-your-app-with-the-angular-cli-d563284bb94d


const { version } = require('./package.json');
const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');
const versionInfo = {};

versionInfo.version = version;

const file = resolve(__dirname, '.', 'src', 'assets', 'version.ts');
writeFileSync(file,
`// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
export const VERSION = ${JSON.stringify(versionInfo, null, 4)};
/* tslint:enable */
`, { encoding: 'utf-8' });

console.log(`Wrote version ${versionInfo.version} info to ${relative(resolve(__dirname, '..'), file)}`);
