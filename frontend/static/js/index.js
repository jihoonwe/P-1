import Home from "./pages/Home.js";
import Settings from "./pages/Settings.js";
import NotFound from "./pages/NotFound.js";

const router = async () => {
    const routes = [
        { path: "/", view: Home }, //view: 해당 경로에서 나타내는 html
        { path: "/main", view: Home },
        { path: "/settings", view: Settings },
        
        { path: "/settings", view: Settings },
        { path: "/settings", view: Settings },
        { path: "/signup", view: Settings },
        { path: "/register", view: Settings },
        { path: "/post1", view: Settings },
        { path: "/settings", view: Settings },

    ];

    const pageMatches = routes.map((route) => {
        return {
            route, // route: route
            isMatch: route.path === location.pathname,
        };
    });
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

    if (!match) {
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound();
        document.querySelector("#root").innerHTML = await page.getHtml();
    } else {
        const page = new match.route.view();
        document.querySelector("#root").innerHTML = await page.getHtml();
    }
};

// 뒤로 가기 할 때 데이터 나오게 하기 위함
window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) { //클릭한 객체
            e.preventDefault();
            history.pushState(null, null, e.target.href);//화면전환 :(history.pushState(state,title,url(변경할주소))
            router();
        }
    });
    router();
});
 