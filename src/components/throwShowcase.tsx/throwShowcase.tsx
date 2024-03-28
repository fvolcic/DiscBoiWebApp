import { DataCard } from "../DataCard/dataCard";
import * as React from "react";
import { DiscThrow } from "../../model/throw/throw";
import { Grid } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { Chart } from "react-google-charts";
import "chart.js/auto";
import { timeStamp } from "console";
export interface ThrowShowcaseProps {
  throw?: DiscThrow;
}

export const ThrowShowcase: React.FC<ThrowShowcaseProps> = (
  props: ThrowShowcaseProps
) => {
  if (!props.throw) {
    return <></>;
  }

  const lowspeedAccelData = {
    datasets: [
      {
        label: "aX",
        data: props.throw.SensorRecordData.records.map((_) => _.lowspeedAccX),
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <DataCard title="Speed" data={`${props.throw.Speed.toFixed(2)} MPH`} />
      </Grid>
      <Grid item xs={6}>
        <DataCard title="Spin" data={`${props.throw.Spin.toFixed(2)} RPM`} />
      </Grid>
      <Grid item xs={6}>
        <DataCard
          title="Nose Angle"
          data={`${props.throw.NoseAngle.toFixed(2)} Deg`}
        />
      </Grid>
      <Grid item xs={6}>
        <DataCard
          title="Hyzer Angle"
          data={`${props.throw.HyzerAngle.toFixed(2)} Deg`}
        />
      </Grid>
      <Grid item xs={6}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Chart
            chartType="LineChart"
            options={{
              title: "Lowspeed Accelerometer",
            }}
            width={400}
            height={400}
            data={[
              ["x", "ax", "ay", "az"],
              ...props.throw.SensorRecordData.records.map((_) => [
                _.timestamp,
                _.lowspeedAccX,
                _.lowspeedAccY,
                _.lowspeedAccZ,
              ]),
            ]}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Chart
            chartType="LineChart"
            options={{
              title: "Highspeed Accelerometer",
            }}
            width={400}
            height={400}
            data={[
              ["x", "ax", "ay", "az"],
              ...props.throw.SensorRecordData.records.map((_) => [
                _.timestamp,
                _.highspeedAccX,
                _.highspeedAccY,
                _.highspeedAccZ,
              ]),
            ]}
          />
        </div>
      </Grid>

      <Grid item xs={6}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Chart
            chartType="LineChart"
            options={{
              title: "Gyroscope",
            }}
            width={400}
            height={400}
            data={[
              ["x", "gx", "gy", "gz"],
              ...props.throw.SensorRecordData.records.map((_) => [
                _.timestamp,
                _.gyroX,
                _.gyroY,
                _.gyroZ,
              ]),
            ]}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Chart
            chartType="LineChart"
            options={{
              title: "Magnometer",
            }}
            width={400}
            height={400}
            data={[
              ["x", "ax", "ay", "az"],
              ...props.throw.SensorRecordData.records.map((_) => [
                _.timestamp,
                _.magX,
                _.magY,
                _.magZ,
              ]),
            ]}
          />
        </div>
      </Grid>
    </Grid>
  );
};
