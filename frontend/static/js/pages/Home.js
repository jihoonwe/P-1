export default class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        return `
     <div class="board_list_wrap">
        <div class="board_list_mid">  
            <div class="text">자유게시판</div>
            <div class="register"><a href="/register">등록하기</a></div>
        </div>
        <div class="board_list">
            <div class="board_list_body">
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
        `;
    }
}
