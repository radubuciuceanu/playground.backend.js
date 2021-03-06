import { Flow } from 'domain'

const validateAccess = () => Flow.ask()
  .chain(context => context.validateAccess())

const validateInput = () => Flow.ask()
  .chain(context => context.validateInput())

const storeInsideDatabase = () => Flow.ask()
  .chain(context => context.storeInput())

const notify = () => Flow.ask()
  .map(() => console.log("Done."))

const result = () => Flow.ask()
  .map(context => context.input)

export const createRecord = () => Flow.ask()
  .chain(validateAccess)
  .chain(validateInput)
  .chain(storeInsideDatabase)
  .chain(notify)
  .chain(result)
