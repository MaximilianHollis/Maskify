import React, { useState, useContext, useEffect } from 'react';
import {
    Card,
    CardInfo,
    DashRow,
    DashColumn,
    Wrapper,
    CameraHeader,
    CameraButton,
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
                        <CardInfo>
                            <CameraHeader>Add a Camera</CameraHeader>
                            Add a camera to get started!
                            <CameraButton>Add Camera</CameraButton>
                        </CardInfo>
                    </Card>
                    </DashColumn>
                </DashRow>
            </Wrapper>
        </>
    )
}