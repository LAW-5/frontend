import { TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { formatIndonesianCurrency } from "../utils/string";

const OrderTable = ({ orderData }) => {

  return (
    <table className="table w-full border-2 rounded-lg mb-8">
      <thead>
        <tr>
          <th></th>
          <th>Harga Satuan</th>
          <th className="text-center">Kuantitas</th>
          <th>Total Harga</th>
        </tr>
      </thead>
      <tbody>
        {orderData.map((p, index) => (
          <tr key={index}>
            <td className="w-80">
              <div className="flex items-center">
                <img src={p.imageUrl} width={54} height={54} alt={p.name} />
                <p className="w-96 line-clamp-2 whitespace-normal ml-4">
                  {p.name}
                </p>
              </div>
            </td>
            <td className="w-48">{formatIndonesianCurrency(p.price)}</td>
            <td className="w-40 text-center">
              <div className="text-secondary">{p.quantity}</div>
            </td>
            <td className="w-48">
              {formatIndonesianCurrency(p.price * p.quantity)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
