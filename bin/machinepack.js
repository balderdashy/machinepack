#!/usr/bin/env node

/**
 * Module dependencies
 */

var program = require('commander');


program
.version(require('../package.json').version)
.usage('[options]')
.command('ls', 'list machines')
.command('add', 'add a new machine')
.command('rm [identity]', 'delete existing machine')
.command('mv [originalIdentity] <newIdentity>', 'rename machine')
.parse(process.argv);


program.usage();
