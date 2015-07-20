Package.describe({
  name: 'noxu:weather-icons',
  version: '1.3.2',
  summary: 'Weather Icons for MeteorJS',
  git: 'https://github.com/Noxu/weather-icons.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('css/weather-icons.css', 'client');
  api.addFiles([
    'font/weathericons-regular-webfont.eot',
    'font/weathericons-regular-webfont.woff',
    'font/weathericons-regular-webfont.ttf',
    'font/weathericons-regular-webfont.svg'
  ], 'client', { isAsset: true });
  
});