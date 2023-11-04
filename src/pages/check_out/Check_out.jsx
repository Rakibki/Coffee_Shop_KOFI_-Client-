import { useLoaderData } from "react-router-dom";
import Container from "../../shared/container/Container";
import { useContext } from "react";
import { authContext } from "../../providers/AuhtProvider";
import { BiSolidShoppingBag } from "react-icons/bi";

const Check_out = () => {
  const product = useLoaderData();
  const { user } = useContext(authContext);

  return (
    <Container>
      <div>
        <div className="flex px-24 py-5 justify-between">
          <div>
            <h2 className="text-2xl">{product.title}</h2>
          </div>
          <div>
            <BiSolidShoppingBag className="text-2xl text-[#ff5151]" />
          </div>
        </div>
        <hr />

        <div className="md:flex px-18">
          <div className="flex-1 py-3 p-6 lg:pr-7 border-r-2">
            <div className="mt-4">
              <h2 className="mb-2 text-2xl">Contact</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2  outline-[#ff5151] border-[1px] border-[#dedede] rounded-md"
              />
            </div>

            <div>
              <h2 className="mb-2 mt-8 text-2xl">Delivery</h2>
              <p>select option current nuntry</p>
              <div className="flex mt-4 gap-3">
                <input
                  type="email"
                  placeholder="First Name"
                  className="w-full p-2  outline-[#ff5151] border-[1px] border-[#dedede] rounded-md"
                />
                <input
                  type="email"
                  placeholder="Last Name"
                  className="w-full p-2  outline-[#ff5151] border-[1px] border-[#dedede] rounded-md"
                />
              </div>

              <div className="flex mt-4 gap-3">
                <input
                  type="email"
                  placeholder="City"
                  className="w-full p-2  outline-[#ff5151] border-[1px] border-[#dedede] rounded-md"
                />
                <input
                  type="email"
                  placeholder="Post Code"
                  className="w-full p-2  outline-[#ff5151] border-[1px] border-[#dedede] rounded-md"
                />
              </div>
              
              <input
                  type="email"
                  placeholder="Address"
                  className="w-full p-2 mt-4 outline-[#ff5151] border-[1px] border-[#dedede] rounded-md"
                />
            </div>
            <button className="w-full text-white transition-all hover:opacity-80 py-3 mt-5 bg-[#ff5151]">Complate Oder</button>
          </div>

          <div className="flex-1 p-3">
            product detais
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Check_out;
