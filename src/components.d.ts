/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface SelectPrevisaoOndas {}
}

declare global {


  interface HTMLSelectPrevisaoOndasElement extends Components.SelectPrevisaoOndas, HTMLStencilElement {}
  var HTMLSelectPrevisaoOndasElement: {
    prototype: HTMLSelectPrevisaoOndasElement;
    new (): HTMLSelectPrevisaoOndasElement;
  };
  interface HTMLElementTagNameMap {
    'select-previsao-ondas': HTMLSelectPrevisaoOndasElement;
  }
}

declare namespace LocalJSX {
  interface SelectPrevisaoOndas {
    'onChange'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'select-previsao-ondas': SelectPrevisaoOndas;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'select-previsao-ondas': LocalJSX.SelectPrevisaoOndas & JSXBase.HTMLAttributes<HTMLSelectPrevisaoOndasElement>;
    }
  }
}


