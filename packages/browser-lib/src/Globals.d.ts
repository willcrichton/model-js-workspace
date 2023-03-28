declare module "*?file" {
    const url: string;
    export default url;
}

declare module "*.module.scss" {
    const classes: { [cls: string]: string };
    export default classes;
}
