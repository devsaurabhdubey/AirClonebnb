import React from 'react';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import RiceBowlOutlinedIcon from '@mui/icons-material/RiceBowlOutlined';
import StarIcon from '@mui/icons-material/Star';
import Check from './Check';


export default function Section2() {
    return (
        <div className="flex flex-col md:flex-row items-center px-4 md:px-12 py-6 gap-4">
            <div className="w-full md:w-3/5">
                <p className="text-xl font-bold">Rooms in a rental unit hosted by Sagrario</p>
                <div className="mt-5 md:mt-8 mb-7 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-xl p-4 md:p-8">
                        <BedOutlinedIcon className="mr-2" />
                        <span className="inline">1 double bed</span>
                    </div>
                    <div className="border rounded-xl p-4 md:p-8">
                        <ShowerOutlinedIcon className="mr-2" />
                        <span className="inline">Shared bathroom</span>
                    </div>
                    <div className="border rounded-xl p-4 md:p-8">
                        <HouseOutlinedIcon className="mr-2" />
                        <span className="inline">Host and other guests may be here</span>
                    </div>
                </div>
                <hr />
                <div className='mt-6'>
                    <span>
                        <BedOutlinedIcon />&nbsp;
                        <b>Room in a rental unit</b>
                        <p className='pl-7'>Your own room in a home, plus access to shared spaces.</p>
                        <br />
                    </span>
                    <span>
                        <WorkspacePremiumOutlinedIcon />&nbsp;
                        <b>Dedicated workspace</b>
                        <p className='pl-7'>A room with wifi that's well suited for working.</p>
                        <br />
                    </span>
                    <span>
                        <CompassCalibrationIcon />&nbsp;
                        <b>Sagrario is a Superhost</b>
                        <p className='pl-7'>Superhosts are experienced, highly rated hosts who are committed to providing greate stays for their guests.</p>
                        <br />
                    </span>
                </div>
                <hr />
                <br />
                <div>
                    <TranslateOutlinedIcon />&nbsp; Some info has been automatically translated. <b><u>Show original language</u></b>
                </div>
                <br />
                <hr />
                <br />
                <div>
                    <p className='font-bold text-2xl'>Meet your Host</p>
                    <div className='w-full mt-8 mb-4 bg-yellow-50'>
                        <div className="flex justify-center items-center">
                            <div className="flex">
                                <div className="w-1/4">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240"
                                        alt="User Profile"
                                        className="w-full"
                                    />
                                    <p className='text-2xl font-bold'>Sagrario</p>
                                    <p className='text-sm'>superhost</p>
                                </div>
                                <div className="w-3/4 ml-4">
                                    <div className="flex flex-col">
                                        <div className="flex items-center mb-2 flex-col border-b">
                                            <span className="font-bold mr-2">314</span>
                                            <span className='text-sm'>Reviews</span>
                                        </div>
                                        <div className="flex items-center mb-2 flex-col border-b">
                                            <span className="font-bold mr-2">4.86<StarIcon /></span>
                                            <span className='text-sm'>Rating</span>
                                        </div>
                                        <div className="flex items-center flex-col">
                                            <span className="font-bold mr-2">7</span>
                                            <span className='text-sm'>Years hosting</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex  flex-col mt-8">
                            <div>
                                <CakeOutlinedIcon />&nbsp;
                                Born in the 60s
                                <br />
                            </div>
                            <div>
                                <WorkOutlineOutlinedIcon />&nbsp;
                                My work: coach
                                <br />
                            </div>
                            <div>
                                <AccessTimeOutlinedIcon />&nbsp;
                                I spend too much time: Search for activities for guests
                                <br />
                            </div>
                            <div>
                                <AutoAwesomeOutlinedIcon />&nbsp;
                                What makes my home unique: Good energy and feeling at home
                                <br />
                            </div>
                            <div>
                                <RiceBowlOutlinedIcon />&nbsp;
                                For guests, I always: Help them enjoy Valencia
                                <br />
                            </div>
                            <br />
                            <div>Open and communicative, with donation of people and happy to welcome friends from the world at home.</div>
                            <a href=""><b><u>Show more > </u></b></a>
                            <br />
                            <button className='bg-black text-white w-40 h-12 rounded-lg'>Message Host</button>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div>
                        <p className='text-lg font-bold'>About this place</p>
                        <br />
                        <p>Beautiful room, spacious and bright, with balcony. In his heart, in the very center of the city.</p>
                        <br />
                        <p>The space</p>
                        <p>Despite being in the center, next to the cathedral, it is a quiet place, only on weekends being close to places of entertainment, there is a little more noise. ...</p>
                        <br />
                        <div>
                        <a href=""><b><u>Show more > </u></b></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/5'>
                <Check />
            </div>
        </div>
    );
}
