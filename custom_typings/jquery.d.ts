
//https://stackoverflow.com/a/18114282/1240322
export interface IMaterial {
    (): JQuery
    init(): any;
  }

  export interface JQueryStatic<TElement extends Node = HTMLElement> {
    material: IMaterial;
  }
  
  export interface JQueryStatic {
    material: IMaterial;
  }


declare namespace JQuery {
  
  export namespace material {
      export function init():any;
  }
}