import { MinusIcon, PlusIcon } from '@heroicons/react/outline';

const QuantityInput = ({ onAdd, onSubstract, quantity }) => {
  return (
    <div className="border border-secondary flex">
      <button onClick={onSubstract} className="flex justify-center items-center border-r border-secondary w-8 h-8">
        <MinusIcon className="text-secondary w-6 p-1" />
      </button>
      <div className="px-4 py-1 flex justify-center items-center text-center text-secondary text-sm">
        {quantity}
      </div>
      <button onClick={onAdd} className="flex justify-center items-center border-l border-secondary w-8 h-8">
        <PlusIcon className="text-secondary w-6 p-1" />
      </button>
    </div>
  );
};

export default QuantityInput;