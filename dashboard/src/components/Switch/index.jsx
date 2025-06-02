import React, { useEffect, useState } from "react";
import {
  getStatusControlById,
  getStatusLightingById,
  getStatusVentilation,
  TurnOffControlById,
  TurnOffLightingById,
  TurnOffVentilation,
  TurnOnControlById,
  TurnOnLightingById,
  TurnOnVentilation,
} from "../../features/api/apiClient";
import { useDispatch } from "react-redux";
import { fetchDataFailure } from "../../features/api/apiSlice";

const ToggleSwitch = ({ type, id, label, onChange, checked }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const dispatch = useDispatch();
  const fetchStatus = async (id) => {
    try {
      if (type == "lighting") {
        const response = await getStatusLightingById(id);
        setIsChecked(response.data.status);
      } else if (type == "control") {
        const response = await getStatusControlById(id);
        setIsChecked(response.data.status);
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
  const fetchStatusVentilation = async () => {
    try {
      const response = await getStatusVentilation();
      setIsChecked(response.data);
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
  const TurnLighTingOnOrOff = async (id) => {
    try {
      if (isChecked) {
        await TurnOffLightingById(id);
      } else {
        await TurnOnLightingById(id);
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
  const TurnControlOnOrOff = async (id) => {
    try {
      if (isChecked) {
        await TurnOffControlById(id);
      } else {
        await TurnOnControlById(id);
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
  const TurnVentilationOnOrOff = async () => {
    try {
      if (isChecked) {
        await TurnOffVentilation();
      } else {
        await TurnOnVentilation();
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      if (type == "lighting") {
        TurnLighTingOnOrOff(id);
      }
      if (type == "control") {
        TurnControlOnOrOff(id);
      }
      if (type == "ventilation") {
        TurnVentilationOnOrOff();
      }
      onChange(!isChecked);
    }
  };
  useEffect(() => {
    if (type == "ventilation") {
      fetchStatusVentilation();
    } else {
      fetchStatus(id);
    }
    const timer = setInterval(() => {
      if (type == "ventilation") {
        fetchStatusVentilation();
      } else {
        fetchStatus(id);
      }
    }, 1000);

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(timer);
  }, [dispatch]);
  return (
    <div className="flex items-center gap-2">
      {label && (
        <span className={isChecked ? "text-yellow-500" : `text-gray-700`}>
          {label}
        </span>
      )}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
