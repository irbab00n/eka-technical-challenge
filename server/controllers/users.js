const User = require('../../database/models/users');

module.exports.updateFormOne = (req, res) => {
  User.where({username: req.body.updates.username}).fetch()
      .then(profileByUsername => {
        if (!profileByUsername) {
          User.where({email: req.body.updates.email}).fetch()
            .then(profileByEmail => {
              if (!profileByEmail) {
                User.forge(req.body.updates).save()
                  .then(profile => {
                    res.status(201).send(profile);
                  });
              } else {
                res.sendStatus(403);
              }
            })
        } else {
          res.sendStatus(403);
        }
      });
};

module.exports.update = (req, res) => {
  User.where({id: req.body.id}).fetch()
      .then(profile => {
        return profile.save(req.body.updates, { method: 'update' });
      })
      .then(profile => {
        res.status(201).send(profile);
      })
};