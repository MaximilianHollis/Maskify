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
import LineChart from './Line'

export default function Dash() {
    return (
        <>
            <Wrapper>
                <DashRow>
                    <DashColumn>
                        <Card>
                            <DoughnutChart />
                        </Card>
                    </DashColumn>
                    <DashColumn>
                        <Card>
                            <LineChart />
                        </Card>
                    </DashColumn>
                    <DashColumn full>
                    <Card>
                        hello
                    </Card>
                    </DashColumn>
                </DashRow>
            </Wrapper>
        </>
    )
}