export default class {
    constructor() {
        document.title = "Login";
    }
    async getHtml() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login</title>
        </head>
        <body>
            <h1>로그인</h1>
            <br><input type="text" name="id"><br>
           <p>
           <input type="submit" name="login" value="회원가입">
           <input type="submit" name="login" value="로그인">
            
        </body>
        </html>
        `;
    }
}
