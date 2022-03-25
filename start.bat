:: GoAnimate 2014 Launcher
:: Creator: Joseph Animate 2021
@echo off
:: Peform A Dependency Install Check And Start Wrapper
if not exist node_modules (
echo Oof, it looks like that the dependencies for goanimate 2014 is not installed. Installing...
npm install
echo All of the dependencies for goanimate 2014 is installed now. Starting Up GoAnimate...
npm start
:: The server.js file will do the rest of the output.
) else (
:: Start goanimate if all dependencies are installed
echo Looks like that the dependencies for goanimate is in the right place. Starting Up GoAnimate...
npm start
:: The server.js file will do the rest of the output.
)
