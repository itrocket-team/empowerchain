import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** EventSend is emitted on Msg/Send */

export interface EventSend {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the nft */

  id: string;
  /** sender is the address of the owner of nft */

  sender: string;
  /** receiver is the receiver address of nft */

  receiver: string;
}
/** EventSend is emitted on Msg/Send */

export interface EventSendSDKType {
  /** class_id associated with the nft */
  class_id: string;
  /** id is a unique identifier of the nft */

  id: string;
  /** sender is the address of the owner of nft */

  sender: string;
  /** receiver is the receiver address of nft */

  receiver: string;
}
/** EventMint is emitted on Mint */

export interface EventMint {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the nft */

  id: string;
  /** owner is the owner address of the nft */

  owner: string;
}
/** EventMint is emitted on Mint */

export interface EventMintSDKType {
  /** class_id associated with the nft */
  class_id: string;
  /** id is a unique identifier of the nft */

  id: string;
  /** owner is the owner address of the nft */

  owner: string;
}
/** EventBurn is emitted on Burn */

export interface EventBurn {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the nft */

  id: string;
  /** owner is the owner address of the nft */

  owner: string;
}
/** EventBurn is emitted on Burn */

export interface EventBurnSDKType {
  /** class_id associated with the nft */
  class_id: string;
  /** id is a unique identifier of the nft */

  id: string;
  /** owner is the owner address of the nft */

  owner: string;
}

function createBaseEventSend(): EventSend {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}

export const EventSend = {
  encode(message: EventSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }

    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.sender = reader.string();
          break;

        case 4:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSend>): EventSend {
    const message = createBaseEventSend();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseEventMint(): EventMint {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}

export const EventMint = {
  encode(message: EventMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseEventBurn(): EventBurn {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}

export const EventBurn = {
  encode(message: EventBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBurn>): EventBurn {
    const message = createBaseEventBurn();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};