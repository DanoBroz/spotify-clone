import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
    const { data: session, status } = useSession()

    console.log(session)

    return <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
        <div className="space-y-4">
            <button onClick={() => signOut()} className="flex items-center space-x-2 hover:text-white transition-colors capitalize">
                <span>Log out</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-white transition-colors capitalize">
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-white transition-colors capitalize">
                <SearchIcon className="h-5 w-5" />
                <span>Search</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-white transition-colors capitalize">
                <LibraryIcon className="h-5 w-5" />
                <span>Your library</span>
            </button>
            <hr className="border-t-[0.1px] border-gray-900" />
            <button className="flex items-center space-x-2 hover:text-white transition-colors capitalize">
                <PlusCircleIcon className="h-5 w-5" />
                <span>Create playlist</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-white transition-colors capitalize">
                <HeartIcon className="h-5 w-5" />
                <span>Liked songs</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-white transition-colors capitalize">
                <RssIcon className="h-5 w-5" />
                <span>Your episodes</span>
            </button>
            <hr className="border-t-[0.1px] border-gray-900" />
            <p className="cursor-pointer hover:text-white">Your playlists...</p>
        </div>
    </div>;
}

export default Sidebar;
