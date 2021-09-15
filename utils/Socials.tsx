import { Twitter, Monster, Github, Githubsponsors } from "@icons-pack/react-simple-icons";
import { ReactChild } from 'react'

type Social = {
  name: string,
  string: string
  icon: ReactChild
}
const Socials: Social[] = [
  // @ts-ignore
  { name: "Email", string: "mailto:work@werewolf.design", icon: <Monster title="Email" /> },
  { name: "Twitter", string: "https://twitter.com/temerecultum", icon: <Twitter /> },
  { name: "Github", string: "https://github.com/himbolion", icon: <Github /> },
  // @ts-ignore
  { name: "Support ", string: "https://lio.cash", icon: <Githubsponsors title="Support" /> },
  // { name: "Github", string: "https://github.com/hokkqi", icon: <Github /> },
  // { name: "Picarto", string: "https://picarto.tv/himbolion", icon: <PicartoDotTv /> },
  // { name: "Telegram", string: "https://t.me/kusakidesu", icon: <Telegram /> },

]
export default Socials
