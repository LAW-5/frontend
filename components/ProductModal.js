
const ProductModal = ({ isUpdate, modalId, name, price, desc, stock }) => {
    return (
        <>
            <input type="checkbox" id={modalId} class="modal-toggle" />
            <label for={modalId} class="modal cursor-pointer">
              <label class="modal-box relative" for="">
                <h3 class="text-3xl font-bold text-center pt-4">
                    { isUpdate ? "Edit" : "Add" } Product
                </h3>
                
                <form className="p-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text !text-lg !font-semibold">
                      Name
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Product name"
                      value={name}
                      className="input input-bordered !rounded-md w-full"
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
                      value={price}
                      className="input input-bordered !rounded-md w-full"
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
                      value={stock}
                      className="input input-bordered !rounded-md w-full"
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
                      value={desc}
                      className="input input-bordered !rounded-md w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text !text-lg !font-semibold">
                      Product Picture
                    </span>
                  </label>
                  <label
                    className="btn btn-secondary rounded-lg w-36"
                    htmlFor="product-picture"
                  >
                    UPLOAD
                  </label>
                  <input type="file" hidden id="product-picture" />
                </div>
                <button className="btn btn-primary rounded-lg mx-auto block mt-8">
                  { isUpdate ? "Update" : "Create" } Product
                </button>
              </form>
              </label>
            </label>
        </>
    );
};

export default ProductModal;