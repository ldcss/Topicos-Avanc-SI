import { MessageChat } from "./MessageChat";

export interface MessageModel extends MessageChat {
    timeStamp: Date;
}