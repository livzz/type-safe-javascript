const { inc, log } = require('../utils')
const Maybe = require('crocks/Maybe')
const Safe = require('crocks/Maybe/safe')
const { isString, isNumber } = require('crocks/predicates')

const safeNumber = Safe(isNumber)
const input = safeNumber(2)
const input2 = safeNumber('2')
const result = input.map(inc)
const result2 = input2.map(inc)
log(input, result2)