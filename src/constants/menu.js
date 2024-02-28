
import ImageEx3 from "../pages/ImageEx3/ImageEx3";
import Mypage from "../pages/Mypage/Mypage";
import ImageEx from "../pages/imageEx/ImageEx";

export const MENUS = [
    {
        id: 1,
        path: "/mypage",
        name: "마이페이지",
        element: <Mypage />
    },
    {
        id: 2,
        path: "/board",
        name: "게시판",
        element: <>게시판</>
    },
    {
        id: 3,
        path: "/notice",
        name: "공지사항",
        element: <>공지사항</>
    },
    {
        id: 4,
        path: "/image/ex",
        name: "이미지 불러오기",
        element: <ImageEx />
    },
    {
        id: 5,
        path: "/image/ex2",
        name: "이미지 다중",
        element: <></>
    },
    {
        id: 6,
        path: "/image/ex3",
        name: "이미지 불러오기",
        element: <ImageEx3 />
    }

];