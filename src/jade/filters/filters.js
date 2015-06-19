var jadefilters = module.exports = {};

jadefilters.htmlmarkup = function(block) {
    block = this.jade.render(block, {pretty: true});

    if (block.substring(0, 1) !== '<') {
        block = block.substring(1); // remove first line break
    }

    block = block
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/#/g, '&#35;');

    return block;
};