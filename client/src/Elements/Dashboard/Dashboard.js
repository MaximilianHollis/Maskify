import React, { useState, useContext, useEffect } from 'react';
import {
    Card,
    CardInfo,
    DashRow,
    DashColumn,
    Wrapper
} from './Dashboard.elements';
import { Button, Img, ImgWrapper } from '../../globalStyles';

export default function Dash() {
    return (
        <>
            <Wrapper>
                <DashRow>
                    <DashColumn>
                        <Card>
                            hello there
                        </Card>
                    </DashColumn>
                    <DashColumn>
                        <Card>
                            hello there again
                        </Card>
                    </DashColumn>
                </DashRow>
            </Wrapper>
        </>
    )
}