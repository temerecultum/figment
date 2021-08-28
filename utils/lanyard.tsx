// @ts-nocheck
import { useLanyard } from "use-lanyard";
// import Image from "next/image"
import Link from "next/link"

const id = process.env.DISCORD_ID || "318044130796109825";

export function Lanyard() {
    const { data: activity } = useLanyard(id);
    // console.log(activity);
    if (activity?.listening_to_spotify) {

        return (
            <>
                <div className="font-sans text-white font-thin italic absolute bottom-0 left-0 text-left p-1">
                    {/* <Image width="100px" height="100px" src={activity.spotify?.album_art_url}></Image> */}
                    {/* <h1 className="sm:text-xs lg:text-lg">Currently Listening to</h1> */}

                    <Link href={`https://open.spotify.com/track/${activity?.spotify.track_id}`}>
                        {/* https://open.spotify.com/track/4uxJICczweCIPZkIA6AN5k?si=2491c336dc3949b9 */}
                        <a>
                            <h2 className="sm:text-xs lg:text-lg">🎶 {activity.spotify?.song}
                                <br />
                                🎶 {activity.spotify?.artist}</h2>
                        </a>
                    </Link>
                </div>
            </>
        );
    }
    else return (
        <></>
    )
}