export type UserProps = {
    id: number,
    name: string,
    avatar: string,
    createdAt: Date,
    isOpen: (open: boolean) => void
}

export type UserEditModalProps = {
    open: boolean,
    isOpen: (open: boolean) => void
}