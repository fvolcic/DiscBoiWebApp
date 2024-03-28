import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface DataCardProps {
    title: string;
    data: string;
}

export const DataCard: React.FC<DataCardProps> = ({ title, data }) => {
    return (
        <Card variant="outlined">
            <CardContent>
               <Typography variant='h4' >{title}</Typography>
                <Typography variant='body1' >{data}</Typography>
            </CardContent>
        </Card>
    );
};