::From https://developer.android.com/studio/run/emulator-commandline
TITLE Android Emulator
CALL .\SetAndroidHome
CALL .\SetProxy
::emulator -list-avds
::emulator -help-datadir

@SET SHOW_CONSOLE=1
@IF "%1"=="" SET SHOW_CONSOLE=0
@IF "%1"=="""" SET SHOW_CONSOLE=0

IF "%SHOW_CONSOLE%"=="0" PowerShell -WindowStyle Hidden -Command Exit

IF "%2"=="" %ANDROID_HOME%\emulator\emulator -avd 5.1_WVGA_API_26
IF "%2"=="NoLoad" %ANDROID_HOME%\emulator\emulator -no-snapshot-load -avd 5.1_WVGA_API_26

IF "%SHOW_CONSOLE%"=="1" PAUSE
