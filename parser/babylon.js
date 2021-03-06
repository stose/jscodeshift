/*
 *  Copyright (c) 2015-present, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

const babylon = require('@babel/parser');

const defaultOptions = {
  sourceType: 'module',
  allowImportExportEverywhere: true,
  allowReturnOutsideFunction: true,
  startLine: 1,
  tokens: true,
  plugins: [
    ['flow', {all: true}],
    'flowComments',
    'jsx',

    'asyncGenerators',
    'bigInt',
    'classProperties',
    'classPrivateProperties',
    'classPrivateMethods',
    ['decorators', {decoratorsBeforeExport: false}],
    'doExpressions',
    'dynamicImport',
    'exportDefaultFrom',
    'exportNamespaceFrom',
    'functionBind',
    'functionSent',
    'importMeta',
    'logicalAssignment',
    'nullishCoalescingOperator',
    'numericSeparator',
    'objectRestSpread',
    'optionalCatchBinding',
    'optionalChaining',
    ['pipelineOperator', {proposal: 'minimal'}],
    'throwExpressions',
  ],
};

/**
 * Wrapper to set default options
 */
module.exports = function(options=defaultOptions) {
  return {
    parse(code) {
      return babylon.parse(code, options);
    },
  };
};
