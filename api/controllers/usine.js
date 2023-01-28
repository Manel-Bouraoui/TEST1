export const createUsine = async (req, res, next) => {
    const newUsine = new Usine(req.body);
  
    try {
      const savedUsine = await newUsine.save();
      res.status(200).json(savedUsine);
    } catch (err) {
      next(err);
    }
  };
  export const updateUsine = async (req, res, next) => {
    try {
      const updatedUsine = await Usine.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUsine);
    } catch (err) {
      next(err);
    }
  };
  export const deleteUsine = async (req, res, next) => {
    try {
      await Usine.findByIdAndDelete(req.params.id);
      res.status(200).json("Usine has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  export const getUsine = async (req, res, next) => {
    try {
      const Usine = await Usine.findById(req.params.id);
      res.status(200).json(Usine);
    } catch (err) {
      next(err);
    }
  };
  export const getUsines = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const Usines = await Usine.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(Usines);
    } catch (err) {
      next(err);
    }
  };