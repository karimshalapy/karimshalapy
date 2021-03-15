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
export interface IJobsDetails {
    companyName: string,
    companyUrl: string,
    jobTitle: string,
    range: string,
    detailsList: string[]
}
export interface IAllAppData {
    projects: IProjectData[],
    otherProjects: IProjectContent[],
    jobsDetails: IJobListDetails[]
}
