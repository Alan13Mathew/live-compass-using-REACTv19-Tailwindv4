import React, { useEffect, useState } from "react";

const Compass: React.FC = () => {
  const [heading, setHeading] = useState<number>(0);
  const [direction, setDirection] = useState<string>("N");

  const startCompass = () => {
    window.addEventListener("deviceorientationabsolute", handleOrientation);
  };

  const handleOrientation = (event: DeviceOrientationEvent) => {
    if (event.alpha !== null) {
      const heading = 360 - event.alpha;
      setHeading((prev) => {
        const diff = heading - prev;
        const smoothedDiff =
          diff > 180 ? diff - 360 : diff < -180 ? diff + 360 : diff;
        return (prev + smoothedDiff * 0.1 + 360) % 360;
      });
    }
  };

  const getDirection = (degrees: number): string => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    const index = Math.round((degrees * 16) / 360) % 16;
    return directions[index];
  };

  useEffect(() => {
    startCompass();
    return () => {
      window.removeEventListener(
        "deviceorientationabsolute",
        handleOrientation
      );
    };
  }, []);

  useEffect(() => {
    setDirection(getDirection(heading));
  }, [heading]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="relative w-80 h-80">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-800" />

        {/* Degree Markers */}
        {[...Array(360)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full"
            style={{ transform: `rotate(${i}deg)` }}
          >
            {i % 30 === 0 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <div className="w-0.5 h-3 bg-gray-600" />
                <div className="mt-1 text-xs text-gray-500">{i}°</div>
              </div>
            )}
          </div>
        ))}

        {/* Inner Circle with Aligned Cardinal Points */}
        <div className="absolute inset-12 rounded-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-inner border border-gray-700" />
        <div className="absolute inset-14 rounded-full bg-gradient-to-b from-gray-800 to-gray-900" />

        {/* Perfectly Aligned Cardinal Points */}
        <div className="absolute inset-[4.5rem]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-2xl font-bold text-red-500 ring-2 ring-red-500/20 rounded-full px-2.5 py-0.5">
              N
            </span>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <span className="text-2xl font-bold text-white ring-2 ring-white/20 rounded-full px-2.5 py-0.5">
              S
            </span>
          </div>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
            <span className="text-2xl font-bold text-white ring-2 ring-white/20 rounded-full px-2.5 py-0.5">
              E
            </span>
          </div>
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-2xl font-bold text-white ring-2 ring-white/20 rounded-full px-2.5 py-0.5">
              W
            </span>
          </div>
        </div>

        {/* Compass Needle */}
        <div
          className="absolute inset-0 transition-transform duration-150"
          style={{ transform: `rotate(${heading}deg)` }}
        >
          <div className="absolute top-[20%] left-1/2 w-1.5 h-[30%] bg-gradient-to-b from-red-500 to-red-600 -translate-x-1/2" />
          <div className="absolute bottom-[20%] left-1/2 w-1.5 h-[30%] bg-gradient-to-b from-gray-300 to-gray-400 -translate-x-1/2" />
        </div>

        {/* Center Pin */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-gray-700 to-gray-800 border-2 border-gray-600 shadow-lg" />
      </div>

      {/* Heading Display */}
      <div className="mt-8 text-center">
        <p className="text-5xl font-bold text-white">{Math.round(heading)}°</p>
        <p className="text-2xl mt-2 font-bold text-gray-400">{direction}</p>
      </div>
    </div>
  );
};

export default Compass;
