class Class {
  // Element setup goes here instead of created() callback
  beforeRegister() {
    this.is = '@name';
    this.properties = {};
  }

  // Define other lifecycle methods as you need
  registered() {}
  created() {}
  ready() {}
  factoryImpl() {}
  attached() {}
  detached() {}
  attributChanged() {}
}

/*eslint-disable */
Polymer(Class);
/*eslint-enable */
