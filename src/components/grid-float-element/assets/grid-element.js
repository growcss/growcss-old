class GridElement {
  beforeRegister () {
      this.is = 'grid-float-element';

      // @WAITING for full es2015 support
      // this.properties = {
      //     'log': {
      //         type: Boolean,
      //         value: false
      //     }
      // };

      // this.behaviors = [
      //   this.IronResizableBehavior
      // ];

      // this.listeners = {
      //     'iron-resize': '_onResize'
      // };
  }

  ready () {
      this._onResize = function (event) {
          var newWidth = window.innerWidth;
          var screenFormat = this.getScreenFormat(newWidth);

          if (this.log) {
              console.log('width : ' + newWidth);
          }

          if (this.log) {
              console.log('screenFormat = ' + screenFormat);
          }
      };

      this.getScreenFormat = function (newWidth) {
          if (newWidth <= 640) {
              return 'small';
          } else if (newWidth <= 1024) {
              return 'medium';
          } else if (newWidth <= 1200) {
              return 'large';
          } else if (newWidth <= 1440) {
              return 'xlarge';
          } else {
              return 'xxlarge';
          }
      };
  }

  attached () {
      // this.async(this.notifyResize, 1);
  }
}

Polymer(GridElement);
