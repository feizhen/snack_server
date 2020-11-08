import db from "../../utils/db";
/**
 * get all snacks from db
 * @param {Request} req
 * @param {Response} res
 */
export const getSnack = async (req, res) => {
  try {
    const snacks = await db.getSnacks();
    res.json({ result: { data: snacks, total: snacks.length } });
  } catch (error) {
    res.status(500).send();
  }
};

/**
 * get particular snack by id
 * @param {*} req
 * @param {*} res
 */
export const getSnackById = async (req, res) => {};

/**
 * create a snack
 * @param {*} req
 * @param {*} res
 */
export const createSnack = async (req, res) => {};

/**
 * update a snack by id
 * @param {*} req
 * @param {*} res
 */
export const updateSnackById = async (req, res) => {};

/**
 * delete a snack by id
 * @param {*} req
 * @param {*} res
 */
export const deleteSnackById = async (req, res) => {};
