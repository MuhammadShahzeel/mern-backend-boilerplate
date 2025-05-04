import Resource from "../models/resource.model.js";

// GET /api/resources
export const getResources = async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
};

// POST /api/resources
export const createResource = async (req, res) => {
  const resource = new Resource(req.body);
  const saved = await resource.save();
  res.status(201).json(saved);
};
