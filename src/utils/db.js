// something mock db operation right row
// will be replaced by a real db operation later

// defined a snack model first
/**
 * id: string
   name: string;
   price: number;
   quantity: number;
   description: string;
   status: Status;
   type: Types;
 */
const getSnacks = async (params) => {
  return [
    {
      id: "1",
      name: "奥利奥",
      price: 10,
      quantity: 100,
      description: "扭一扭，舔一舔，泡一泡!奥利奥!",
      status: "on_sell",
      type: {
        text: "饼干",
        value: "cookie",
      },
    },
  ];
};

export default {
  getSnacks,
};
