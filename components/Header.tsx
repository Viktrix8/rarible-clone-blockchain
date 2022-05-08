import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import { FiChevronDown, FiSend } from 'react-icons/fi'
import { BsLightningFill } from 'react-icons/bs'
import { IoMdSunny } from 'react-icons/io'

import logo from '../assets/logo.jpg'

const currentWallet = ''

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center gap-x-4 bg-[rgb(18,18,18)] p-4 px-8 text-white">
      <div className="flex items-center gap-3">
        <Image src={logo} height={45} width={45} className="rounded-md" />
        <p className="hidden text-2xl font-bold tracking-wide xl:block">
          Rarible
        </p>
      </div>

      <div className="flex flex-1 items-center gap-x-2 rounded-full bg-primary-gray p-2">
        <FiSearch />
        <input
          className="flex-1 bg-transparent outline-none"
          placeholder="Collection, item or user"
          type="text"
        />
      </div>

      <div className="flex gap-6">
        <div className="text-md flex cursor-pointer items-center font-bold text-gray-200/50 hover:text-gray-200">
          <p>Explore</p>
          <FiChevronDown />
        </div>
        <div className="text-md flex cursor-pointer items-center font-bold text-gray-200/50 hover:text-gray-200">
          <p>My Profile</p>
          <FiChevronDown />
        </div>
        <div className="text-md flex cursor-pointer items-center font-bold text-gray-200/50 hover:text-gray-200">
          <p>Following</p>
        </div>
        <div className="text-md flex cursor-pointer items-center font-bold text-gray-200/50 hover:text-gray-200">
          <p>Activity</p>
        </div>
        <div className="text-md flex cursor-pointer items-center font-bold text-gray-200/50 hover:text-gray-200">
          <p>How it works</p>
        </div>
        <div className="text-md flex cursor-pointer items-center font-bold text-gray-200/50 hover:text-gray-200">
          <p>Community</p>
          <FiChevronDown />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {currentWallet && (
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red-500/30 p-2">
            <div className="absolute -top-1 -right-1 rounded-full bg-red-400 px-1 text-xs">
              1
            </div>
            <BsLightningFill size={20} color="red" />
          </div>
        )}

        <button className="rounded-full bg-gradient-to-r from-pink-600 to-blue-600 px-4 py-3 text-sm font-bold tracking-wide">
          Create
        </button>

        {currentWallet ? (
          <>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 p-2 hover:border-gray-600">
              <FiSend />
            </div>

            <div className=" h-12 w-12 rounded-full bg-gradient-to-br from-blue-800 to-red-600" />
          </>
        ) : (
          <>
            <button className="rounded-full border border-gray-700 px-4 py-3 text-sm font-bold tracking-wide hover:border-gray-600">
              Sign In
            </button>
          </>
        )}
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 p-2 hover:border-gray-600">
          <IoMdSunny />
        </div>
      </div>
    </header>
  )
}

export default Header
