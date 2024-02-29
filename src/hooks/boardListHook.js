import { useMemo } from "react";

export function 

useLoadList() {
    
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

export function useLoadListByPageNumber(page) {
    
    const boardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");
        return !lsBoardList ? [] : JSON.parse(localStorage.getItem("boardList"));
    }, [page]);

    const pageNumber = parseInt(page);
    const size = boardList.length;
    
    const totalPageCount = size % 10 === 0 ? size / 10 : size / 10 + 1;
    const startPageNumber = pageNumber % 5 === 0 
                            ? pageNumber - 4 
                            : (pageNumber - (pageNumber % 5)) + 1;

    const endPageNumber = startPageNumber + 4 <= totalPageCount 
                            ? startPageNumber + 4
                            : totalPageCount;

    let pageNumbers = useMemo(() => {
        let newPageNumbers = [];

        for(let i = startPageNumber; i < endPageNumber; i++ ) {
            newPageNumbers = [...newPageNumbers, i];
        }
        return newPageNumbers;
        
    }, [startPageNumber]);
    
    return { boardList, size, pageNumbers, totalPageCount };

}
