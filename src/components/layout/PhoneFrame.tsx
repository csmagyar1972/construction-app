"use client";

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="relative">
        {/* Phone bezel */}
        <div className="w-[390px] h-[844px] bg-black rounded-[55px] p-[14px] shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[41px] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[34px] bg-black rounded-b-[18px] z-50" />
            {/* Status bar area */}
            <div className="h-[54px] bg-white" />
            {/* Content */}
            <div className="h-[calc(100%-54px)] overflow-y-auto overflow-x-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
