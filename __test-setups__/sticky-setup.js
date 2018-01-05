import { JSDOM } from 'jsdom';

const exposedProperties = ['window', 'navigator', 'document'];

global.document = new JSDOM('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

const mount = document.createElement('div');
mount.id = 'mount';
document.body.appendChild(mount);
