import { css } from "@emotion/react";

export const layout = css`
    padding: 100px 30px 0px ;
    
`;

export const profileHeader = css `

    box-sizing: border-box;
    margin: 0px auto 20px;
    border: 1px solid #dbdbdb;
    width : 700px;

`;

export const title = css`

    margin-bottom: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;

`;


export const prifileImg = css `
    
    display:flex;
    align-items:center;
    justify-content:center;

    box-sizing: border-box;
    border : 1px solid #dbdbdb;
    border-radius : 50%;
    margin: 0 auto 20px;
    
    width: 200px;
    height: 200px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
    cursor: pointer;

`;

export const nicnknameLayout = css `

    display:flex;
    justify-content:center;
    margin-bottom: 20px;

`;

export const nickname = css `

    box-sizing : border-box;
    outline:none;
    width:200px;
    border : none;
    border-bottom : 2px solid #dbdbdb;
    padding: 5px 10px 0px;
    text-align : center;
    font-size : 18px;
    transition : background-color 0.3s ease-in-out;
    font-weight:600;
    &:focus {
        background-color:#fafafa;
        border-bottom:2px solid #bbb;
    }
    cursor: pointer;
    
`;

export const prifileInputLayout = css`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0px auto 20px;
    border: 1px solid #dbdbdb;
    width: 700px;
    padding: 10px;
`;

export const inputBox = css `
    position: relative;
    margin-bottom: 10px;

`;

export const profileInput = css`
    
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    
    padding: 20px 20px 10px;
    font-size: 16px;

    width: 335px;
    &:nth-of-type(3n), &:nth-of-type(4n) {
        margin: 0;
    }
  
    &:focus {
        outline: 2px solid #5dd6ff;
    }

    & + label {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 23px;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
    }

    &:focus + lable , &:not(:placeholder-shown) + label {
        top: 13px;
        left: 5px;
        font-size: 12;
        color: #333;
    }
`;

export const buttonLayout = css `
    display:flex;
    justify-content:center;
    align-items:center;

`;

export const profilebutton = css `
    box-sizing : border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    background-color: white;
    font-size:12px;
    font-weight : 600;
    cursor: pointer;
    width : 700px;
    height : 50px;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #dbdbdb;
    }
`;

