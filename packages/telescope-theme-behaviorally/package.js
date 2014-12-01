Package.describe({
  summary: "Telescope behaviorally theme",
  version: '0.1.0',
  name: "telescope-theme-behaviorally"
});

Package.onUse(function (api) {

  api.use(['telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/screen.css',
    ], ['client']);

    api.use([
      'templating'
      ], ['client']);

      api.use([
        'telescope-lib',
        'telescope-base',
        'iron:router'
        ], ['client', 'server']);

        api.add_files([
          'lib/client/templates/about_page.html',
          'lib/client/templates/about_link.html',
          'lib/client/about.js'
          ], ['client']);
  });
