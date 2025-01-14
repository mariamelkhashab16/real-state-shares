const {  Project } = require('../models');


const listAllProjects = async (req, res) => {
    try {
      const projects = await Project.findAll();
      res.status(200).json(projects);  
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


  module.exports = {
    listAllProjects
  };
  