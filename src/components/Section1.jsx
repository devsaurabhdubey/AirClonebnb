import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Section1() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 md:px-12 md:py-6">
        <div className="flex flex-col">
          <p className="font-bold text-xl md:text-2xl">Historic Valencia awaits you ... HERE.</p>
          <div className="flex items-center cursor-pointer">
            <StarIcon className="text-yellow-500 mr-1" />
            <p>4.85 .</p>
            <p>&nbsp;</p>
            <p className="underline">41 reviews</p>
            <p>&nbsp;&nbsp;.&nbsp;&nbsp;</p>
            <CompassCalibrationIcon className="mr-2" />
            <p>Superhost</p>
            <p>&nbsp;&nbsp;.&nbsp;&nbsp;</p>
            <p className="underline">Valencia, Comunidad Valenciana, Spain</p>
          </div>
        </div>
        <div className="flex items-center underline mt-3 md:mt-0">
          <button className="mr-2">
            <span className="mr-1">
              <IosShareIcon />
            </span>
            Share
          </button>
          <button>
            <span className="mr-1">
              <FavoriteBorderIcon />
            </span>
            Save
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-6 py-3 md:px-12 md:py-6 gap-4">
        <div className="w-full md:w-1/2">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/0eb18b3d-9bca-4e1c-bb84-15101b07832b.jpeg?im_w=960" alt="Left Image" className="w-full rounded-l-2xl" />
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/25c9d6ce-8ee6-43dd-b396-04fcdb348ca3.jpeg?im_w=720" alt="Right Image 1" className="w-full" />
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/36c1efd1-a265-4fb6-ba8e-d27fb3745d2d.jpeg?im_w=720" alt="Right Image 2" className="w-full rounded-tr-2xl" />
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/32ad0798-91c7-4e4c-a0d7-29d2e439b17d.jpeg?im_w=720" alt="Right Image 3" className="w-full" />
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/56c5e0da-faa3-4b7c-9951-95b605fc8473.jpeg?im_w=720" alt="Right Image 4" className="w-full rounded-br-2xl" />
        </div>
      </div>
    </>
  );
}
