import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSpotify from "../hooks/useSpotify";

function Sidebar() {
    const spotifyApi = useSpotify()
    const { data: session, status } = useSession()
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        console.log(spotifyApi.getAccessToken())
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items);
            })
        }
        // console.log(playlists)
    }, [session, spotifyApi]);

    return <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
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
            {playlists.map(playlist => (
                <p key={playlist.id} className="cursor-pointer hover:text-white">{playlist.name}</p>
            ))}
        </div>
    </div>;
}

export default Sidebar;
