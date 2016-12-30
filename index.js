#!/usr/bin/env node

'use strict';

const Model = require('adelia').Model;

Model.find(1)
	.then(model => model.get('name'))
	.then(name => console.log(`Hello ${name}! 🐧`))
	.catch(e => console.error(e));
