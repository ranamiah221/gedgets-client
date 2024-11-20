

const AddProducts = () => {
    const handleAddProduct=()=>{
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-4/5 mx-auto shrink-0 shadow-2xl">
            <form onSubmit={handleAddProduct} className="card-body">
                {/* name and image */}
            <div className="flex w-full gap-2">
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
             </div>
             {/* brand and type */}
             <div className="flex w-full gap-2">
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
             </div>
             {/* price and rating */}
             <div className="flex w-full gap-2">
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
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