import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataCard } from "./components/DataCard/dataCard";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ConnectToBluetooth } from "./utils/bluetooth";
import { SensorRecordList } from "./model/protos/sensor";
import { DiscThrow } from "./model/throw/throw";
import { AnalyzeThrow } from "./data/analyze";
import { ThrowShowcase } from "./components/throwShowcase.tsx/throwShowcase";

function App() {
  const [bleConnected, setBleConnected] = React.useState(false);
  const [SensorRecordData, setSensorRecordData] = React.useState<SensorRecordList | null>(null);

  const [ Throws, setThrows ] = React.useState<DiscThrow[]>([]);

  const [ selectedThrow, setSelectedThrow ] = React.useState<DiscThrow | undefined>(undefined);

  const connect = async () => {
    await ConnectToBluetooth(
      (data) => {
        setSensorRecordData(data);
        setThrows([...Throws, AnalyzeThrow(data)]);
        setSelectedThrow(AnalyzeThrow(data));
      }
    );
    setBleConnected(true);
  };

  return (
    <div className="App">
      <body>
        <Typography variant="h3">PaperFlight Throw Tracker</Typography>
        {!bleConnected ? (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              connect();
            }}
          >
            Connect Bluetooth
          </Button>
        ) : <Button variant="outlined" color="error">
          Disconnect Bluetooth
          </Button>}
        {
          Throws.length ? 
            (
              <ThrowShowcase throw={selectedThrow}/>
            ) :
            (
              <Typography variant="h3">
                Throw your disc
              </Typography>
            )
        }
      </body>
    </div>
  );
}

export default App;
