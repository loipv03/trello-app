export interface IWorkspace {
    _id: string;
    name: string;
    description: string;
    boards: string[];
    members: Member[];
    createdAt: string;
    updatedAt: string;
}

export interface IOneIWorkspace extends Omit<IWorkspace, 'boards'> {
    boards: IBoard[];
}

interface IBoard {
    _id: string;
    name: string;
    description?: string;
    workspaceId: string;
    members: {
        userId: string;
        role: 'admin' | 'member' | 'viewer';
    }[];
    lists: string[];
    cards: string[];
}

interface Member {
    userId: string;
    role: 'admin' | 'member' | 'viewer';
}
