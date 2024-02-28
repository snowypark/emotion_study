import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { setConsent } from 'firebase/analytics';

const layout = css `
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items : center;
`;

const imgLayout = css `

    display : felx;
    justify-content : center;
    align-items : center;

    border: 1px solid #dbdbdb;
    border-radius : 50%;
    width : 300px;
    height : 300px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

function ImageEx3() {

    const fileInputRef = useRef();
    const imageIdRef = useRef(0);
    const [ loadImages, setLoadImages ] = useState([]);

    /** loadImages 객체형태
     * {
     *      id: 1,
     *      file: file객체,
     *      dataURL: ""
     * }
     */
    
    const handleFileChange = (e) => {
        const { files } = e.target;
        const fileArray = Array.from(files);
        
        if(fileArray.length === 0) {
            return;
        }

        console.log(fileArray.map(file => file.name));
        let promises = [];

        promises = fileArray.map(file => new Promise(resolve => {

            const loadImage = {
                id: imageIdRef.current += 1, //onload로 id 생성x(먼저 불러오면 id받음)
                file,
                dataURL: e.target.result
            };

            const fileReader = new FileReader();
            
            // promise 실행 -> onload 실행(비동기)
            fileReader.onload = (e) => {

                resolve({
                    ...loadImage,
                    dataURL: e.target.result
                });
            }

            fileReader.readAsDataURL(file);

        }));

        Promise.all(promises)
        .then(result => {
            setLoadImages(result);
            console.log(result);
        });

    }

    return (
        <div css={layout}>

            {loadImages.map(laodImage => 
                <div css={imgLayout} key={laodImage.id}>
                    <img src={laodImage.dataURL} alt={laodImage.file.name } />
                </div>)
            }

            <input type="file" style={{display: "none"}} multiple={true}
            ref={fileInputRef} onChange={handleFileChange}/>            
            <button onClick={() => fileInputRef.current.click()}>불러오기</button>

        </div>
    );
}

export default ImageEx3;