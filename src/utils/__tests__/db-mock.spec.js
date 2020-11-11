import { generateDataset, getSnacks } from "../db-mock";
import { pagination } from "../pagination";
import _ from "lodash";

describe("generateDataset test", () => {
  it("return the corret mock data", () => {
    const dataset = generateDataset();
    expect(_.isArray(dataset)).toBeTruthy();

    dataset.forEach((data) => {
      // 校验返回的类型
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

  it("getSnacks function return correct data", async () => {
    const dataset = generateDataset();
    const params1 = {
      page: 1,
      pageSize: 1,
    };

    expect(await getSnacks(dataset, params1)).toEqual(
      pagination(dataset, params1.page, params1.pageSize)
    );

    const params2 = {
      name: "饼干",
      onSell: true,
    };

    const result2 = await getSnacks(dataset, params2);

    result2.forEach(({ name, onSell }) => {
      expect(name.includes(params2.name)).toBeTruthy();
      expect(onSell).toEqual(params2.onSell);
    });

    const params3 = {
      type: "cookie",
    };

    const result3 = await getSnacks(dataset, params3);
    console.log("result3", result3);
    result3.forEach(({ type }) => {
      expect(type.value).toEqual(params3.type);
    });
  });
});
