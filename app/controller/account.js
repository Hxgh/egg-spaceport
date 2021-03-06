'use strict';

const Controller = require('egg').Controller;

class AccountController extends Controller {
  async login() {
    const userInfo = {
      name: '至尊宝',
      id: '9527'
    };
    // 实际开发中, 这个地方的数据应该从数据库中查询出来
    this.ctx.body = { code: 200, success: true, data: userInfo, msg: 'ok' };
  }
  async logout() {
    // 实际开发中, 这个地方的数据应该从数据库中查询出来
    this.ctx.body = { code: 200, success: true, data: 'logout', msg: 'ok' };
  }
}

module.exports = AccountController;
