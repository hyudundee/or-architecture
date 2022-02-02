import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { worksData } from '../data/worksData/index'
const WorkSection = styled.section`
    // height: 10000px;
    width: 100wh;
    padding: 4rem 0rem;
    // background: red;

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

`;

const WorkWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    overflow: hidden;
    position: relative;
    // background: green;
`
const WorkCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 0rem 25rem 1rem 25rem;
`;
const WorkImage = styled.img`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
`;

const WorkPage = (props) => {
    const wKey = props.match.url.split('/').at(-1)
    const work = worksData[wKey];
    const workImages = work["images"]
    return (
        <>
            <Navbar isHomePage={false} />
            <WorkSection>
                <h1>MX展廊</h1>
                <WorkWrapper>
                    {workImages.map((image, index) => {
                        console.log(index)
                        return (
                            <WorkCard key={index}>
                                <WorkImage src={image.imageUrl} />
                                <p>{image.imageTitle}</p>
                            </WorkCard>
                        );
                    })}
                </WorkWrapper>
            </WorkSection>
        </>
    );
};

export default WorkPage;
