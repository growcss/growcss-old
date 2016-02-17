#!/usr/bin/env php
<?php

$sourceDirectory   = __DIR__.'/../src/components';
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

    $componentsDir = $dir.'/'.$name;
    $readme  = $componentsDir.'/README.md';

    if (!file_exists($readme)) {

        // create folder
        mkdir($componentsDir.'/demo');
        mkdir($componentsDir.'/test');
        mkdir($componentsDir.'/css');
        mkdir($componentsDir.'/js');

        $package = strtolower($vendor.'/'.$name);
        // get template
        $content = file_get_contents($readmeTemplate);
        // replace variables in template
        $replacements = [
            '@name'    => $name,
            '@vendor'  => $vendor,
            '@package' => $package,
        ];

        $output = str_replace(array_keys($replacements), array_values($replacements), $content);

        // write package readme
        file_put_contents($readme, $output);
        ile_put_contents($bowerTemplate, $output);

        // copy needed files
        copy($file, $componentsDir.'/index.html');

        echo "Created README.md in {$package}</br>\r\n";
    }
}
