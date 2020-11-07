import { Router } from "express";
import * as snackController from "./snack.controller";

const router = Router();

router
  .route("/")
  .get(snackController.getSnack)
  .post(snackController.createSnack);

router
  .route("/:id")
  .get(snackController.getSnackById)
  .put(snackController.updateSnackById)
  .delete(snackController.deleteSnackById);

export default router;
