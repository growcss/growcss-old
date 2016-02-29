#!/usr/bin/env php
<?php

function create($argv) {
  $args = [];

  foreach ($argv as $arg) {
    if (ereg('--([^=]+)=(.*)', $arg, $reg)) {
      $args[$reg[1]] = $reg[2];
    } elseif(ereg('-([a-zA-Z0-9])', $arg, $reg)) {
          $args[$reg[1]] = 'true';
      }
  }

  if (isset($args['project']) && is_dir(__DIR__.'/'.$args['project'])) {
    $sourceDirectory = __DIR__.'/../src/'.$args['project'];

    if (!is_dir($sourceDirectory)) {
      echo 'Source folder not found "'.$sourceDirectory.'" dont exist.';
    }

    $readmeTemplate      = __DIR__.'/'.$args['project'].'/README.md';
    $indexTemplate       = __DIR__.'/behaviors-components-shared-files/index.html';
    $demoTemplate        = __DIR__.'/'.$args['project'].'/example-demo-index.html';
    $testTemplate        = __DIR__.'/behaviors-components-shared-files/example-test-index.html';
    $testElementTemplate = __DIR__.'/behaviors-components-shared-files/example-test-element-index.html';
    $scriptTemplate      = __DIR__.'/'.$args['project'].'/example-script.js';
    $elementTemplate     = __DIR__.'/'.$args['project'].'/example-element.html';
    $gitignoreTemplate   = __DIR__.'/behaviors-components-shared-files/.gitignore';
    $bowerTemplate       = __DIR__.'/'.$args['project'].'/bower.json';

    $dirs = glob($sourceDirectory.'/*', GLOB_ONLYDIR);

    if (is_array($dirs)) {
      foreach ($dirs as $dir) {
          // extract part of the folder name
          $parts = explode('/', $dir);
          // set variables
          list($vendor, $name) = array_slice($parts, - 2);

          $componentsDir = $dir.'/';

          // create folders
          $demoFolder = $componentsDir.'/demo';
          if (!is_dir($demoFolder)) {
            mkdir($demoFolder);
          }

          $testFolder = $componentsDir.'/test';
          if (!is_dir($testFolder)) {
            mkdir($testFolder);
          }

          $assetsFolder = $componentsDir.'/assets';
          if (!is_dir($assetsFolder)) {
            mkdir($assetsFolder);
          }

          $package = strtolower($vendor.'/'.$name);

          // get template
          $readmeContent              = file_get_contents($readmeTemplate);
          $bowerContent               = file_get_contents($bowerTemplate);
          $elementTemplateContent     = file_get_contents($elementTemplate);
          $scriptTemplateContent      = file_get_contents($scriptTemplate);
          $testTemplateContent        = file_get_contents($testTemplate);
          $testElementTemplateContent = file_get_contents($testElementTemplate);
          $demoTemplateContent        = file_get_contents($demoTemplate);

          // replace variables in template
          $replacements = [
              '@name'    => $name,
              '@vendor'  => $vendor,
              '@package' => $package,
          ];

          $readmeOutput              = str_replace(array_keys($replacements), array_values($replacements), $readmeContent);
          $bowerOutput               = str_replace(array_keys($replacements), array_values($replacements), $bowerContent);
          $elementTemplateOutput     = str_replace(array_keys($replacements), array_values($replacements), $elementTemplateContent);
          $scriptTemplateOutput      = str_replace(array_keys($replacements), array_values($replacements), $scriptTemplateContent);
          $testTemplateOutput        = str_replace(array_keys($replacements), array_values($replacements), $testTemplateContent);
          $testElementTemplateOutput = str_replace(array_keys($replacements), array_values($replacements), $testElementTemplateContent);
          $demoTemplateOutput        = str_replace(array_keys($replacements), array_values($replacements), $demoTemplateContent);

          // create needed files

          $readme = $componentsDir.'/README.md';
          if (!is_file($readme)) {
            file_put_contents($readme, $readmeOutput);
          }

          $bowerFile = $componentsDir.'/bower.json';
          if (!is_file($bowerFile)) {
            file_put_contents($bowerFile, $bowerOutput);
          }

          $elementFile = $componentsDir.'/'.$name.'.html';
          if (!is_file($elementFile)) {
            file_put_contents($elementFile, $elementTemplateOutput);
          }

          $cssFile = $componentsDir.'/assets/'.$name.'.css';
          if (!is_file($cssFile) && $args['project'] !== 'behaviors') {
            file_put_contents($cssFile, '');
          }

          $jsFile = $componentsDir.'/assets/'.$name.'.js';
          if (!is_file($jsFile)) {
            file_put_contents($jsFile, $scriptTemplateOutput);
          }

          $testIndexFile = $componentsDir.'/test/index.html';
          if (!is_file($testIndexFile)) {
            file_put_contents($testIndexFile, $testTemplateOutput);
          }

          $testElementFile = $componentsDir.'/test/'.$name.'-test.html';
          if (!is_file($testElementFile)) {
            file_put_contents($testElementFile, $testElementTemplateOutput);
          }

          $demoIndexFile = $componentsDir.'/demo/index.html';
          if (!is_file($demoIndexFile)) {
            file_put_contents($demoIndexFile, $demoTemplateOutput);
          }

          // copy needed files
          $indexFile = $componentsDir.'/index.html';
          if (!is_file($indexFile)) {
            copy($indexTemplate, $indexFile);
          }

          echo "{$package} created.\r\n";
      }
    }
  } else {
    echo 'The project you like to create was not found.';
  }
}

create($argv);
