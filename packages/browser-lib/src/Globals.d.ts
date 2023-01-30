declare module "*?file" {
  const url: string;
  export default url;
}

declare module "*.module.css" {
  const classes: {[cls: string]: string};
  export default classes;
}
