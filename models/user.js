const thinky = require('../lib/thinky.js');
const r = thinky.r;
const type = thinky.type;
const gravatar = require('gravatar');
//const uuid = require('uuid');

const User = thinky.createModel("User", {
  id: type.string(),
  createdAt: type.date().default(r.now()),
  firstName: type.string(),
  lastName: type.string(),
  username: type.string().required(),
  email: type.string().required(),
  password: type.string().required(),
  gravatar: type.string()
  //validationID: type.string(),
  //validatedAccount: type.boolean().default(false),
  //validationEmailSent: type.boolean().default(false),
  //accountLevel: type.number().default(0)
});

User.pre('save', ()=> {
  const user = this;
  user.gravitar = this.getGravatar();
});

User.define('getGravatar', ()=> {
  return gravatar.url(this.email, {s: '200', r: 'pg', d: '404'});
});