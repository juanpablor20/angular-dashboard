export class LoginBase<T> {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: {key: string; value: string}[];
    constructor(
      options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: {key: string; value: string}[];
      } = {},
    ) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || [];
    }
  }
export class TextboxQuestion extends LoginBase<string> {
  override controlType = 'textbox';
}

export class DropdownQuestion extends LoginBase<string> {
  override controlType = 'dropdown';
}