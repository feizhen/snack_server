import { pagination } from "../pagination";

describe("pagination test", () => {
  it("return corret result", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const cases = [
      {
        input,
        pagi: {
          page: 1,
          pageSize: 10,
        },
        output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      {
        input,
        pagi: {
          page: 2,
          pageSize: 10,
        },
        output: [11],
      },
      {
        input,
        pagi: {
          page: 3,
          pageSize: 10,
        },
        output: [],
      },
      {
        input,
        pagi: {
          page: 0,
          pageSize: 10,
        },
        output: [],
      },
      {
        input,
        pagi: {
          page: 1,
          pageSize: 20,
        },
        output: input,
      },
      {
        input,
        pagi: {
          page: 2,
          pageSize: 20,
        },
        output: [],
      },
      {
        input: [],
        pagi: {
          page: 1,
          pageSize: 10,
        },
        output: [],
      },
    ];

    cases.forEach(({ input, pagi, output }) => {
      expect(pagination(input, pagi.page, pagi.pageSize)).toEqual(output);
    });
  });
});
