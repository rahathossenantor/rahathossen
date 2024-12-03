import { PropsWithChildren } from "react";

const HeroOrbit = ({ children, orbit, rotate }: PropsWithChildren<{ orbit: number; rotate: number }>) => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
                className="flex items-start justify-start"
                style={{
                    width: `${orbit}px`,
                    height: `${orbit}px`,
                    transform: `rotate(${rotate}deg)`,
                }}
            >
                <div
                    className="inline-flex"
                    style={{
                        transform: `rotate(${rotate * -1}deg)`,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default HeroOrbit;
