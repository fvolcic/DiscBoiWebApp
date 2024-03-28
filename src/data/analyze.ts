
import { DiscThrow } from "../model/throw/throw";
import { SensorRecordList } from "../model/protos/sensor";

export const AnalyzeThrow = (data: SensorRecordList): DiscThrow => {
    // Placeholder for now
    return {
        SensorRecordData: data,
        Speed: CalculateSpeed(data),
        Spin: 0,
        NoseAngle: 0,
        HyzerAngle: 0,
    };
};

const CalculateSpeed = (data: SensorRecordList): number => {
    
    let speed: number = 0;

    for(let i = 100; i < 160; i++) {
        let xSpeed = data.records[i].lowspeedAccX;
        let ySpeed = data.records[i].lowspeedAccY;
        let deltaMillis = data.records[i].timestamp - data.records[i - 1].timestamp;

        let accel = Math.sqrt(xSpeed * xSpeed + ySpeed * ySpeed);

        speed += accel * deltaMillis;
    }

    // return MPH
    return speed * 2.23694;

}


