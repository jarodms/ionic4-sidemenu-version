# ionic4-sidemenu-version
Ionic 4 with a Side menu and Version

### About
The version # is read from `package.json` and then placed into `../assets/version.ts` so that it can be used within the app to display the version number in the footer of the side menu.

Uses:
- Angular 5.x
- Ionic 3.9.2

# How to Start


1. Install Dependencies

        npm install

2. Write the version info to `../assets/version.ts`

        node version.js 

3. Start the server and view the results

        ionic serve


# What's Next

Look at `app.component.ts` where the version file is imported

Look at `app.html` where the version info is used
