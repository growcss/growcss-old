'use strict';

class GcAvatar {
  // Element setup goes here instead of created() callback
  beforeRegister() {
    this.is = 'gc-ui-avatar';
    this.properties = {
      provider: String,
      email: String,
      'user-id': String,
      size: {
        type: String,
        value: '80',
      },
      // Maximum rating (inclusive) [g , pg , r , x]
      rating: {
        type: String,
        value: 'g',
      },
      // Default imageset to use [404 , mm , identicon , monsterid , wavatar]
      imageSet: {
        type: String,
        value: 'mm',
      },
    };
  }

  ready() {
    if (this.size === 'mini') {
      this.imageSize = '24';
    } else if (this.size === 'normal') {
      this.imageSize = '48';
    } else if (this.size === 'bigger') {
      this.imageSize = '80';
    } else if (this.size === 'original') {
      const image = this.querySelector('img');
      image.setAttribute('width', '100%');
      image.setAttribute('height', '100%');
    } else {
      this.imageSize = this.size;
    }
  }

  attached() {
    /*eslint-disable */
    const defaultImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABQAFADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAEGBAUHAgP/xAAtEAABAwIEBAYBBQAAAAAAAAABAAIDBBEFITGBEkFRYQYTQnGRwVIiMqGx8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDreSlN03QRzU2TdN0CybL7QUdTOLwwSvb1a0kfOimejqYBeaCVg6uabfOiD4bJsm6boGybJum6AiIgK0YBgrPLbU1jeJzs2MIyA6nutBhcAqcRp4nD9Ln5jsM7fC6H7IAAAAFgAhAIsdFKIK1j2CsdE+po28L25uYBYO9h1VXXTVz3F4BTYlURNyaHZDoDnZBiIiICIiDMwaUQ4rTSO0D7Z8r5fa6DsuYjVXLAMVZVxMhncBUtyzP7+/ug3ibKEQTsqBjkomxape0i3Fw362AH0rLj2LMo4nRQuDqlwtYem/NUs63OpQSiIgbpui9QxvmlZHGCXuNgEH2oKOaun8uAX5ucdArfh2CUtGA4tEs35vGh7DksnC6JlBStiZm7VzralZqBum6Ig1OI4LS1gc4NEUx9bBqe45qoV9HNQz+XOLc2uGhXRFh4pRMr6V0T8natdbQoOf7puvU0b4ZXxyAh7TYheUBb/wAIUvmVMlQ4ZRjhb7nX/d1oFdPCkYZhLXfm9x+Db6QblETZAUKVCCVCnZQgqfi6l4KmOoaMpBwu9xp/H9Kvq5+Ko+PCXOPoe1w3NvtUxB//2Q==';
    /*eslint-enable */

    const image = this.querySelector('img');

    if ((this.email || this['user-id']) && this.provider === 'gravatar') {
      this.imageSrc = this.generateGravatar();
      image.setAttribute('class', 'gravatar');
    } else if (this['user-id'] && this.provider === 'facebook') {
      this.generateFacebook();
      image.setAttribute('class', 'facebook');
    } else if (this['user-id'] && this.provider === 'twitter') {
      this.imageSrc = this.generateTwitter();
      image.setAttribute('class', 'twitter');
    } else if (this['user-id'] && this.provider === 'skype') {
      this.imageSrc = this.generateSkype();
      image.setAttribute('class', 'skype');
    } else if (this['user-id'] && this.provider === 'google') {
      this.generateGoogle();
      image.setAttribute('class', 'google');
    } else if (this.image) {
      this.imageSrc = this.image;
      image.setAttribute('class', 'image');
    } else {
      this.imageSrc = defaultImage;
      image.setAttribute('class', 'default');
    }

    image.setAttribute('alt', this.alt ? this.alt : '');
  }

  attributeChanged() {
    // just do same thing if any of the arguments change
    this.attached();
  }

  generateGravatar() {
    const retina = this.retinaReady(this.size);
    const hash = this['user-id'] ? this['user-id'] : md5(this.email.trim().toLowerCase());
    const imageset = this.imageSet;
    const rating = this.rating;
    const proxy = window.location.protocol === 'https:' ? 'https://secure.' : '//';

    /*eslint-disable */
    return `${proxy}gravatar.com/avatar/${hash}.jpg?size=${retina}&d=${imageset}&r=${rating}`;
    /*eslint-enable */
  }

  generateFacebook() {
    const protocol = window.location.protocol;
    const id = this['user-id'];
    const size = this.retinaReady(this.size);
    let url = `${protocol}//graph.facebook.com/${id}/picture?redirect=false`;

    url += this.addQuerystringParameter(url, 'height') + size;
    url += this.addQuerystringParameter(url, 'width') + size;

    this.loadJSON(url, (data) => {
      const image = data.data.url;

      this.addImage(image);
    });
  }

  generateTwitter() {
    const protocol = window.location.protocol;
    const id = this['user-id'];
    const validSizes = ['mini', 'normal', 'bigger', 'original'];
    let url = `${protocol}//twitter.com/${id}/profile_image?size=`;

    if (validSizes.indexOf(this.size) !== -1) {
      url += this.size;
    } else {
      url += 'bigger';
    }

    return url;
  }

  generateSkype() {
    const protocol = window.location.protocol;
    const id = this['user-id'];
    const url = `${protocol}//api.skype.com/users/${id}/profile/avatar`;

    return url;
  }

  generateGoogle() {
    const protocol = window.location.protocol;
    const id = this['user-id'];
    const url = `${protocol}//picasaweb.google.com/data/entry/api/user/${id}?alt=json`;

    this.loadJSON(url, (data) => {
      let image;
      const size = this.retinaReady(this.size);

      image = data.entry.gphoto$thumbnail.$t;
      image = image.replace('s64', `s${size}`);

      this.addImage(image);
    });
  }

  retinaReady(size) {
    return window.devicePixelRatio > 1.5 ? 2 * size : size;
  }

  addQuerystringParameter(url, parameter) {
    return ((url.indexOf('?') === -1) ? `?${parameter}=` : `&${parameter}=`);
  }

  loadJSON(path, callback) {
    const httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          const data = JSON.parse(httpRequest.responseText);

          if (callback) {
            callback(data);
          }
        }
      }
    };

    httpRequest.open('GET', path, true);
    httpRequest.send();
  }

  addImage(image) {
    this.querySelector('img').src = image;
    this.fire('avatar-iframe-loaded', true);
  }
}

/*eslint-disable */
Polymer(GcAvatar);
/*eslint-enable */
