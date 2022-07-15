import Default from "../../ui/default";

export default function Uwu() {
  return (
    <Default title="  🥺" description="👉👈">
      <div className="flex flex-col w-full h-full justify-center text-center">
        <span className="text-9xl text-center">🥺</span>

        <div className="flex flex-row w-full justify-center">
          <div className="-rotate-90">
            <div className="animate-bounce">
              <div className="rotate-90">
                <span className="text-8xl">👉</span>
              </div>
            </div>
          </div>

          <div className="rotate-90">
            <div className="animate-bounce">
              <div className="-rotate-90">
                <span className="text-8xl">👈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}
