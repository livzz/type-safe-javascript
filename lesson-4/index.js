const Safe = require('crocks/Maybe/safe')
const prop = require('crocks/Maybe/prop')
const Identity = require('crocks/Identity')
const { compose, isNil, not, pluck } = require('ramda')
const { inc, log } = require('../utils')

const isNotNill = compose(
  not,
  isNil
)

const qs = { page: 3, pageSize: 10, totalPage: 203 }
const defaultValue = op => op.map(Identity).option(1)
const safePage = Safe(isNotNill)
// log(safePage(qs.page))

const operation = compose(
  log,
  defaultValue,
  prop('page')
)

operation(qs)
