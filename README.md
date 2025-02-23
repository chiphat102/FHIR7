# FHIR7
Checking my FHIR website using RESTful API

In order to run the fhir website using REStful API in your own computer, you must download some features that create environment for launching our own website.

**First step**: Download Node.js 
https://nodejs.org/en/download

**Second step**: Go to Extensions in VS code, download Live Server and REST client

**Third step**: Open Powershell by Window + X, then input this line: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
Next, check the ExecutionPolicy list by this line: Get-ExecutionPolicy -List
You should see RemoteSigned under the CurrentUser scope. It means we have succeeded.

Then reopen VS code, open the terminal and then input: node server.js
This time right click on createAnonymousPatient.html, you shall see "Open with Live server" option, choose it and then have fun

為了在您的電腦上運行 FHIR 網站並使用 RESTful API，您需要下載一些功能來創建運行我們自己網站的環境。 

**第一步**：下載 Node.js
https://nodejs.org/en/download

**第二步**：在 VS Code 的擴展中下載 Live Server 和 REST Client

**第三步**：按 Windows + X 打開 Powershell，然後輸入以下命令：
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
接著，使用以下命令檢查執行策略列表：
Get-ExecutionPolicy -List
您應該會看到在 CurrentUser 範圍內顯示 RemoteSigned。這意味著我們已經成功設定。

然後重新打開 VS Code，打開終端並輸入：
node server.js
這時，右鍵單擊 createAnonymousPatient.html，您應該會看到「Open with Live server」的選項，選擇它後就可以開始使用了。
