
/** @jsxImportSource @emotion/react */
import * as S from './style';

function RootLayout({ children }) {
    return (
        <>
            <div css={S.backgroundlayout}></div>
            <div css={S.layout}>
                {children}
            </div>
        </>
    );
}

export default RootLayout;