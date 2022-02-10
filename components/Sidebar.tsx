import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
} from '@heroicons/react/outline'

import { HeartIcon } from '@heroicons/react/solid'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useSpotify from "../hooks/useSpotify";
import { playlistIdState } from '../atoms/playlistAtom'
import { SidebarButton } from "./SidebarButton";

function Sidebar() {
    const spotifyApi = useSpotify()
    const { data: session, status } = useSession()
    const [playlists, setPlaylists] = useState([])
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => setPlaylists(data.body.items))
        }
    }, [session, spotifyApi]);

    console.log(playlistId)

    return <div className="text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36">
        <div className="space-y-4">
            <SidebarButton>
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
            </SidebarButton>
            <SidebarButton>
                <SearchIcon className="h-5 w-5" />
                <span>Search</span>
            </SidebarButton>
            <SidebarButton>
                <LibraryIcon className="h-5 w-5" />
                <span>Your library</span>
            </SidebarButton>
            <hr className="border-t-[0.1px] border-gray-900" />
            <SidebarButton>
                <PlusCircleIcon className="h-5 w-5" />
                <span>Create playlist</span>
            </SidebarButton>
            <SidebarButton>
                <HeartIcon className="h-5 w-5 text-blue-500" />
                <span>Liked songs</span>
            </SidebarButton>
            <SidebarButton>
                <RssIcon className="h-5 w-5 text-green-500" />
                <span>Your episodes</span>
            </SidebarButton>
            <hr className="border-t-[0.1px] border-gray-900" />
            {playlists.map(playlist => (
                <p key={playlist.id} onClick={() => setPlaylistId(playlist.id)} className="cursor-pointer hover:text-white">{playlist.name}</p>
            ))}
        </div>
    </div>;
}

export default Sidebar;
