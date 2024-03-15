export type User = {
    name: string;
    id: string;
    chatIds: string[];
    profileImage: string;
};

export type Chat = {
    id: string;
    messageIds: string[];
    name:string
    memberIds: string[];
};


export type Message = {
    receiver: { id: string; name: string };
    sender: { id: string; name: string };
    id: string;
    timeStamp: string;
    content: string;
};
