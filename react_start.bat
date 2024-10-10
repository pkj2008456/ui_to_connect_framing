@echo off

REM Get the local IPv4 address
for /f "tokens=14 delims= " %%A in ('ipconfig ^| findstr /R /C:"IPv4 Address" /C:"IPv4 地址"') do (
    set IP=%%A
)

REM Start the Vite development server
npm run dev

REM Display the local IPv4 address
echo Your local IPv4 address is: %IP%

pause
