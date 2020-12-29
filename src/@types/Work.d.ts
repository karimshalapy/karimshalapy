export interface IProjectContent {
    overline: string;
    title: string;
    description: string;
    techList: string[];
    projectLinks: {
        github: string;
        live: string;
    };
};
export interface IProjectImage {
    src: string;
    alt: string;
};
export interface IProjectData {
    projectContent: IProjectContent,
    projectImage: IProjectImage
}