import { generateDataset } from "../db-mock";
import _ from "lodash";

describe("generateDataset test", () => {
  it("return the corret mock data", () => {
    const dataset = generateDataset();
    console.log(dataset);
    expect(_.isArray(dataset)).toBeTruthy();

    dataset.forEach((data) => {
      expect(data).toEqual({
        id: expect.any(String),
        name: expect.any(String),
        type: {
          value: expect.any(String),
          label: expect.any(String),
        },
        description: expect.any(String),
        quantity: expect.any(Number),
        price: expect.any(Number),
        onSell: expect.any(Boolean),
      });
    });
  });
});
