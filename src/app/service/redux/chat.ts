export class Chat {
    class: string = '';
    avatar: string = '';
    msg: string = '';
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }