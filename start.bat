:: Wrapper Offline Remastered Launcher
:: Creator: Joseph Animate 2021
@echo off
:: Peform A Dependency Install Check And Start Wrapper
if not exist node_modules (
echo Oof, it looks like that the dependencies for wrapper offline remastered is not installed. Installing...
npm install
echo All of the dependencies for wrapper offline remastered is installed now. Starting Up Wrapper...
npm start
:: The server.js file will do the rest of the output.
) else (
:: Start wrapper if all dependencies are installed
echo Looks like that the dependencies for wrapper offline remastered is in the right place. Starting Up Wrapper...
npm start
:: The server.js file will do the rest of the output.
)
