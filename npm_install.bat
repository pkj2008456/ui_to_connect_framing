@echo off
echo Installing npm dependencies...
npm install

if %errorlevel% neq 0 (
    echo Failed to install npm dependencies.
    exit /b %errorlevel%
)

echo Successfully installed npm dependencies.
pause