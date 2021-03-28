import "intl";
import "intl/locale-data/jsonp/en";

export const FormattedPrice = (price) => {
  var format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return format.format(price);
};
