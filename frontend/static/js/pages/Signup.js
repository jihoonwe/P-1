export default class {
    constructor() {
        document.title = "Signup";
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
            <h1>회원가임</h1>
            <br><input type="text" name="id"><br>
           <p>
           <input type="submit" name="login" value="나가기">
           <input type="submit" name="login" value="회원가입">
            
        </body>
        </html>
        `;
    }
}
