import bcrypt from 'bcrypt'

const Hash = async (string) => await bcrypt.hash(string, Number(config.SALT))
const IsMatch = async (inputString, hash) => await bcrypt.compare(inputString, hash)

export { Hash, IsMatch }
