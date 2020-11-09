import * as snackController from "../snack.controller";
import db from "../../../utils/db";

describe("snack controller test", () => {
  // test cases for getSnack
  it("getSnack function will return all snacks", async () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };
    await snackController.getSnack(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    const firstCall = res.json.mock.calls[0];
    const firstArg = firstCall[0]; // firstArg is what pass to the res.json

    const { result } = firstArg; // result is the snacks that return by the db
    const dataFromDb = await db.getSnacks(); // so the result.data should equal to the data return from the db

    expect(result.data).toEqual(dataFromDb);
  });

  it("getSnack function will return some snacks by filter params", async () => {
    const req = {
      page: 1,
      pageSize: 10,
    };
    const res = {
      json: jest.fn(),
    };

    await snackController.getSnack(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  // it("getSnack function will return empty array if not match filter params", async () => {});

  // // test cases for createSnack
  // it("createSnack function will send 500 and error message if the creation params is not legal", async () => {});

  // it("createSnack function will send 200 and the new one info if the creation", async () => {});

  // it("createSnack function will send 500? and error message if the creation one is duplicated", async () => {});

  // // test cases for getSnackById
  // it("getSnackById function will return the snack when match the snack id", async () => {});

  // it("getSnackById function will return 404 if the snack not found", async () => {});

  // ...
});
