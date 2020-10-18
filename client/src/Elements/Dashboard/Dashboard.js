import React, { useState, useContext, useEffect } from 'react';
import {
    Card,
    CardInfo,
    DashRow,
    DashColumn,
    Wrapper
} from './Dashboard.elements';
import { Button, Img, ImgWrapper } from '../../globalStyles';
import DoughnutChart from './Doughnut'

export default function Dash() {
    return (
        <>
            <Wrapper>
                <DashRow>
                    <DashColumn>
                        <Card>
                            <CardInfo>
                                <DoughnutChart />
                            </CardInfo>
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