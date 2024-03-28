import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import { DiscThrow } from '../../model/throw/throw';
import { Button, Paper, Typography } from '@mui/material';

interface CarouselItemProps {
    discThrow: DiscThrow;
    throwNumber: number;
    onSelectThrow: () => void;
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {

    return (
        <Paper style={{margin: "2px", padding: "2px"}}>
            <Typography variant='h5'>
                Throw {props.throwNumber}
            </Typography>
            <Typography variant='body1'>
                {props.discThrow.Speed.toFixed(2)} MPH
            </Typography>
            <Button onClick={props.onSelectThrow}>View</Button>
        </Paper>
    )
}

export interface ThrowCarousalProps {
    throwList: DiscThrow[]; 
    onSelectThrow: (i: number) => void;
}

export const ThrowCarousal: React.FC<ThrowCarousalProps> = (props) => {

    return (
        <div
        style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            overflow: "auto"
        }}
        >
            {props.throwList.map((t, i) => 
                <CarouselItem discThrow={t} throwNumber={i} onSelectThrow={() => {props.onSelectThrow(i)}} />
            )}
        </div>
    )
}