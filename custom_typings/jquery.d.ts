
//https://stackoverflow.com/a/18114282/1240322
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