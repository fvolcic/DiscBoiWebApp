import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataCard } from "./components/DataCard/dataCard";
import { Card, Grid, Typography, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import { ConnectToBluetooth } from "./utils/bluetooth";
import { SensorRecordList } from "./model/protos/sensor";
import { DiscThrow } from "./model/throw/throw";
import { AnalyzeThrow } from "./data/analyze";
import { ThrowShowcase } from "./components/throwShowcase.tsx/throwShowcase";
import { ThrowCarousal } from "./components/throwCarousal/throwCarousal";

function App() {
  const [bleConnected, setBleConnected] = React.useState(false);
  const [SensorRecordData, setSensorRecordData] =
    React.useState<SensorRecordList | null>(null);

  const allThrows: DiscThrow[] = [];
  const [Throws, setThrows] = React.useState<DiscThrow[]>([]);

  const [selectedThrow, setSelectedThrow] = React.useState<
    DiscThrow | undefined
  >(undefined);

  const connect = async () => {
    await ConnectToBluetooth((data) => {
      setSensorRecordData(data);
      console.log("Throws length: ", Throws.length);
      allThrows.push(AnalyzeThrow(data)); 
      console.log(allThrows); 
      setThrows(allThrows); 
      setSelectedThrow(AnalyzeThrow(data));
    });
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
        ) : (
          <Button variant="outlined" color="error">
            Disconnect Bluetooth
          </Button>
        )}

        <ThrowCarousal throwList={Throws} onSelectThrow={(i) => {setSelectedThrow(Throws.at(i))}}/>
          
        {Throws.length ? (
          <ThrowShowcase throw={selectedThrow} />
        ) : (
          <Typography variant="h3">Throw your disc</Typography>
        )}
      </body>
    </div>
  );
}

export default App;
