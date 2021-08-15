export interface IAbout {
    medias?: IAboutMedia[];
    hobbies?: IAboutHobby[];
    paras?: IAboutPara[];
}
export interface IAboutPara{
    description :string
}
export interface IAboutMedia {
    icon: string; // Use the official names of Brand Icons (https://www.w3schools.com/icons/fontawesome_icons_brand.asp)
    title: string;
    http: string;
}
export interface IAboutHobby {
    icon: string; // Use the official names of Brand Icons (https://www.w3schools.com/icons/fontawesome_icons_brand.asp)
    title: string;
}