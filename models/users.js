const User = require('../lib/mongo').User

module.exports = {
	create(user) {
		return User.create(user).exec()
	},
	// 通过用户名获取用户信息
	getUserByName(name) {
		return User.findOne({ name })
			.addCreatedAt()
			.exec()
	}
}
