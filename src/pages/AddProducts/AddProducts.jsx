import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { IoMdAlarm } from "react-icons/io";

const AddProducts = () => {
  const {user}= useContext(AuthContext);

    const handleAddProduct=()=>{
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-4/5 mx-auto shrink-0 shadow-2xl">
              <div className="flex justify-center">
              <h1 className="text-4xl font-bold flex flex-inline items-center gap-2 mt-8"><span className="text-pink-500"><IoMdAlarm /></span><span className="text-pink-500 mr-2"> Add </span>Your Product </h1>
              </div>
            <form onSubmit={handleAddProduct} className="card-body">
                {/* name and image */}
            <div className="flex w-full gap-2">
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
                </div>
             </div>
             {/* brand and type */}
             <div className="flex w-full gap-2">
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input type="text" name="brand" placeholder="brand name" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input type="text" name="type" placeholder="type" className="input input-bordered" required />
                </div>
             </div>
             {/* price and rating */}
             <div className="flex w-full gap-2">
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" name="rating" placeholder="rating" className="input input-bordered" required />
                </div>
             </div>
             {/* description */}
             <div className="flex w-full">
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea name="description" className="textarea textarea-info" placeholder="description"></textarea>
                </div>
               
             </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-pink-400 hover:bg-pink-500 text-white">Add Products</button>
              </div>
            </form>
          </div>
      
      </div>
    );
};

export default AddProducts;