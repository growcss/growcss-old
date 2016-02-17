#!/usr/bin/env php
<?php

$sourceDirectory   = __DIR__.'/../../src/components';
$readmeTemplate    = __DIR__.'/README.md';
$indexTemplate     = __DIR__.'/index.html';
$gitignoreTemplate = __DIR__.'/.gitignore';
$bowerTemplate     = __DIR__.'/bower.json';

$dirs = glob($sourceDirectory.'/*', GLOB_ONLYDIR);

foreach ($dirs as $dir) {
    // extract part of the folder name
    $parts = explode('/', $dir);
    // set variables
    list($vendor, $name) = array_slice($parts, - 2);

    $componentsDir = $dir.'/';
    $readme        = $componentsDir.'/README.md';

    if (!file_exists($readme)) {

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

        $cssFolder = $assetsFolder.'/css';
        if (!is_dir($cssFolder)) {
          mkdir($cssFolder);
        }

        $jsFolder = $assetsFolder.'/js';
        if (!is_dir($jsFolder)) {
          mkdir($jsFolder);
        }

        $package = strtolower($vendor.'/'.$name);

        // get template
        $readmeContent = file_get_contents($readmeTemplate);
        $bowerContent  = file_get_contents($bowerTemplate);

        // replace variables in template
        $replacements = [
            '@name'    => $name,
            '@vendor'  => $vendor,
            '@package' => $package,
        ];

        $readmeOutput = str_replace(array_keys($replacements), array_values($replacements), $readmeContent);
        $bowerOutput  = str_replace(array_keys($replacements), array_values($replacements), $bowerContent);

        // create readme and bower.json
        file_put_contents($readme, $readmeOutput);
        file_put_contents($componentsDir.'/bower.json', $bowerOutput);

        // create empty files
        file_put_contents($cssFolder.'/'.$name.'.css', '');
        file_put_contents($jsFolder.'/'.$name.'.js', '');
        file_put_contents($componentsDir.'/'.$name.'.html', '');

        // copy needed files
        $indexFile = $componentsDir.'/index.html';
        if (!is_file($indexFile)) {
          copy($indexTemplate, $indexFile);
        }

        $testIndexFile = $componentsDir.'/test/index.html';
        if (!is_file($testIndexFile)) {
          copy($indexTemplate, $testIndexFile);
        }

        $demoIndexFile = $componentsDir.'/demo/index.html';
        if (!is_file($demoIndexFile)) {
          copy($indexTemplate, $demoIndexFile);
        }

        $gitignoreFile = $componentsDir.'/.gitignore';
        if (!is_file($gitignoreFile)) {
          copy($gitignoreTemplate, $gitignoreFile);
        }

        echo "Created {$package}\r\n";
    }
}
