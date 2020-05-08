const get = (req,res) => {
    console.log('req.body', req.body);
    res.status(200).send({msg:"Ok get"})
};

const create = (req,res) => {
    console.log('req.body', req.body);
    res.status(200).send({msg:"Ok post"})
};

module.exports = { get, create };