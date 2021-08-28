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
                <Link href={`https://open.spotify.com/track/${activity?.spotify.track_id}`}>
                    {/* https://open.spotify.com/track/4uxJICczweCIPZkIA6AN5k?si=2491c336dc3949b9 */}
                    <a>
                        <h2 className="sm:text-xs lg:text-lg">🎶 {activity.spotify?.song}
                            <br />
                            🎶 {activity.spotify?.artist}</h2>
                    </a>
                </Link>
            </>
        );
    }
    else return (
        <></>
    )
}