# ionic4-sidemenu-version
Ionic 4 with a Side menu and Version in the sidemenu - Based off of the starter template __sidemenu__

### About
The version # is read from `package.json` and then placed into `../assets/version.ts` so that it can be used within the app to display the version number in the footer of the side menu.

Uses:
- Angular 8.x
- Ionic 4.7.x

# How to Start


1. Install Dependencies

        npm install 

3. Start the server and view the results

        ionic serve


_There is a __postinstall__ script that creates the version.ts file used in the code._

# What's Next

Look at `app.component.ts` where the version file is imported

Look at `app.component.html` where the version info is used


If you bump the version number in package.json, run `node version.js` at any time.