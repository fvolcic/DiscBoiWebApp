
import { SensorRecordList } from "../protos/sensor"

export type DiscThrow = {
    SensorRecordData: SensorRecordList;
    Speed: number;
    Spin: number;
    NoseAngle: number;
    HyzerAngle: number;
}