Package.describe({
    name: 'slayerokk:jquery',
    version: '0.0.1',
    summary: 'Includes JQuery 3.2.1 in Meteor Project',
    git: 'https://github.com/slayerokk/meteor-jquery321.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.addFiles([
        'jquery-3.2.1.min.js'
    ], 'client');
});