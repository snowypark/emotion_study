/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { QUILL_MODULES } from "../../constants/quillModules";
import { useInput, useMaxSizeValidateInput } from "../../hooks/inputHook";
import { useQuillInput } from "../../hooks/quillHook";
import { useNavigate } from "react-router-dom";
import { useLoadList } from "../../hooks/boardListHook";

const layout = css `
    display: flex;
    flex-direction : column;
    align-items : center;
    margin : 100px 120px;
    border : 1px solid #dbdbdb;
    padding : 50px 0px;
`;

const headerTitle = css `
    margin-bottom: 30px;
    text-align : center;
    font-size : 40px;
    font-weight : 700;

`;

const boardTitle = css `
    box-sizing: border-box;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #ccc;
    padding: 10px;
    width: 90%;
`;

const submitButton = css`
    box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 90%;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    }
`;

function BoardWrite() {

    const navigate = useNavigate();
    const boardIdRef = useRef(0);
    const [ board, setBoard ] = useState({
        boardId: 0,
        boardTitle: "",
        boardContent: ""
    });   

    // const boardList = useMemo(() => {
    //     const lsBoardList = localStorage.getItem("boardList");
    //             //undefind
    //     return !lsBoardList ? [] : JSON.parse(localStorage.getItem("boardList"));
    // }, []);
    // hook으로 뺌

    const { boardList} = useLoadList();

    const [ inputValue, handleInputChange ] = useMaxSizeValidateInput(20);

    const [ quillValue, handleQuillValueChange ] = useQuillInput();

    const handleSumbitClick = () => {

        // const lastIndex = boardList.length - 1; //boardId가 0일 경우 
        // const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;
        let newBoardList = [];
        for(let i = 0; i < 203; i ++) { // 테스트글 강제로 만들기

            const board = {
                boardId: i + 1,
                boardTitle: inputValue + (i + 1),
                boardContent: quillValue
            };
            
            newBoardList = [...newBoardList, board];
        }        

        localStorage.setItem("boardList", JSON.stringify(newBoardList));
        alert("글 작성 완료.");
        navigate("/board/list"); //원하는 위치로 이동 가능
    }

    return (

        <div css={layout}>

            <h1 css={headerTitle}>글 작성하기</h1>
            <input css={boardTitle}
                type="text" 
                placeholder="제목을 입력하세요" 
                onChange={handleInputChange}
                value={inputValue}
            />

            <ReactQuill 
                style={{
                width: "90%",
                height: "400px"
            }} 
                modules={QUILL_MODULES}
                onChange={handleQuillValueChange}
            />

            <button css={submitButton} onClick={ handleSumbitClick }>작성하기</button>
        </div>
    );
}

export default BoardWrite;