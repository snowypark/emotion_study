import React, { useMemo, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaCaretRight , FaCaretLeft, FaCaretUp ,FaCaretDown } from "react-icons/fa";
import { Link, Route, Routes } from 'react-router-dom';
import * as S from './style2';
import { MENUS } from '../../constants/menu';




function SideBarTop(props) {
    const [isShow, setShow ] = useState(false);


    return (
        <aside css={S.layout(isShow)}>
            <button css={S.toggleButton} onClick={() => setShow(!isShow)}>
            {isShow ?  <FaCaretDown  /> : <FaCaretUp  /> }
            </button>
            <ul css={S.menuList}>
                {MENUS.map(menu => 
                    <Link css={S.menuItems} to={menu.path} key={menu.id} onClick={() => setShow(false)}>
                        <li css={S.liItems}>{menu.name}</li>
                    </Link>)}
            </ul>
        </aside>
    );
}

export default SideBarTop;