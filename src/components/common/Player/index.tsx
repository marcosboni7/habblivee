import { HiMicrophone } from 'react-icons/hi2';
import { IoMusicalNotesSharp } from 'react-icons/io5';
import { BiPauseCircle, BiMailSend } from 'react-icons/bi';
import { FaHeadphonesAlt } from 'react-icons/fa';

const Player = () => {
    return (
        <div className="flex items-center justify-center gap-24 bg-white h-28" data-testid="test_player">
            <div className="flex-shrink-0 rounded-lg bg-gray-100 h-20 w-20"></div>
            <div className="flex gap-2 items-center">
                <HiMicrophone size={20}className="text-blue-600" />
                Geefi
            </div>
            <div className="flex gap-2 items-center">
                <IoMusicalNotesSharp size={20} className="text-blue-600" />
                Crooked Smile
            </div>
            <div className="flex gap-2 items-center">
                <button type="button">
                    <BiPauseCircle size={20} className="text-blue-600" />
                </button>
                <input type="range" />
            </div>
            <div className="flex gap-2 items-center">
                <FaHeadphonesAlt size={20} className="text-blue-600" />
                198 ouvintes
            </div>
            <button type="button" className="flex items-center border-2 border-blue-500 p-1 rounded-md">
                <span className="bg-blue-500 py-1 px-4 rounded-md">
                    <BiMailSend className="text-white" size={28} />
                </span>
                <span className="text-blue-600 px-6">Pedido</span>
            </button>
        </div>
    );
};

export default Player;