import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from './style';

function Mypage() {
    const imgFileRef = useRef();
    const [ preview, setPrivew ] = useState("");

    const handleImgFileChange = (e) => {
        const fileReader = new FileReader();

        if(e.target.files.length === 0) {
            return;
        }

        fileReader.onload = (e) => {
            setPrivew(e.target.result);
        };

        fileReader.readAsDataURL(e.target.files[0]);
    }

    return (
        <div css={S.layout}>
            <div css={S.profileHeader}>
                <h1 css={S.title}>마이페이지</h1>
                
                <div css={S.prifileImg} onClick={() => imgFileRef.current.click()}>
                    <img src={preview} />
                    <input style={{display:"none"}} type="file" ref={imgFileRef} onChange={handleImgFileChange}/>
                </div>

                <div css={S.nicnknameLayout}>
                    <input css={S.nickname} type="text" maxLength={20} />
                </div>
            </div>

            <div css={S.prifileInputLayout}>

                <div css={S.inputBox}>
                    <input css={S.profileInput} id="name" type="text" placeholder=" "/>
                    <label htmlFor="name">성명</label>
                </div>

                <div css={S.inputBox}>
                    <input css={S.profileInput} id="birth" type="text" placeholder=" "/>
                    <label htmlFor="birth">생일</label>
                </div>

                <div css={S.inputBox}>
                    <input css={S.profileInput} id="phone" type="text" placeholder=" "/>
                    <label htmlFor="phone">연락처</label>
                </div>

                <div css={S.inputBox}>
                    <input css={S.profileInput} id="address" type="text" placeholder=" "/>
                    <label htmlFor="address">주소</label>
                </div>

            </div>

            <div css={S.buttonLayout}>
                <button css={S.profilebutton}>수정하기</button>
            </div>


        </div>
);
}

export default Mypage;