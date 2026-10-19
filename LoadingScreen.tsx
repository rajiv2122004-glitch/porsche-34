export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-obsidian flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 rounded-full border-2 border-porcelain/20 border-t-racing-red animate-spin" />
        <p className="text-silver text-sm tracking-[0.2em] uppercase animate-pulse-slow">
          Loading
        </p>
      </div>
    </div>
  );
}
