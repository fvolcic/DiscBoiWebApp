import React from "react";
import { SensorRecordList } from "../model/protos/sensor";

//Define BLE Device Specs
var deviceName = "DiscBoi";
var bleService = "19b10000-e8f2-537e-4f6c-d104768a1214";
var ledCharacteristic = "19b10002-e8f2-537e-4f6c-d104768a1214";
var sensorCharacteristic = "19b10001-e8f2-537e-4f6c-d104768a1214";

let bluetoothDevice: BluetoothDevice | null = null;
let characteristric : BluetoothRemoteGATTCharacteristic | null = null;
let service : BluetoothRemoteGATTService | null = null;

let databuffer = new Uint8Array(0);

let bleCb = (data: SensorRecordList) => {}; // Callback function to handle received data

const HandleCharacteristic = (event: Event) => {
    const value = (event.target as BluetoothRemoteGATTCharacteristic).value;
    if(!value) return;
 
    // Check if the received data is "START" or "END"
    if(value.buffer.byteLength <= 5) {
        const data = new TextDecoder().decode(value);
        if(data === "START") {
            databuffer = new Uint8Array(0);
            return;
        } else if(data === "END") {
            console.log(databuffer);
            const sensorData = SensorRecordList.decode(databuffer);
            console.log(sensorData);
            bleCb(sensorData);
            databuffer = new Uint8Array(0);
            return;
        }
    }

    databuffer = new Uint8Array([...databuffer, ...new Uint8Array(value.buffer)]);
}

export const ConnectToBluetooth = async (cb: (data: SensorRecordList) => void) => {
  bleCb = cb;
  try {
    navigator.bluetooth.requestDevice({
      filters: [{ name: deviceName }],
      optionalServices: [bleService],
    }).then((device) => {
        console.log("Device: ", device);
        return device.gatt?.connect();
    }).then((server) => {
        console.log("Server: ", server);
        return server?.getPrimaryService(bleService);
    }).then((service) => {
        console.log("Service: ", service);
        return service?.getCharacteristic(sensorCharacteristic);
    }).then((characteristic) => {
        console.log("Characteristic: ", characteristic);
        characteristic?.addEventListener('characteristicvaluechanged', HandleCharacteristic);
        return characteristic?.startNotifications();
    })
  } catch (error) {
    console.error(error);
  }
};

export const isBluetoothConnected = () => {
  return bluetoothDevice !== null;
}
