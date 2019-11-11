# Account Login v1.1 (登入功能模擬，1.1版)

ALPHA Camp 學期三作業3、4: 登入功能

### 版本歷史：
- v1.1 完成儲存「登入狀態」(使用Cookie驗證權限，含建立、維持與取消)
- v1.0 完成基本功能(模擬登入與登出)

## 如何使用：
0. 至少先在電腦上裝好Node.js
1. 從本專案頁面將檔案下載，或複製(clone)到要操作的電腦上
2. 使用終端機(terminal)，將目錄切換至專案資料夾(account_Login)
3. 使用npm安裝需要的套件：
```
npm i express express-handlebars express-session
```
4. 執行本專案：
```
npm run start
```
5. 開啟預覽連結
- 若是在本機操作，於瀏覽器網址列輸入[http://localhost:3000](http://localhost:3000)；
- 若使用虛擬主機，則須配合主機服務設定另用網址

## 使用方法：
1. 在登入畫面輸入帳號(email)與密碼(password)，以下為測試用的「正確」使用者名稱與對應的帳密：

| firstName  | email               | password         |
| ---------- | ------------------- | ---------------- |
| Tony       | tony@stark.com      | iamironman       |
| Steve      | captain@hotmail.com | icandothisallday |
| Peter      | peter@parker.com    | enajyram         |
| Natasha    | natasha@gamil.com   | parol#@$!        |
| Nick       | nick@shield.com     | password         |

######
2. 如果輸入的帳密如以上五組正確，會進入登入成功的歡迎畫面："Welcome back, (firstName)!"，右側則有"logout"選項可登出
3. 如果帳密組合錯誤，會停留在本頁並跳出錯誤訊息："invalid email or password"，其中email會留在欄位方便改用其他密碼；另外，點標題"Account Login"可消除錯誤訊息
4. (1.1新增)登入後會以session建立權限，右上角多一個"Home"與"Logout"並列，前者維持同一畫面，表現維持登入狀態；後者則會取消登入狀態，得回首頁重新登入

## 預覽畫面：
![image](https://assets-lighthouse.s3.amazonaws.com/uploads/answer/cover/107006/account_login.png)


