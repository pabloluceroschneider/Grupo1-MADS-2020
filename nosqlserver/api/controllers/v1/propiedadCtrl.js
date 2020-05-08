const get = (req,res) => {
    res.status(200).send({msg:"Ok get"})
};

const create = (req,res) => {
    res.status(200).send({msg:"Ok post"})
};

module.exports = { get, create };