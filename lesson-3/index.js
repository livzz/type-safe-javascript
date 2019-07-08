const { dbl, inc, toUpper, log } = require('../utils')
const Maybe = require('crocks/Maybe')
const Safe = require('crocks/Maybe/safe')
const { compose, liftA2 } = require('crocks/helpers')
const { isString, isNumber } = require('crocks/predicates')
const Identity = require('crocks/Identity')

const incrementDouble = n => {
  const incremented = inc(n)
  return dbl(incremented)
}

const safeNum = Safe(isNumber)
const defaultValue = op => op.map(Identity).option(0)
const appliedComputation = computation => op => op.map(compose(...computation))

const operate = compose(
  log,
  defaultValue,
  appliedComputation([incrementDouble, inc, dbl]),
  safeNum
)

operate(1)
