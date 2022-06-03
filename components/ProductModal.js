import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { addProduct, editProduct } from "../models/product";

const ProductModal = ({
  isUpdate,
  modalId,
  id,
  name,
  price,
  desc,
  stock,
  imgUrl,
}) => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    await addProduct(data).then(() => {
      router.reload();
    })
  };

  const onUpdate = async (data) => {
    data.id = id;
    await editProduct(data.id, data).then(() => {
      router.reload();
    })
  };

  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <label htmlFor={modalId} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-3xl font-bold text-center pt-4">
            {isUpdate ? "Edit" : "Add"} Product
          </h3>

          <form className="p-4" onSubmit={isUpdate ? handleSubmit(onUpdate) : handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text !text-lg !font-semibold">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Product name"
                  className="input input-bordered !rounded-md w-full"
                  defaultValue={name}
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
                  defaultValue={price}
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
                  defaultValue={stock}
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
                  placeholder="Description"
                  className="input input-bordered !rounded-md w-full"
                  defaultValue={desc}
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
                  defaultValue={imgUrl}
                  className="input input-bordered !rounded-md w-full"
                  {...register("imageUrl")}
                />
              </label>
            </div>
            <button className="btn btn-primary rounded-lg mx-auto block mt-8">
              {isUpdate ? "Update" : "Add"} Product
            </button>
          </form>
        </label>
      </label>
    </>
  );
};

export default ProductModal;
