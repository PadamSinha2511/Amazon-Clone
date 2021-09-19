import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";
function CheckoutProduct({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" key={i} />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="INR" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free-NextDay Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button">Add to basket</button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
