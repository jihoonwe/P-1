export default class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style type="text/css">
                * {
                    padding: 0;
                    margin: 0;
                }
                
                body {
                    display: inline-block;
                }Z
                .nav {
                    position: fixed;
                    background: #045d8b;
                    top:0;
                    left:0;
                    right: 0;
                    color:white;
                    display: flex;
                    align-items: center;
                    height: 30px;
                    
                }
                
                .nav_item {
                    padding: 12px 18px;
                    text-decoration: none;
                    color: #eeeeee;
                    font-weight: 500;
                }
                
                .nav_item:hover {
                    background: rgba(255, 255, 255, 0.05);
                }
                #root {
                    margin: 2em;
                    line-height: 1.5;
                    font-weight: 500;
                }      
                a {
                    color:black;
                    text-decoration: none;
                }
               .board_list_body .item>div,
               .board_list_mid>div{
                   display: inline-block;
               }
                
            </style>
        </head>
        <body>
            <div class="board_list_wrap">
                <div class="board_list_mid">  
                    <div class="text">자유게시판</div>
                    <div class="register"><a href="/register">등록하기</a></div>
                </div>
                <div class="board_list">
                    <div class="board_list_body">
                        <div class="item">
                            <div class="date">12/18</div>
                            <div class="tit"><a href="/1">아주 비기너 참여하시는..</a></div>
                            <div class="writer">익명</div>
                        </div>
                        <div class="item">
                            <div class="date">12/18</div>
                            <div class="tit"><a href="#">아주 비기너 참여하시는..</a></div>
                            <div class="writer">익명</div>
                        </div>
                        <div class="item">
                            <div class="date">12/18</div>
                            <div class="tit"><a href="#">아주 비기너 참여하시는..</a></div>
                            <div class="writer">익명</div>
                        </div>
                        <div class="item">
                            <div class="date">12/18</div>
                            <div class="tit"><a href="#">아주 비기너 참여하시는..</a></div>
                            <div class="writer">익명</div>
                        </div>
                        <div class="item">
                            <div class="date">12/18</div>
                            <div class="tit"><a href="#">아주 비기너 참여하시는..</a></div>
                            <div class="writer">익명</div>
                        </div>                    
                    </div>
                </div>
                <div class="page">
              
                    <a href="#" class="num">1</a>
                    <a href="#" class="num">2</a>
                    <a href="#" class="num">3</a>
                    <a href="#" class="num">3</a>
                    <a href="#" class="num">4</a>
                    <a href="#" class="num">5</a>
                    <a href="#" class="num">6</a>
                    <a href="#" class="num">7</a>
                    <a href="#" class="num">8</a>
                    <a href="#" class="num">9</a>
                </div>
            </div>
        </body>
        </html>
        `;
    }
}
