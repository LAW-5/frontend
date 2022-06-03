import { useForm } from "react-hook-form";

const ProductModal = ({
  isUpdate,
  modalId,
  name,
  price,
  desc,
  stock,
  imageUrl,
}) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <label htmlFor={modalId} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-3xl font-bold text-center pt-4">
            {isUpdate ? "Edit" : "Add"} Product
          </h3>

          <form className="p-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text !text-lg !font-semibold">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Product name"
                  className="input input-bordered !rounded-md w-full"
                  required
                  {...register("name")}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text !text-lg !font-semibold">
                  Price
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="999999"
                  className="input input-bordered !rounded-md w-full"
                  required
                  {...register("price")}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text !text-lg !font-semibold">
                  Initial Stock
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="99999"
                  className="input input-bordered !rounded-md w-full"
                  required
                  {...register("stock")}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text !text-lg !font-semibold">
                  Description
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  className="input input-bordered !rounded-md w-full"
                  required
                  {...register("description")}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text !text-lg !font-semibold">
                  Image Url
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={imageUrl}
                  className="input input-bordered !rounded-md w-full"
                />
              </label>
            </div>
            <button className="btn btn-primary rounded-lg mx-auto block mt-8">
              {isUpdate ? "Update" : "Create"} Product
            </button>
          </form>
        </label>
      </label>
    </>
  );
};

export default ProductModal;
