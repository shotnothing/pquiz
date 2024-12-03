import RetroGrid from "@/components/ui/retro-grid";

function App() {
  return (
    <>


      <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">

        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b 
        from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Jingwen's Personality Quiz
        </span>

        <RetroGrid />
      </div>




    </>
  )
}

export default App
