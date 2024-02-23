import { css } from "@emotion/react";


export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    right: 0;
    z-index: 99;
    top: ${isShow ? "0px" : "-80px"};
    border-right: 1px solid #dbdbdb;
    width: 50%;
    height: 80px;
    transition: top 0.5s ease-in-out;
    background-color: white;
    box-shadow: 1px 0px 3px #00000022;
    
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute; 
    transform: translateX(-50%);
    right: 10%;
    bottom: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 20px;
    height: 15px;
    cursor: pointer;
    background-color: white;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }
`;

export const menuList = css `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: censter;
    position: relative;    
    top: 50%;    
    left: 50%;    
    transform: translate(-50%, -50%);
`;

export const menuItems = css `
    display: flex;    
    flex-direction: column;
    position: relative;         
    justify-content: center;
    align-items: censter;
    margin : auto 20px;
    border: 1px solid #dbdbdb;    
    width: 200px;
    height: 50px;
    color: black;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:nth-of-type(1) {
        border-top: 1px solid #dbdbdb
    }    
    &:hover {
        background-color: #dbdbdb
    }
`;

export const liItems = css `
    display: flex;  
    position: relative;       
    justify-content: center;
    align-items: censter;
    
`;