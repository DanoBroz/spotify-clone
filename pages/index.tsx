import {Center, Sidebar} from "../components"

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        <Sidebar />
        <Center />
      </main>
      <div></div>
    </div>
  )
}
