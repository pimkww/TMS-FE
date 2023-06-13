import styled from "styled-components";

// For Scrolling Effect

export const Wrapper = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
    ::-webkit-scrollbar {
    display: none;
}
`;

export const Content = styled.div`
    scroll-snap-align: start;
`;