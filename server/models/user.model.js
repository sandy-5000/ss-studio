import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z ]+$/.test(v)
      },
    },
  },
  email: {
    type: String,
    required: true,
    maxlength: 320,
    // validate: {
    //   validator: function (v) {
    //     return /^[a-zA-Z0-9\.]{1,26}@gmail.com$/.test(v)
    //   },
    // },
  },
  phone_no: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v)
      },
    },
  },
  passwd: {
    type: String,
    required: true,
  },
})

userSchema.index({ email: 1 }, { unique: true })
userSchema.index({ name: 1 })

export default mongoose.model('Users', userSchema)
