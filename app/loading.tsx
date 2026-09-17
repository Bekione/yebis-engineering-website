import DottedDiamondLoader from "@/components/DottedDiamondLoader";

export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-5 px-6 py-20 select-none">
      <DottedDiamondLoader size={64} color="#8d4b00" shape="square" />
      <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary/80">
        Loading Dossier...
      </span>
    </div>
  );
}
