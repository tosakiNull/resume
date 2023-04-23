export type ProjectType = {
    [key: string]: number;
}

export type CardData = {
    id: number;
    name: string;
    alias: string;
    type: ProjectType.Vue,
    description: string;
    img: string;
};
