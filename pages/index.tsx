import { getSession } from "next-auth/react"
import { Center, Player, Sidebar } from "../components"

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  )
}

export const getServerSideProps = async context => {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}
