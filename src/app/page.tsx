import { FaMedal } from 'react-icons/fa';
import { IoNewspaperOutline, IoChatbox } from 'react-icons/io5';
import { ImCalendar } from 'react-icons/im';
import { BiMessage } from 'react-icons/bi';

import Player from "components/common/Player";

const Home = () => {
  return (
    <main>
      <section className="container mx-auto">
        <div 
          style={{
            background: 'url(/banner.png) no-repeat',
            height: 323
          }}
        />
        <Player />
      </section>
      <div className="bg-indigo-50">
        <section className="container mx-auto py-12">
          <div className="grid grid-cols-[360px_minmax(0,1fr)_360px] gap-4">
            <div className="flex flex-col">
              <div className="relative flex justify-between bg-white p-3 rounded-xl shadow-lg shadow-indigo-200/50">
                <small className="absolute left-1/2 -translate-x-1/2 bottom-full text-white bg-gradient-to-r from-blue-300 to-pink-300 rounded py-1 px-2 -mb-1">
                  Emblemas disponíveis
                </small>
                {new Array(4).fill(0).map((_, i) => (
                    <div key={i} className="bg-gray-200 border border-gray-300 h-[70px] w-[70px] rounded-md"></div>
                  ))}
              </div>
              <section className="bg-white p-3 rounded-xl shadow-lg shadow-indigo-200/50 mt-5 flex-grow">
                <div className="flex justify-center gap-3">
                  <FaMedal size={20} />
                  <h6>Ranking</h6>
                </div>
                <div>
                  {new Array(4).fill(0).map((_, i) => (
                    <div key={i} className='flex gap-4 p-1'>
                      <div className="flex flex-shrink-0 justify-center items-center bg-amber-400 h-16 w-16 rounded-md">
                        <strong className="text-white text-xl">1º</strong>
                      </div>
                      <div className="flex items-center flex-grow gap-3 border rounded-lg p-2">
                        <div className="flex-shrink-0 bg-gray-100 border border-gray-300 h-12 w-12 rounded-full"></div>
                        <p className='text-sm line-clamp-2 overflow-hidden'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita libero, id ipsum excepturi 
                          quidem numquam assumenda at aut quae esse possimus exercitationem? Nostrum ratione esse ducimus quo autem nihil.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="bg-white p-3 rounded-xl shadow-lg shadow-indigo-200/50">
              <div className="flex justify-center gap-3 mb-3">
                <IoNewspaperOutline size={30} />
                <h6 className='m-0'>Notícias destaque</h6>
              </div>
              <div className="grid grid-cols-2 gap-4 grid-rows-2">
                {new Array(4).fill(0).map((_, i) => (
                  <div key={i} className="bg-neutral-100 border border-gray-400 rounded-lg overflow-hidden">
                    <div 
                      style={{
                        background: 'url(/banner.png) center center / cover no-repeat',
                        height: 80
                      }}
                    />
                    <div className='relative p-2'>
                      <h6 className="text-sm">Lorem ipsum minha pika</h6>
                      <small className="text-[11px] text-gray-600">Autor: geefi</small>
                      <small className="absolute bottom-full right-0 mr-4 bg-pink-500 text-white -mb-2 px-3 rounded-md">DESTAQUE</small>
                    </div>
                    <div className="grid grid-cols-2 p-2 divide-x divide-gray-400">
                      <div className="flex flex-col justify-center items-center">
                        <div className="flex items-center gap-2 text-gray-600">
                          <IoChatbox />
                          <small>COMENTÁRIOS</small>
                        </div>
                        <span className="text-xl">50</span>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="flex items-center gap-2 text-gray-600">
                          <ImCalendar />
                          <small>POSTADO EM</small>
                        </div>
                        <small>01/01</small>
                        <button type="button" className="bg-blue-500 text-white px-3 rounded-md mt-2">
                          Saiba mais
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-3 rounded-xl shadow-lg shadow-indigo-200/50">
              <div className="flex justify-center items-center gap-2 mb-3">
                <BiMessage size={30} />
                <h6 className="m-0">Comentários</h6>
              </div>
              <div className="grid grid-rows-4 gap-4">
                {new Array(4).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center flex-grow gap-3 border rounded-lg p-2">
                    <div className="flex-shrink-0 bg-gray-100 border border-gray-300 h-16 w-16 rounded-full"></div>
                    <p className='line-clamp-2 overflow-hidden'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita libero, id ipsum excepturi 
                      quidem numquam assumenda at aut quae esse possimus exercitationem? Nostrum ratione esse ducimus quo autem nihil.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>

      <section className="container mx-auto py-12">
        <div className="grid grid-cols-[repeat(2,minmax(0,380px))] gap-16 justify-center">
          <div>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded-full">
                <img src="/mobis-icon.png" alt="" />
              </div>
              <h5 className="ml-4">Últimos mobis</h5>
            </div>
            <div className="grid grid-cols-6 grid-rows-4 gap-3 border border-gray-400 rounded-xl p-4 mt-4">
              {new Array(24).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-100 border border-gray-400 h-10 w-12 rounded-md">

                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded-full">
                <img src="/mobis-icon.png" alt="" />
              </div>
              <h5 className="ml-4">Últimos raros</h5>
            </div>
            <div className="grid grid-cols-6 grid-rows-4 gap-3 border border-gray-400 rounded-xl p-4 mt-4">
              {new Array(24).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-100 border border-gray-400 h-10 w-12 rounded-md">

                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded-full">
                <img src="/mobis-icon.png" alt="" />
              </div>
              <h5 className="ml-4">Últimos emblemas</h5>
            </div>
            <div className="grid grid-cols-6 grid-rows-4 gap-3 border border-gray-400 rounded-xl p-4 mt-4">
              {new Array(24).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-100 border border-gray-400 h-10 w-12 rounded-md">

                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded-full">
                <img src="/mobis-icon.png" alt="" />
              </div>
              <h5 className="ml-4">Quartos</h5>
            </div>
            <div className="grid grid-cols-6 grid-rows-4 gap-3 border border-gray-400 rounded-xl p-4 mt-4">
              {new Array(24).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-100 border border-gray-400 h-10 w-12 rounded-md">

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
