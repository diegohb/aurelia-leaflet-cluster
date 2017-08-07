/* reference
> https://stackoverflow.com/a/21532135/1240322
> https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html
*/

declare interface IMaterial {
  (options?: any): JQuery
  init(): any;
}

declare interface JQueryStatic<TElement extends Node = HTMLElement> {
  material: IMaterial;
}

declare interface JQueryStatic {
  material: IMaterial;
}

