export type UserProps = {
    id: number,
    name: string,
    avatar: string,
    createdAt: Date,
};

export type UserCardProps = UserProps & {
    onClick: () => void;
};