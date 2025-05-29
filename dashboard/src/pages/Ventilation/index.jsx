import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ventilationImg from '../../assets/img/ventilation.png'
import ToggleSwitch from '../../components/Switch';
import Regulation from '../../components/Regulation';
import Divider from '../../components/Divider';
import VentilationAnimation from '../../components/VentilationAnimation';
import Normal from '../../components/Normal';
const Ventilation = () => {
    const { t } = useTranslation();
    const [isToggleOn, setIsToggleOn] = useState(false);
    const handleToggleChange = (newState) => {
        setIsToggleOn(newState);
        console.log('Toggle state changed to:', newState); // Example: Log the state
        // You can perform other actions here based on the state
    };
    return (
        <div className='w-9/12 px-8'>
            <div className='w-full text-center capitalize'>
                <Divider label={t('ventilation')} />
            </div>
            <div className='w-full flex capitalize justify-between text-2xl interface:text-4xl'>
                <div className='w-1/3'>
                    <div className='text-center'>
                        <div className='flex justify-center py-2 interface:py-4'>
                            {t('ventilation')}
                        </div>
                        <div className="flex justify-center py-2 interface:py-4">
                            <ToggleSwitch checked={isToggleOn} // Initial state controlled by parent
                                onChange={handleToggleChange} />
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center py-2 interface:py-4'>
                            {t('regulation')}
                        </div>
                        <div className="flex justify-center py-2 interface:py-4">
                            <Regulation isOn={isToggleOn}/>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center py-2 interface:py-4'>
                            {t('setback')}
                        </div>
                        <div className="flex justify-center py-2 interface:py-4">
                            <ToggleSwitch />
                        </div>
                    </div>
                </div>
                <div className='text-center flex items-center'>
                    <img className='' src={ventilationImg} alt="" />
                </div>
                <div className='w-1/3'>
                    <div className='text-center'>
                        <div className='flex justify-center py'>
                            <div className=' w-32 interface:w-52'>
                                {t('Laminar Flow Alarm')}
                            </div>
                        </div>
                        <div className='flex justify-center'>
                           
                            <div className='text-base capitalize  my-2 interface:my-4'>
                             <Normal lable={t('Dirty HEPA Filter')}/></div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center py'>
                            <div className='w-40 interface:w-64'>
                                {t('Differential Pressure Alarm')}
                            </div>
                        </div>
                        <div className=' text-center flex justify-center '>
                            <div className='text-base interface:text-2xl px-22 capitalize w-3/5 my-2 interface:my-4'>248.84 Pa</div>
                        </div>
                        <div className="text-center flex justify-center ">
 <div className='text-base capitalize  my-2 interface:my-4'>
                             <Normal lable={t('HEPA Filter')}/></div>                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ventilation;
