import bcrypt from 'bcrypt'

const Hash = async (string) => await bcrypt.hash(string, config.SALT)

export { Hash }
