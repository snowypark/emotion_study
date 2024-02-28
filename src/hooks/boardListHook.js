import { useMemo } from "react";

export function useLoadList() {
    
    const boardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");
        return !lsBoardList ? [] : JSON.parse(localStorage.getItem("boardList"));
        }, []);

    
    const lastIndex = boardList.length - 1; //boardId가 0일 경우 
    const firstId = lastIndex < 0 ? 0 : boardList[0].boardId;
    const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;
    const size = boardList.length;

    return { boardList, size, firstId, lastId };
}