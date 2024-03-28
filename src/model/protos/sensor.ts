/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface SensorRecord {
  timestamp: number;
  lowspeedAccX: number;
  lowspeedAccY: number;
  lowspeedAccZ: number;
  highspeedAccX: number;
  highspeedAccY: number;
  highspeedAccZ: number;
  gyroX: number;
  gyroY: number;
  gyroZ: number;
  magX: number;
  magY: number;
  magZ: number;
}

export interface SensorRecordList {
  records: SensorRecord[];
}

function createBaseSensorRecord(): SensorRecord {
  return {
    timestamp: 0,
    lowspeedAccX: 0,
    lowspeedAccY: 0,
    lowspeedAccZ: 0,
    highspeedAccX: 0,
    highspeedAccY: 0,
    highspeedAccZ: 0,
    gyroX: 0,
    gyroY: 0,
    gyroZ: 0,
    magX: 0,
    magY: 0,
    magZ: 0,
  };
}

export const SensorRecord = {
  encode(message: SensorRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int32(message.timestamp);
    }
    if (message.lowspeedAccX !== 0) {
      writer.uint32(21).float(message.lowspeedAccX);
    }
    if (message.lowspeedAccY !== 0) {
      writer.uint32(29).float(message.lowspeedAccY);
    }
    if (message.lowspeedAccZ !== 0) {
      writer.uint32(37).float(message.lowspeedAccZ);
    }
    if (message.highspeedAccX !== 0) {
      writer.uint32(45).float(message.highspeedAccX);
    }
    if (message.highspeedAccY !== 0) {
      writer.uint32(53).float(message.highspeedAccY);
    }
    if (message.highspeedAccZ !== 0) {
      writer.uint32(61).float(message.highspeedAccZ);
    }
    if (message.gyroX !== 0) {
      writer.uint32(69).float(message.gyroX);
    }
    if (message.gyroY !== 0) {
      writer.uint32(77).float(message.gyroY);
    }
    if (message.gyroZ !== 0) {
      writer.uint32(85).float(message.gyroZ);
    }
    if (message.magX !== 0) {
      writer.uint32(88).int32(message.magX);
    }
    if (message.magY !== 0) {
      writer.uint32(96).int32(message.magY);
    }
    if (message.magZ !== 0) {
      writer.uint32(104).int32(message.magZ);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SensorRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSensorRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = reader.int32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.lowspeedAccX = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.lowspeedAccY = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.lowspeedAccZ = reader.float();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.highspeedAccX = reader.float();
          continue;
        case 6:
          if (tag !== 53) {
            break;
          }

          message.highspeedAccY = reader.float();
          continue;
        case 7:
          if (tag !== 61) {
            break;
          }

          message.highspeedAccZ = reader.float();
          continue;
        case 8:
          if (tag !== 69) {
            break;
          }

          message.gyroX = reader.float();
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.gyroY = reader.float();
          continue;
        case 10:
          if (tag !== 85) {
            break;
          }

          message.gyroZ = reader.float();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.magX = reader.int32();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.magY = reader.int32();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.magZ = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SensorRecord {
    return {
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      lowspeedAccX: isSet(object.lowspeedAccX) ? globalThis.Number(object.lowspeedAccX) : 0,
      lowspeedAccY: isSet(object.lowspeedAccY) ? globalThis.Number(object.lowspeedAccY) : 0,
      lowspeedAccZ: isSet(object.lowspeedAccZ) ? globalThis.Number(object.lowspeedAccZ) : 0,
      highspeedAccX: isSet(object.highspeedAccX) ? globalThis.Number(object.highspeedAccX) : 0,
      highspeedAccY: isSet(object.highspeedAccY) ? globalThis.Number(object.highspeedAccY) : 0,
      highspeedAccZ: isSet(object.highspeedAccZ) ? globalThis.Number(object.highspeedAccZ) : 0,
      gyroX: isSet(object.gyroX) ? globalThis.Number(object.gyroX) : 0,
      gyroY: isSet(object.gyroY) ? globalThis.Number(object.gyroY) : 0,
      gyroZ: isSet(object.gyroZ) ? globalThis.Number(object.gyroZ) : 0,
      magX: isSet(object.magX) ? globalThis.Number(object.magX) : 0,
      magY: isSet(object.magY) ? globalThis.Number(object.magY) : 0,
      magZ: isSet(object.magZ) ? globalThis.Number(object.magZ) : 0,
    };
  },

  toJSON(message: SensorRecord): unknown {
    const obj: any = {};
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.lowspeedAccX !== 0) {
      obj.lowspeedAccX = message.lowspeedAccX;
    }
    if (message.lowspeedAccY !== 0) {
      obj.lowspeedAccY = message.lowspeedAccY;
    }
    if (message.lowspeedAccZ !== 0) {
      obj.lowspeedAccZ = message.lowspeedAccZ;
    }
    if (message.highspeedAccX !== 0) {
      obj.highspeedAccX = message.highspeedAccX;
    }
    if (message.highspeedAccY !== 0) {
      obj.highspeedAccY = message.highspeedAccY;
    }
    if (message.highspeedAccZ !== 0) {
      obj.highspeedAccZ = message.highspeedAccZ;
    }
    if (message.gyroX !== 0) {
      obj.gyroX = message.gyroX;
    }
    if (message.gyroY !== 0) {
      obj.gyroY = message.gyroY;
    }
    if (message.gyroZ !== 0) {
      obj.gyroZ = message.gyroZ;
    }
    if (message.magX !== 0) {
      obj.magX = Math.round(message.magX);
    }
    if (message.magY !== 0) {
      obj.magY = Math.round(message.magY);
    }
    if (message.magZ !== 0) {
      obj.magZ = Math.round(message.magZ);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SensorRecord>, I>>(base?: I): SensorRecord {
    return SensorRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SensorRecord>, I>>(object: I): SensorRecord {
    const message = createBaseSensorRecord();
    message.timestamp = object.timestamp ?? 0;
    message.lowspeedAccX = object.lowspeedAccX ?? 0;
    message.lowspeedAccY = object.lowspeedAccY ?? 0;
    message.lowspeedAccZ = object.lowspeedAccZ ?? 0;
    message.highspeedAccX = object.highspeedAccX ?? 0;
    message.highspeedAccY = object.highspeedAccY ?? 0;
    message.highspeedAccZ = object.highspeedAccZ ?? 0;
    message.gyroX = object.gyroX ?? 0;
    message.gyroY = object.gyroY ?? 0;
    message.gyroZ = object.gyroZ ?? 0;
    message.magX = object.magX ?? 0;
    message.magY = object.magY ?? 0;
    message.magZ = object.magZ ?? 0;
    return message;
  },
};

function createBaseSensorRecordList(): SensorRecordList {
  return { records: [] };
}

export const SensorRecordList = {
  encode(message: SensorRecordList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      SensorRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SensorRecordList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSensorRecordList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.records.push(SensorRecord.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SensorRecordList {
    return {
      records: globalThis.Array.isArray(object?.records)
        ? object.records.map((e: any) => SensorRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SensorRecordList): unknown {
    const obj: any = {};
    if (message.records?.length) {
      obj.records = message.records.map((e) => SensorRecord.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SensorRecordList>, I>>(base?: I): SensorRecordList {
    return SensorRecordList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SensorRecordList>, I>>(object: I): SensorRecordList {
    const message = createBaseSensorRecordList();
    message.records = object.records?.map((e) => SensorRecord.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
