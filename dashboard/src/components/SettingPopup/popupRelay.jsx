import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllLightings } from '../../features/api/apiClient';
import { fetchDataFailure } from '../../features/api/apiSlice';
import RelayItem from './relayItem';

const PopupRelay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
    const dispatch = useDispatch();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSave = () => {
    console.log('Settings saved:');
    setIsOpen(false);
  };
    const fetchData = async () => {
      try {
        const response = await getAllLightings();
        setData(response.data);
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
    useEffect(()=>{
        fetchData()
    },[dispatch])
  return (
    <div className=" bg-gray-100 w-full">
      <button
        onClick={togglePopup}
        className="w-full text-left"
      >
        Change Relay
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
            <div className=" flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Change Relay</h2>
              <button
                onClick={togglePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
<div>
        {data.map((item)=>{
            return (
                <RelayItem key={item.id} id={item.id} type="lighting" name={item.name}/>
            )
        })}
</div>
            </div>

            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={togglePopup}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupRelay;