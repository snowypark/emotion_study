import React, { useMemo, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaCaretRight , FaCaretLeft} from "react-icons/fa";
import * as S from './style';
import { Link, Route, Routes } from 'react-router-dom';
import { MENUS } from '../../constants/menu';




function SideBar(props) {
    const [isShow, setShow ] = useState(false);

    // const menus = useMemo(() => MENUS, []);

    return (
        <aside css={S.layout(isShow)}>
            <button css={S.toggleButton} onClick={() => setShow(!isShow)}>
            {isShow ?  <FaCaretLeft /> : <FaCaretRight /> }
            </button>
            <ul css={S.menuList}>
                {MENUS.map(menu => 
                    <Link css={S.menuItems} to={menu.path} key={menu.id} onClick={() => setShow(false)}>
                        <li >{menu.name}</li>
                    </Link>)}
            </ul>
        </aside>
    );
}

export default SideBar;