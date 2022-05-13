import { TrashIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { formatIndonesianCurrency } from '../utils/string';

const OrderTable = ({merchantName}) => {
  return (
    <table className="table w-full border-2 rounded-lg mb-8">
      <thead>
        <tr>
          <th>{merchantName}</th>
          <th>Harga Satuan</th>
          <th className="text-center">Kuantitas</th>
          <th>Total Harga</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="w-80">
            <div className="flex items-center">
              <Image
                src="/images/RTX-3090.jpeg"
                width={54}
                height={54}
                alt="Product name"
              />
              <p className="w-96 line-clamp-2 whitespace-normal ml-4">
                Geforce RTX 3090 Super Ready for Bitcoin Mining Gaming F1 VR
                Ready With Color Stripe
              </p>
            </div>
          </td>
          <td className="w-48">{formatIndonesianCurrency(14999999)}</td>
          <td className="w-40 text-center">
            <div className="text-secondary">
              0
            </div>
          </td>
          <td className="w-48">{formatIndonesianCurrency(14999999)}</td>
          <td>
            <div className="flex justify-center items-center mr-6">
              <TrashIcon className="text-neutral w-5" />
            </div>
          </td>
        </tr>
        <tr>
          <td className="w-80">
            <div className="flex items-center">
              <Image
                src="/images/RTX-3090.jpeg"
                width={54}
                height={54}
                alt="Product name"
              />
              <p className="w-72 line-clamp-2 whitespace-normal ml-4">
                Geforce RTX 3090 Super Ready for Bitcoin Mining Gaming F1 VR
                Ready With Color Stripe
              </p>
            </div>
          </td>
          <td>{formatIndonesianCurrency(14999999)}</td>
          <td className="w-32 text-center">
            <div className="text-secondary">
              0
            </div>
          </td>
          <td>{formatIndonesianCurrency(14999999)}</td>
          <td>
            <div className="flex justify-center items-center mr-6">
              <TrashIcon className="text-neutral w-5" />
            </div>
          </td>
        </tr>
        <tr>
          <td className="w-80">
            <div className="flex items-center">
              <Image
                src="/images/RTX-3090.jpeg"
                width={54}
                height={54}
                alt="Product name"
              />
              <p className="w-72 line-clamp-2 whitespace-normal ml-4">
                Geforce RTX 3090 Super Ready for Bitcoin Mining Gaming F1 VR
                Ready With Color Stripe
              </p>
            </div>
          </td>
          <td>{formatIndonesianCurrency(14999999)}</td>
          <td className="w-32 text-center">
            <div className="text-secondary">
              0
            </div>
          </td>
          <td>{formatIndonesianCurrency(14999999)}</td>
          <td>
            <div className="flex justify-center items-center mr-6">
              <TrashIcon className="text-neutral w-5" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderTable;