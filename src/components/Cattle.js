import React from 'react';
import { gql,useQuery, useMutation } from '@apollo/client';

import Layout from '../components/Layout';
import Card from './Card';



const createNFTMutation = gql`
  mutation createNFT($input: NFTInput!) {
    createNFT(input: $input) {
    id
    name
    description
    }
  }
`;

const getAllNft = gql`
  query {
    NFTs{
    status
    id
    tokenId
    image
    price
    description
    name
   }
  }
`;


function Cattle() {
  const [showModal, setShowModal] = React.useState(false);
  const [menuSelection, setMenuSelection] = React.useState("popular");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState('')

  const { loading, error, data, refetch } = useQuery(getAllNft);


  const [createNFTAction, { loading: loading1, error1 }] = useMutation(createNFTMutation, {
    onCompleted: (value) => {
      setShowModal(false);
      refetch();
    },
  });

  const handleCreateNFT = () => {
    if(name !== "" && description !== "" && price !== "" && menuSelection !== ""){
      setErrorMessage("");
      const input = { name, description, price: Number(price), category: "popular", image: "https://source.unsplash.com/random" };
      createNFTAction({ variables: { input } });
    }else {
      setErrorMessage("All fields are required")
    }
  }

  const allNfts = data && data.NFTs


    return (
        <>
          <Layout>
        <div className="mx-auto  max-w-screen-xl ">
    <div className="flex justify-end items-center   h-20">
        <button
        className="flex items-center mr-10 bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create NFT<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
      </button>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 left-16 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Add NFT
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    
                  </button>
                </div>
                {/*body*/}

                <div className="relative p-6 flex-auto ">
                  <div className="my-4  text-lg leading-relaxed">
                  <label for="first_name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name " name="name" value={name}   onChange={(e) => setName(e.target.value)} className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700  outline-none "/>
                  </div>
                  <div className="my-4 text-lg leading-relaxed">
                  <label for="first_name" className="block text-sm font-medium text-gray-700">Description</label>
                  <input type="text" id="description " name="description" value={description}   onChange={(e) => setDescription(e.target.value)} className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700   outline-none "/>
                  </div>
                  <div className="my-4  text-lg leading-relaxed">
                  <label for="first_name" className="block text-sm font-medium text-gray-700">Price</label>
                  <input type="number" id="price " name="price" value={price}  onChange={(e) => setPrice(e.target.value)} className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700   outline-none "/>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    disabled={loading1}
                    onClick={() => handleCreateNFT()}
                  >
                   {loading1 ? "Creating..": "Create"}
                  </button>
                </div>
              </div>
            </div>
              
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

            <div className="flex flex-col w-11/12 mx-auto py-5">
            
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    <div class="grid grid-cols-3 gap-4">
      {allNfts && allNfts.length !== 0 &&  allNfts.map(item =>  <Card item={item} />)}
</div>
  
    </div>
  </div>
  </div>
</div>
</Layout>
        </>
    )
}

export default Cattle
