'use strict';

/**
 * Test.js controller
 *
 * @description: A set of functions called "actions" of the `test` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    if (strapi.config.environment === 'test') {
      const users = await strapi.plugins['users-permissions'].services.user.fetchAll()
      const reqs = users.map(u => {
          return strapi.plugins['users-permissions'].services.user.remove({ id: u.id })
      })
      await Promise.all(reqs)
      // Send 200 `ok`
      ctx.send({ message: 'Database reseted!' });
    } else {
      ctx.send({ message: 'Database can only be reseted on test mode' });
    }
  }
};
