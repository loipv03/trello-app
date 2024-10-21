export interface IUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    avatar?: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ISignup extends Pick<IUser, 'name' | 'email' | 'password'> {
    confirmPassword: string;
}

export interface ILogin extends Pick<IUser, 'password'> {
    email: string
}