import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../configs/firebase/firabseConfig';
import { Line } from 'rc-progress';
import { v4 as uuid} from "uuid";
import { json } from 'react-router-dom';

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

    const [urls, setUrls ] =useState([]);
    useEffect(() => {
        setUrls(!localStorage.getItem("urls") ? [] : JSON.parse(localStorage.getItem("urls")));
    }, []);

    const [ progressPercent, setProgressPercent ] = useState(0);

    const [ uploadFiles, setUploadFiles ] = useState([]);
    const [ previews, setPrivews ] = useState([]);
    const imgFileRef = useRef();
    
    const handleFileChange = (e) => {

        // map 방식
        const files = Array.from(e.target.files); // array로 변경 -> map 가능
                
        
        if(files.length===0) {
            imgFileRef.current.value = "";
            return;
        }

        setUploadFiles(files);
        let promises = [];
        
        console.log(e.target.fiels);
        
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
        });
    }

    const handleImageUpload = () => {
        const file = uploadFiles[0];
        const sotrageRef = ref(storage, `files/test/${uuid()}_${file.name}`);
        const uploadTesk = uploadBytesResumable(sotrageRef, file);

        uploadTesk.on(
            "state_changed",
            (snapshot) => {
                setProgressPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
            },
            (error) => {},
            () => {
                getDownloadURL(sotrageRef).then(urls => {
                    localStorage.setItem(JSON.stringify(urls));
                    setUrls(urls);
                    setPrivews([]);
                });
            },
        );
    }

    return (
             <div css={layout}>    

                {urls.map(url => {
                    <div  css={imageLayout}>
                        <img src={url} alt="" />                    
                    </div>
                })}


            {previews.map((preview, index) => 
                <>
                    <div key={index} css={imageLayout}>
                        <img src={preview} alt="" />
                    </div>
                    <Line percent={progressPercent} strokeWidth={4} strokeColor={"#22222"}/>
                </>
            )}
                

            <input style={{display:"none"}}  multiple={true}
                    type="file" ref={imgFileRef} onChange={handleFileChange}/>

            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>           
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    );
}

export default ImageEx;