import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const layout = css `
    display : flex;
    flex-direction : column;
    justify-content: cdenter;
    align-items : center;

`;


const imageLayout = css `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items:center;
        box-sizing: border-box;
        margin-bottom: 20px;
        border: 1px solid #dbdbdb;
        width: 300px;
        height: 300px;
        overflow: hidden;
        & > img {
            width: 100%;
        }
        cursor: pointer;
`;


function ImageEx() {

    const imgFileRef = useRef();
    const [ previews, setPrivews ] = useState([]);

    const handleFileChange = (e) => {
        console.log(e.target.fiels);

        let promises = [];

        // let ps = [
        //         new Promise(reslove => reslove(1)), 
        //         new Promise(reslove => reslove(2)), 
        //         new Promise(reslove => reslove(1))
        //     ];
        // Promise.all(ps).then(result => console.log(result));

        // map 방식
        const files = Array.from(e.target.files); // array로 변경 -> map 가능
        promises = files.map(file => new Promise((resolve) => {

            const fileReader = new FileReader();        
            
            fileReader.onload = (e) => {
                console.log(e.target.result);
                resolve(e.target.result);
            }
            
            fileReader.readAsDataURL(file);
        })); 


        // for(let file of e.target.files) {
        //     promises = [...promises, new Promise((resolve) => {

        //         const fileReader = new FileReader();        
                
        //         fileReader.onload = (e) => {
        //             console.log(e.target.result);
        //             resolve(e.target.result);
        //         }
                
        //         fileReader.readAsDataURL(file);
        //     })];

        // }

        Promise.all(promises)
        .then(result => {
            setPrivews(result);
            console.log(result);
        });
    }

    return (
        <div css={layout}>     
                {previews.map ((preivew, index) => 
                        <div key ={index} css={imageLayout}>
                            <img src={preivew} alt="" />
                        </div>
                )}

                <input style={{display:"none"}}  multiple={true}
                    type="file" ref={imgFileRef} onChange={handleFileChange}/>

                <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>           
              
        </div>
    );
}

export default ImageEx;