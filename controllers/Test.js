'use strict';

/**
 * Test.js controller
 *
 * @description: A set of functions called "actions" of the `test` plugin.
 */
const offerings = [
  {
    "name": "Mcdaniel Massey",
    "description": "Nostrud quis in veniam commodo tempor sunt sunt in commodo consectetur excepteur sit. Aute sunt Lorem duis eiusmod amet eu cupidatat minim. Voluptate aute est exercitation et. Esse ex incididunt dolore est eiusmod et laborum aliqua nostrud do sunt."
  },
  {
    "name": "Maribel Jordan",
    "description": "Culpa nostrud aliquip aliquip do adipisicing. Eiusmod esse sint magna ea. Laborum quis fugiat sint labore esse nulla mollit labore sit sunt culpa."
  },
  {
    "name": "Juarez Pickett",
    "description": "Non dolore eiusmod ex aliqua est laborum. Velit eiusmod incididunt proident laboris amet labore occaecat anim exercitation. Ipsum deserunt dolor et minim laborum incididunt ea dolore."
  },
  {
    "name": "Susie Higgins",
    "description": "Lorem esse consequat excepteur ad qui non reprehenderit Lorem ipsum cupidatat amet ullamco excepteur. Veniam sit elit officia magna tempor veniam ea id dolor sunt non minim aute amet. Ipsum consectetur adipisicing nisi deserunt ullamco et. Eu esse cupidatat sunt non nisi fugiat culpa. Lorem enim est ad incididunt velit veniam ipsum ex ullamco nostrud. Aliquip sit exercitation qui enim duis est ut in enim quis excepteur."
  },
  {
    "name": "Kari Garza",
    "description": "Ad minim ex dolore voluptate. Qui proident velit irure mollit reprehenderit nisi est. Tempor id aute cillum qui eu ut adipisicing veniam consequat irure duis consectetur do cillum. Laboris elit nostrud id id cupidatat non sit voluptate id amet nisi occaecat nostrud."
  },
  {
    "name": "Fernandez Herrera",
    "description": "Reprehenderit velit aliqua anim commodo amet ad aute. Voluptate proident culpa eu in adipisicing nostrud mollit magna consequat ea reprehenderit nostrud minim sint. Excepteur occaecat quis cupidatat qui mollit incididunt ullamco officia."
  },
  {
    "name": "Shannon Leon",
    "description": "Pariatur officia elit exercitation elit exercitation. Anim occaecat occaecat ut officia aliquip irure nulla do. Dolore culpa cillum cupidatat pariatur."
  },
  {
    "name": "Earlene Oneill",
    "description": "Minim excepteur pariatur ullamco voluptate deserunt ut occaecat consectetur ullamco. Tempor aliqua dolore consequat sit non sunt ipsum consectetur irure consequat duis id. Elit commodo voluptate qui in minim. Ex reprehenderit tempor quis enim consequat amet elit dolor minim consectetur nulla excepteur anim."
  },
  {
    "name": "Kerry Beard",
    "description": "Qui aliquip adipisicing consequat et fugiat aute nostrud consequat nulla esse amet. Adipisicing ea amet officia excepteur incididunt nisi ea aliquip nulla qui do. Laboris voluptate quis ullamco ad laborum qui id irure reprehenderit officia aute dolor. Et reprehenderit labore qui veniam dolor elit velit excepteur magna esse proident tempor. Do non nostrud sunt elit laboris. Consectetur proident ex minim voluptate anim. Tempor magna proident occaecat tempor dolor Lorem sit et Lorem dolore mollit occaecat consequat non."
  },
  {
    "name": "Shepard Duncan",
    "description": "Qui Lorem sit commodo irure exercitation commodo nulla occaecat veniam pariatur tempor irure. Elit elit sunt id amet sunt adipisicing. Quis occaecat ad et culpa tempor excepteur duis laborum eiusmod occaecat exercitation sint quis nisi. Voluptate adipisicing deserunt magna eu proident occaecat consequat."
  },
  {
    "name": "Marylou Dotson",
    "description": "Nostrud consectetur irure anim labore dolor aliquip exercitation aliquip occaecat consequat. Aute in laborum eiusmod culpa qui. Consequat velit proident fugiat esse minim aliqua adipisicing quis amet. Magna mollit eu pariatur in pariatur non reprehenderit aute proident ipsum excepteur ad."
  },
  {
    "name": "Blevins Williams",
    "description": "Fugiat reprehenderit enim anim nisi nostrud velit proident pariatur reprehenderit voluptate ea veniam. Reprehenderit nostrud occaecat magna aliqua laboris aliqua anim exercitation aliqua consectetur et amet aute veniam. Eiusmod consectetur dolor mollit culpa voluptate aute aliquip enim consequat exercitation commodo. Est in non sunt ea minim minim amet dolore aliqua do. Et veniam aliquip amet in. Excepteur sint duis commodo id ipsum incididunt. Adipisicing labore aliquip adipisicing do ut."
  },
  {
    "name": "Schwartz Walton",
    "description": "Magna quis velit aliqua dolore ullamco consequat id consequat est exercitation ullamco officia qui quis. Anim cillum non occaecat cupidatat et aliqua enim culpa. Esse ex nisi aliquip eu voluptate id minim cillum. Ut consequat sunt labore proident reprehenderit aute occaecat ex aliquip eu. Laboris irure laborum qui est mollit officia adipisicing nostrud commodo occaecat sit mollit anim. Laborum consectetur nostrud nulla exercitation amet et. Adipisicing eiusmod sunt ut duis eu."
  },
  {
    "name": "Stevens Stone",
    "description": "Minim nisi mollit laborum dolor laborum exercitation sit ad ullamco voluptate quis ut. Non irure ullamco eu magna sint aliquip nisi aliqua in aute nostrud. Qui dolor ex tempor dolore sit est officia minim. Dolor qui sunt irure voluptate elit labore id minim ipsum non."
  },
  {
    "name": "Cherie Sellers",
    "description": "Irure aute tempor Lorem ipsum ut cillum laborum mollit occaecat labore duis. Magna pariatur dolore sit pariatur ex dolor aliquip dolore consequat commodo minim nisi. Aliquip officia duis minim quis ut culpa ullamco officia labore aliquip deserunt reprehenderit esse culpa. Ullamco adipisicing commodo est tempor excepteur officia est laborum laborum ullamco. Non fugiat veniam tempor magna ipsum non veniam eiusmod. Voluptate anim dolore velit ex adipisicing consectetur ullamco amet id anim."
  }
]

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  resetDB: async (ctx) => {
    // Add your own logic here.

    if (strapi.config.environment === 'test') {
      const users = await strapi.plugins['users-permissions'].services.user.fetchAll()
      const reqs = users.map(u => {
        return strapi.plugins['users-permissions'].services.user.remove({ id: u.id })
      })
      await Promise.all(reqs)

      const espertUser = {
        username: 'nick',
        email: 'nick@mail.com',
        password: 'nick123',
        role: 3,
        provider: 'local'
      }

      espertUser.password = await strapi.plugins['users-permissions'].services.user.hashPassword(espertUser);
      espertUser.confirmed = true;

      await strapi
        .query('user', 'users-permissions')
        .create(espertUser);

      const clientUser = {
        username: 'maria',
        email: 'maria@mail.com',
        password: 'maria123',
        role: 4,
        provider: 'local'
      }

      clientUser.password = await strapi.plugins['users-permissions'].services.user.hashPassword(clientUser);
      clientUser.confirmed = true;

      await strapi
        .query('user', 'users-permissions')
        .create(clientUser);

      const offerings = await strapi.services.offerings.find()
      const offeringsReqs = offerings.map(u => {
        return strapi.services.offerings.delete({ id: u.id })
      })
      await Promise.all(offeringsReqs)

      // Send 200 `ok`
      ctx.send({ message: 'Database reseted!' });
    } else {
      ctx.send({ message: 'Database can only be reseted on test mode' });
    }
  },
  seedOfferings: async (ctx) => {
    // Add your own logic here.

    if (strapi.config.environment === 'test') {

      const expert = await strapi.plugins['users-permissions'].services.user.fetch({ username: 'nick' })

      offerings.map(o => {
        strapi.services.offerings.create({ ...o, user: expert.id })
      })

      // Send 200 `ok`
      ctx.send({ message: 'Database reseted!' });
    } else {
      ctx.send({ message: 'App is not in test mode' });
    }
  }
};
